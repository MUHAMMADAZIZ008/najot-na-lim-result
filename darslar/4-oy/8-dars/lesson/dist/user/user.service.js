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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./repsository/user.repository");
let UserService = class UserService {
    constructor(userRepsitory, userValu, random) {
        this.userRepsitory = userRepsitory;
        this.userValu = userValu;
        this.random = random;
    }
    create(createUserDto) {
        return this.random;
    }
    findAll() {
        return this.userRepsitory.findAll();
    }
    findOne(id) {
        return this.userValu;
    }
    update(id, updateUserDto) {
        return this.apiKey;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
__decorate([
    (0, common_1.Inject)('apiKey'),
    __metadata("design:type", String)
], UserService.prototype, "apiKey", void 0);
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('userRepo')),
    __param(1, (0, common_1.Inject)('userSecret')),
    __param(2, (0, common_1.Inject)('random')),
    __metadata("design:paramtypes", [user_repository_1.UserRepository, String, Object])
], UserService);
//# sourceMappingURL=user.service.js.map