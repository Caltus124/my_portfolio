<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjetsController extends AbstractController
{
    #[Route('/projets', name: 'app_projets')]
    public function index(): Response
    {

        if (isset($_GET['projet'])){
            $data_json = file_get_contents('../public/js/data.json');
            $data_json = json_decode($data_json,true);


            foreach ($data_json['projet'] as $projet) {
                if ($_GET['projet'] == $projet['id']){
                    $data_projet = $projet;
                    $pages = "Work";
                }
            }

            return $this->render('projets/details.html.twig', [
                'data' => $data_projet,
            ]);
        }



        return $this->render('projets/index.html.twig', [
            'controller_name' => 'ProjetsController',
        ]);
    }

}
