<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SublimtextController extends AbstractController
{
    #[Route('/sublimtext', name: 'app_sublimtext')]
    public function index(): Response
    {
        return $this->render('sublimtext/index.html.twig', [
            'controller_name' => 'SublimtextController',
        ]);
    }
}
