import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repsository/user.repository';
export declare class UserService {
    private readonly userRepsitory;
    private readonly userValu;
    private readonly random;
    apiKey: string;
    constructor(userRepsitory: UserRepository, userValu: string, random: any);
    create(createUserDto: CreateUserDto): any;
    findAll(): string[];
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
