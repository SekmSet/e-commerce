<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CreditCardRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(
 *     attributes={"security"="is_granted('ROLE_ADMIN')"},
 *     collectionOperations={
 *          "get",
 *          "post" = {"security"="is_granted('ROLE_USER')" }
 *     },
 *     itemOperations={
 *          "get" = {"security"="object.getUser() == user"},
 *          "put" = {"security"="object.getUser() == user"},
 *          "delete" = {"security"="object.getUser() == user"}
 *     }
 * )
 * @ORM\Entity(repositoryClass=CreditCardRepository::class)
 */
class CreditCard
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     *
     * @ORM\OneToOne(targetEntity=Command::class, mappedBy="creditCards", cascade={"persist", "remove"})
     *
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="creditCards")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $typecard;

    /**
     * @ORM\Column(type="string", length=255)
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

    /**
     * @ORM\OneToMany(targetEntity=Command::class, mappedBy="payment")
     */
    private $commands;

    public function __construct()
    {
        $this->commands = new ArrayCollection();
    }

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

    public function getNumbercard(): ?string
    {
        return $this->numbercard;
    }

    public function setNumbercard(string $numbercard): self
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

    /**
     * @return Collection|Command[]
     */
    public function getCommands(): Collection
    {
        return $this->commands;
    }

    public function addCommand(Command $command): self
    {
        if (!$this->commands->contains($command)) {
            $this->commands[] = $command;
            $command->setPayment($this);
        }

        return $this;
    }

    public function removeCommand(Command $command): self
    {
        if ($this->commands->contains($command)) {
            $this->commands->removeElement($command);
            // set the owning side to null (unless already changed)
            if ($command->getPayment() === $this) {
                $command->setPayment(null);
            }
        }

        return $this;
    }
}
