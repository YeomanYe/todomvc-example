

export default class Filter {
    static all(todos) {
        return todos;
    };
    static active(todos) {
        return todos.filter(function (todo) {
            return !todo.completed;
        });
    };
    static completed(todos) {
        return todos.filter(function (todo) {
            return todo.completed;
        });
    };
}
