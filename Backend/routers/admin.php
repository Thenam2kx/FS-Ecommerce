<?php
$router->mount('/admin', function() use ($router) {

  // will result in '/movies/'
  $router->get('/', function() {
      echo 'Admin page';
  });

  $router->mount('/products', function() use ($router) {

    $router->get('/list', function() {
      echo 'product list ';
    });

    $router->get('/create', function() {
      echo 'product create ';
    });

    $router->get('/update', function($id) {
      echo 'product update ';
    });

  });
  
});