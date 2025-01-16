import { applyDecorators, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/user/guard/auth.guard";

export  function AuthRoles(...roles: string[]{
    return applyDecorators(UseGuards(AuthGuard, RoleGuard), Roles(...roles)) //bu authGuard bilan roleGuard ni bitada ishlatiladi
})