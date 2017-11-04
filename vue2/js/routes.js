(function() {
    function all() {
        app.visibility = 'all';
    };

    function active() {
        app.visibility = 'active';
    };

    function completed() {
        app.visibility = 'completed';
    };
    var routes = {
        '/all': all,
        '/active': active,
        '/completed': completed
    };

    var router = Router(routes);
    router.configure({
        notfound: function() {
            window.location.hash = '';
            app.visibility = 'all';
        }
    });
    router.init();
})(app, Router);