<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ReductionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ReductionRepository::class)
 */
class Reduction
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
    private $Coded;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Percentage;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCoded(): ?string
    {
        return $this->Coded;
    }

    public function setCoded(string $Coded): self
    {
        $this->Coded = $Coded;

        return $this;
    }

    public function getPercentage(): ?string
    {
        return $this->Percentage;
    }

    public function setPercentage(string $Percentage): self
    {
        $this->Percentage = $Percentage;

        return $this;
    }
}
