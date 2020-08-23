<?php

namespace App\Controller\Api;

use App\Entity\Comment;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;

class UserCreateController
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    /**
     * @param UserPasswordEncoderInterface $passwordEncoder
     */
    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function __invoke(User $data)
    {
        $data->setPassword (
            $this->passwordEncoder->encodePassword( $data, $data->getPassword() )
        );

        return $data;
    }
}