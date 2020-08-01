<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CommandRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(
 *     attributes={"security"="is_granted('ROLE_ADMIN')"},
 *     collectionOperations={
 *          "get" = {"security" = "is_granted('ROLE_USER')" },
 *          "post" = {"security" = "is_granted('ROLE_USER')"}
 *     },
 *     itemOperations={
 *          "get" = {"security" = "is_granted('ROLE_USER') or object.getUser() == user" },
 *          "put" = {"security" = "is_granted('ROLE_USER') or object.getUser() == user"},
 *          "delete" = {"security" = "is_granted('ROLE_USER') or object.getUser() == user"},
 *     },
 * )
 *
 * @ORM\Entity(repositoryClass=CommandRepository::class)
 */
class Command
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="commands")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $command_number;

    /**
     * @ORM\Column(type="float")
     */
    private $weight;

    /**
     * @ORM\ManyToOne(targetEntity=Adress::class, inversedBy="commands")
     * @ORM\JoinColumn(nullable=false)
     */
    private $adress;

    /**
     * @ORM\ManyToOne(targetEntity=ShippingCost::class, inversedBy="commands")
     * @ORM\JoinColumn(nullable=false)
     */
    private $shipping_cost;

    /**
     * @ORM\ManyToOne(targetEntity=Reduction::class, inversedBy="commands")
     * @ORM\JoinColumn(nullable=false)
     */
    private $reduction;

    /**
     * @ORM\Column(type="float")
     */
    private $total_price;

    /**
     * @ORM\ManyToOne(targetEntity=CreditCard::class, inversedBy="commands")
     * @ORM\JoinColumn(nullable=false)
     */
    private $payment;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

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

    public function getCommandNumber(): ?string
    {
        return $this->command_number;
    }

    public function setCommandNumber(string $command_number): self
    {
        $this->command_number = $command_number;

        return $this;
    }

    public function getWeight(): ?float
    {
        return $this->weight;
    }

    public function setWeight(float $weight): self
    {
        $this->weight = $weight;

        return $this;
    }

    public function getAdress(): ?Adress
    {
        return $this->adress;
    }

    public function setAdress(?Adress $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    public function getShippingCost(): ?ShippingCost
    {
        return $this->shipping_cost;
    }

    public function setShippingCost(?ShippingCost $shipping_cost): self
    {
        $this->shipping_cost = $shipping_cost;

        return $this;
    }

    public function getReduction(): ?Reduction
    {
        return $this->reduction;
    }

    public function setReduction(?Reduction $reduction): self
    {
        $this->reduction = $reduction;

        return $this;
    }

    public function getTotalPrice(): ?float
    {
        return $this->total_price;
    }

    public function setTotalPrice(float $total_price): self
    {
        $this->total_price = $total_price;

        return $this;
    }

    public function getPayment(): ?CreditCard
    {
        return $this->payment;
    }

    public function setPayment(?CreditCard $payment): self
    {
        $this->payment = $payment;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }
}
