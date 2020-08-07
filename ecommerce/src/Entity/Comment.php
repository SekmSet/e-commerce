<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\CommentRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     attributes={"security"="is_granted('ROLE_ADMIN')"},
 *     normalizationContext={"groups"={"read"}},
 *     collectionOperations={
 *          "get" = {"security" = "is_granted('IS_AUTHENTICATED_ANONYMOUSLY')" },
 *          "post" = {
 *              "security" = "is_granted('ROLE_USER')",
 *              "controller" = App\Controller\Api\CommentCreateController::class
 *          },
 *     },
 *     itemOperations={
 *          "get" = {"security" = "is_granted('IS_AUTHENTICATED_ANONYMOUSLY')" },
 *          "put" = {"security" = "is_granted('ROLE_ADMIN') or object.getUser() == user"},
 *          "delete" = {"security" = "is_granted('ROLE_ADMIN') or object.getUser() == user"},
 *     },
 * )
 * @ApiFilter(SearchFilter::class, properties={"article" : "exact"})
 *
 * @ORM\Entity(repositoryClass=CommentRepository::class)
 */
class Comment
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Article::class)
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"read"})
     */
    private $article;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"read"})
     */
    private $user;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read"})
     */
    private $note;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read"})
     */
    private $comment;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getArticle(): ?Article
    {
        return $this->article;
    }

    public function setArticle(?Article $article): self
    {
        $this->article = $article;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getNote(): ?int
    {
        return $this->note;
    }

    public function setNote(int $note): self
    {
        $this->note = $note;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }
}
