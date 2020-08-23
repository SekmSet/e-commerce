<?php

namespace App\Controller\Api;

use App\Entity\Comment;
use App\Entity\User;
use Symfony\Component\Security\Core\Security;

class CommentCreateController
{
    /**
     * @var Security
     */
    private $security;

    /**
     * CommentCreateController constructor.
     * @param Security $security
     */
    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function __invoke(Comment $data)
    {
        /* @var $user User */
        $user = $this->security->getUser();
        $data->setUser($user);

        return $data;
    }
}