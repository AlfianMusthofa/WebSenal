<?php

class Header extends Controller
{
    function index()
    {
        $data['css'] = 'header.css';
        $this->view('templates/header', $data);
        $this->view('templates/footer');
    }
}
