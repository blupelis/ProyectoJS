<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        $title="Home";
        return $this->render('/base.html.twig', [
            'controller_name' => 'PageController',
        ]);
    }

    /**
     * @Route("/about", name="about")
     */
    public function about()
    {
        $title="About";
        return $this->render('/page/about.html.twig', [
            'controller_name' => 'PageController',
        ]);
    }

    /**
     * @Route("/services", name="services")
     */
    public function services()
    {
        $title="Services";
        return $this->render('/page/services.html.twig', [
            'controller_name' => 'PageController',
        ]);
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {   
        $title="Contact";
        return $this->render('/page/contact.html.twig', [
            'controller_name' => 'PageController',
        ]);
    }

    /**
     * @Route("/peliculas", name="peliculas")
     */
    public function peliculas()
    {
        $title="Home";
        return $this->render('/page/peliculas.html.twig', [
            'controller_name' => 'PageController',
        ]);
    }
}
