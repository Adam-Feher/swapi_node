import {injectable} from "inversify";
import {TodoModel} from "../models/TodoModel";

@injectable()
export class TodoService {

    private todos: TodoModel[] = [
        {
        _id: 'abc',
        text: 'Learn Node in 1 day',
        completed: true
        },
        {
            _id: 'def',
            text: 'write unit tests',
            completed: false
        }];

    public getAllTodos = () => {
        console.log(this.todos);
        return this.todos;
    };

    public getTodoById = (id: string) => {
        return this.todos.find(todo => todo._id === id);
    };

    public createTodo = (todo: TodoModel) => {
        this.todos.push(todo);
        console.log(this.todos);
        return todo;
    };

    public deleteTodo = (id: string) => {
        const todo = this.getTodoById(id);
        this.todos = this.todos.filter(todo => todo._id !== id);
        return todo;
    };

    public updateTodo = (id: string, text: string) => {
        this.todos = this.todos
            .map(todo => todo._id === id ? {...todo, text} : todo);
        return this.getTodoById(id);
    };

    public toggleTodo = (id: string) => {
        this.todos = this.todos
            .map(todo => todo._id === id ? {...todo, completed: !todo.completed} : todo);
        return this.getTodoById(id);
    };
}