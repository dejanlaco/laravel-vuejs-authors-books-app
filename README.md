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
