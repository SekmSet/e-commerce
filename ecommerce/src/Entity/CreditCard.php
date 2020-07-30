<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CreditCardRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=CreditCardRepository::class)
 */
class CreditCard
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="creditCards")
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $typecard;

    /**
     * @ORM\Column(type="integer")
     */
    private $numbercard;

    /**
     * @ORM\Column(type="date")
     */
    private $dateexp;

    /**
     * @ORM\Column(type="integer")
     */
    private $cvv;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getTypecard(): ?string
    {
        return $this->typecard;
    }

    public function setTypecard(string $typecard): self
    {
        $this->typecard = $typecard;

        return $this;
    }

    public function getNumbercard(): ?int
    {
        return $this->numbercard;
    }

    public function setNumbercard(int $numbercard): self
    {
        $this->numbercard = $numbercard;

        return $this;
    }

    public function getDateexp(): ?\DateTimeInterface
    {
        return $this->dateexp;
    }

    public function setDateexp(\DateTimeInterface $dateexp): self
    {
        $this->dateexp = $dateexp;

        return $this;
    }

    public function getCvv(): ?int
    {
        return $this->cvv;
    }

    public function setCvv(int $cvv): self
    {
        $this->cvv = $cvv;

        return $this;
    }
}
