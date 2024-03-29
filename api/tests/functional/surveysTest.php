<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use GuzzleHttp\Client;

final class SurveysTest extends TestCase
{
  public function testReturnSurveys(): void
  {
    $client = new Client();
    $response = $client->request('GET', 'http://server/api/surveys');

    $this->assertEquals('200', $response->getStatusCode());

    $content = json_decode((string) $response->getBody(), true);
    $this->assertContains([
      'name' => 'Paris',
      'code' => 'XX1',
    ], $content);
  }
}
