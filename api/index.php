<?php
declare(strict_types=1);

define('ROOT_PATH', realpath('.'));
if (file_exists(ROOT_PATH.'/vendor/autoload.php') === false) {
    echo "run this command first: composer install";
    exit();
}
require_once ROOT_PATH.'/vendor/autoload.php';

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Silex\Application;

$app = new Application();
$app['debug'] = true;
$app->after(function(Request $request, Response $response) {
    $response->headers->set('Access-Control-Allow-Origin', '*');
});

$app->get('/', function() {
    return 'Status OK';
});

$app->get('/surveys', function() use ($app) {
  $surveys = [];

  $directoryPath = ROOT_PATH.'/data/survey';
  foreach (glob($directoryPath.'/*.json') as $filePath) {
    $json = file_get_contents($filePath);
    $survey = json_decode($json, true);
    $surveys[] = $survey;
  }

  return $app->json($surveys);
});

$app->run();
