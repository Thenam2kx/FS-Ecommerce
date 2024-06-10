<?php
session_start();

include_once __DIR__ . './vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

include_once __DIR__ .'/routers/index.php';
