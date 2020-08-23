<?php


namespace App\Controller\Action;

use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;

class GetMeAction
{
    /**
     * @var Security
     */
    private $security;

    /**
     * GetMeAction constructor.
     * @param Security $security
     */
    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    /**
     * @return UserInterface
     */
    public function __invoke(): UserInterface
    {
        return $this->security->getUser();
    }
}
