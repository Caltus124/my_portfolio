<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    #[Route('/terminal', name: 'app_terminal')]
    public function terminal(): Response
    {
        return $this->render('home/terminal.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    #[Route('/sublimtext', name: 'app_sublimtext')]
    public function sublimtext(): Response
    {
        return $this->render('home/sublimtext.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
