<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $data['judul'] ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="<?= BASEURL ?>/js/<?= $data['js'] ?>" defer></script>
    <link rel="stylesheet" href="<?= BASEURL ?>/css/<?= $data['css'] ?>">
</head>
<div class="container mx-auto flex justify-between py-3">
    <div class="logo">
        <a href="#">TiketID</a>
    </div>
    <div class="navbar-nav flex gap-5">
        <a href="#">Daftar</a>
        <a href="#">Masuk</a>
    </div>
</div>

<body>