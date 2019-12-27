import AllBooks from './components/AllBooks.vue';
import AllAuthors from './components/AllAuthors.vue';
import ShowAuthor from './components/ShowAuthor.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllBooks
    },
    {
        name: 'authors',
        path: '/authors',
        component: AllAuthors
    },
    {
        name: 'author',
        path: '/author/:id',
        component: ShowAuthor
    }
];