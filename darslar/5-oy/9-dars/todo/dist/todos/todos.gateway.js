"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const todos_service_1 = require("./todos.service");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
let TodosGateway = class TodosGateway {
    constructor(todosService) {
        this.todosService = todosService;
    }
    create(createTodoDto) {
        console.log({ createTodoDto, message: 'salom' });
        return this.todosService.create(createTodoDto);
    }
    findAll() {
        return this.todosService.findAll();
    }
    findOne(id) {
        return this.todosService.findOne(id);
    }
    update(updateTodoDto) {
        return this.todosService.update(updateTodoDto.id, updateTodoDto);
    }
    remove(id) {
        return this.todosService.remove(id);
    }
};
exports.TodosGateway = TodosGateway;
__decorate([
    (0, websockets_1.SubscribeMessage)('createTodo'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", void 0)
], TodosGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllTodos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodosGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOneTodo'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodosGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateTodo'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_todo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", void 0)
], TodosGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removeTodo'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodosGateway.prototype, "remove", null);
exports.TodosGateway = TodosGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosGateway);
//# sourceMappingURL=todos.gateway.js.map