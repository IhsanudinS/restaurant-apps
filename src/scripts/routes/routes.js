import home from '../views/pages/home-pages';
import favorites from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': home,
  '/home-pages': home,
  '/detail/:id': Detail,
  '/favorite': favorites,
};

export default routes;
