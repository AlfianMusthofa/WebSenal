<?php

class Home extends Controller
{
    function index()
    {
        $data['judul'] = 'TiketID | Menyediakan Kebutuhan Akomodasi Pilihan';
        $data['css'] = 'home.css';
        $data['js'] = 'home.js';
        $this->view('templates/header', $data);
        $this->view('home/index', $data);
        $this->view('templates/footer');
    }
}
