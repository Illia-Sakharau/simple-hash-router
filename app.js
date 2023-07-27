import { notFoundContent } from './pages/notFound.js';
import { homeContent } from './pages/home.js';
import { aboutContent } from './pages/about.js';

const conteiner = document.querySelector('#conteiner');

const routes = [
  {
    path: '#NotFound',
    view: () => conteiner.innerHTML = notFoundContent
  },
  {
    path: '',
    view: () => conteiner.innerHTML = homeContent
  },
  {
    path: '#about#1',
    view: () => conteiner.innerHTML = aboutContent
  },
];

const router = async () => {
  const match = routes.find((potentialMatch) => potentialMatch.path === location.hash) || routes[0];
  return match.view();
};

window.addEventListener('popstate', router);
router();