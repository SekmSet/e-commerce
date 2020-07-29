<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ShippingCostRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ShippingCostRepository::class)
 */
class ShippingCost
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $carrier;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Country;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Weight;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Prices;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Free;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCarrier(): ?string
    {
        return $this->carrier;
    }

    public function setCarrier(string $carrier): self
    {
        $this->carrier = $carrier;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->Country;
    }

    public function setCountry(string $Country): self
    {
        $this->Country = $Country;

        return $this;
    }

    public function getWeight(): ?string
    {
        return $this->Weight;
    }

    public function setWeight(string $Weight): self
    {
        $this->Weight = $Weight;

        return $this;
    }

    public function getPrices(): ?string
    {
        return $this->Prices;
    }

    public function setPrices(string $Prices): self
    {
        $this->Prices = $Prices;

        return $this;
    }

    public function getFree(): ?string
    {
        return $this->Free;
    }

    public function setFree(string $Free): self
    {
        $this->Free = $Free;

        return $this;
    }
}
