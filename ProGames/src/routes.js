import PageList from './pages/PageList';
import PageDetail from './pages/PageDetail';
import NotFound from './pages/NotFound';

const routes = {
    '': PageList,
    'list': PageList,
    'detail': PageDetail,
    'notFound': NotFound,
};

export default routes;
