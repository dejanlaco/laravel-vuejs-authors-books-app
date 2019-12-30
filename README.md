![app screenshot](https://user-images.githubusercontent.com/18518676/71575351-ecb2a300-2aec-11ea-80c7-f08ae0115e60.png)

## Starting up

<pre><code>git clone https://github.com/dejanlaco/laravel-vuejs-authors-books-app
cd laravel-vuejs-authors-books-app
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
npm install
npm run dev
php artisan serve</code></pre>
