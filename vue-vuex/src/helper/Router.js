import {Router} from 'director/build/director';
import store from '../store';

function dispatch(visibility){
    store.dispatch('toggleVisibility',visibility);
}


export default function bindRoute() {
    let routes = {
        '/all': () => dispatch('all'),
        '/active': () => dispatch('active'),
        '/completed': () => dispatch('completed')
    };

    let router = Router(routes);
    router.configure({
        notfound: function () {
            window.location.hash = '';
            dispatch('all');
        }
    });
    router.init();
}
