import {Router} from 'director/build/director';

export default function bindRouter(data,field) {
    let routes = {
        '/all': () => data[field] = 'all',
        '/active': () => data[field] = 'active',
        '/completed': () => data[field] = 'completed'
    };

    let router = Router(routes);
    router.configure({
        notfound: function () {
            window.location.hash = '';
            data[field] = 'all';
        }
    });
    router.init();
}
