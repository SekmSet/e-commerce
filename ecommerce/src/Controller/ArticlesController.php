<?php

namespace App\Controller;

use App\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ArticlesController
 * @package App\Controller
 */
class ArticlesController extends AbstractController
{
    /**
     * @Route("/articles", name="articles_")
     */
    public function index()
    {
        // test j'appel tout mes articles
        // Doctrine c'est notre composer qui ns permet de faire nos requettes en bdd
        //je charge une repository, celle qui correspond à mes artircles
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
        //permet de voir le résulta
        dd($articles);

        return $this->render('articles/index.html.twig', [
            'controller_name' => 'ArticlesController',
        ]);
    }
}
