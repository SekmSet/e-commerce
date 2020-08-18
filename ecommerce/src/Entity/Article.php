<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     attributes={"security"="is_granted('ROLE_ADMIN')"},
 *     normalizationContext={"groups"={"read"}},
 *     collectionOperations={
 *          "get" = {"security" = "is_granted('IS_AUTHENTICATED_ANONYMOUSLY')" },
 *          "post"
 *     },
 *     itemOperations={
 *          "get" = { "security" = "is_granted('IS_AUTHENTICATED_ANONYMOUSLY')" },
 *          "put",
 *          "delete"
 *     },
 * )
 * @ApiFilter(SearchFilter::class, properties={"name": "partial", "description": "partial"})
 *
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 */
class Article
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read"})
     */
    private $color;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read"})
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read"})
     */
    private $average_grades;

    /**
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="article")
     * @Groups({"read"})
     */
    private $images;

    /**
     * @ORM\OneToMany(targetEntity=Stock::class, mappedBy="articles")
     */
    private $stocks;



    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->stocks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getAverageGrades(): ?string
    {
        return $this->average_grades;
    }

    public function setAverageGrades(string $average_grades): self
    {
        $this->average_grades = $average_grades;

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setArticle($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->contains($image)) {
            $this->images->removeElement($image);
            // set the owning side to null (unless already changed)
            if ($image->getArticle() === $this) {
                $image->setArticle(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Stock[]
     */

    /**
     * @return Collection|Stock[]
     */
    public function getStocks(): Collection
    {
        return $this->stocks;
    }

    public function addStock(Stock $stock): self
    {
        if (!$this->stocks->contains($stock)) {
            $this->stocks[] = $stock;
            $stock->setArticles($this);
        }

        return $this;
    }

    public function removeStock(Stock $stock): self
    {
        if ($this->stocks->contains($stock)) {
            $this->stocks->removeElement($stock);
            // set the owning side to null (unless already changed)
            if ($stock->getArticles() === $this) {
                $stock->setArticles(null);
            }
        }

        return $this;
    }



}
