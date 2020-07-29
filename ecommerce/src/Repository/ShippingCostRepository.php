<?php

namespace App\Repository;

use App\Entity\ShippingCost;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ShippingCost|null find($id, $lockMode = null, $lockVersion = null)
 * @method ShippingCost|null findOneBy(array $criteria, array $orderBy = null)
 * @method ShippingCost[]    findAll()
 * @method ShippingCost[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ShippingCostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ShippingCost::class);
    }

    // /**
    //  * @return ShippingCost[] Returns an array of ShippingCost objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ShippingCost
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
