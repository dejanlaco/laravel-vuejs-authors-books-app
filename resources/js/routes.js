import AllBooks from './components/AllBooks.vue';
import AllAuthors from './components/AllAuthors.vue';

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
    }
];