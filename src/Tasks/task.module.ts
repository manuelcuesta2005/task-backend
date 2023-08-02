import { Module } from "@nestjs/common/";
import { Task } from "./models/task.entity"; 
import { SequelizeModule } from "@nestjs/sequelize";
import { TasksService } from "./task.service";
import { TaskController } from "./task.controller";

@Module({
    imports: [SequelizeModule.forFeature([Task])],
    controllers: [TaskController],
    providers: [TasksService]
})

export class TasksModule {};