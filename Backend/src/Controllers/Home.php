<?php
namespace Admin\Backend\Controllers;

// use Admin\Backend\Commons\Controller;
use Admin\Backend\Commons\Helper;
use Admin\Backend\Models\ProductMdl;

class Home {
  public function index() {
    $product = new ProductMdl();

    Helper::debug($product->getAll('*'));

    echo "trang chu";
  }
}
