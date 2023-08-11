import { Module } from "@nestjs/common/";
import { Tasks } from "./models/tasks.entity"; 
import { SequelizeModule } from "@nestjs/sequelize";
import { TasksService } from "./task.service";
import { TaskController } from "./task.controller";

@Module({
    imports: [SequelizeModule.forFeature([Tasks])],
    controllers: [TaskController],
    providers: [TasksService]
})

export class TasksModule {};