<?php

use Admin\Backend\Controllers\Home;

$router->get("/", Home::class . "@index");

$router->get("/about", function () {
  echo "About";
});

$router->get('/movies/{movieId}/photos(/\d+)?', function($movieId, $photoId = null) {
  echo 'Movie #' . $movieId . ', photo #' . $photoId;
});