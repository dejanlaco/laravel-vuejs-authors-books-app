<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Book;
use App\Author;
use Faker\Generator as Faker;

$factory->define(Book::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(4),
        'release_date' => $faker->dateTimeBetween(),
        'author_id' => Author::all()->random()->id
    ];
});
