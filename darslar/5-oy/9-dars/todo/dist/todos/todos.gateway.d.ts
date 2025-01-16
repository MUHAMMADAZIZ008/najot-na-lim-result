import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosGateway {
    private readonly todosService;
    constructor(todosService: TodosService);
    create(createTodoDto: CreateTodoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateTodoDto: UpdateTodoDto): string;
    remove(id: number): string;
}
