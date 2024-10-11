import { Module } from "@nestjs/common";
import { UsersController } from "./controllers/user.controller";
import { AccountsController } from "./controllers/account.controller";
import { UsersService } from "./services/user.services";


@Module({
    imports: [],
    controllers: [UsersController, AccountsController],
    providers: [UsersService],
    exports: [UsersService]
})

export class UsersModule { }