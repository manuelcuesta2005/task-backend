import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from "./dto/create-task";
import { UpdateTaskDto } from "./dto/update-task";
import { Task, Status, Priority } from "./models/task.entity";

@Injectable()

export class TasksService{
     constructor(
        @InjectModel(Task)
        private readonly TaskModel: typeof Task) {}
    
    async getAlltask(): Promise<Task[]>{
        return this.TaskModel.findAll();
    }

    async getTaskForId(id: string ): Promise<Task> {
        return await this.TaskModel.findOne(
            {
                where: {
                    id: id
                }
            }
        )
    }
    async create_task(dto: CreateTaskDto): Promise<Task | any>{
        return this.TaskModel.create({
            Title: dto.Title,
            Date: dto.Date,
            Status: Status.pending,
            Priority : dto.Priority,
            Description : dto.Description
        }).then((response) => response).catch((error) => { return { "message_error": "exist title task" } })
    }

    async update_task(id: string, dto: UpdateTaskDto): Promise<Task | any>{
        return this.TaskModel.update(
            {
                Title: dto.Title,
                Date: dto.Date,
                Status  : Status.pending,
                Priority : dto.Priority,
                Description : dto.Description 
            }, { where : {id : id}  }
        )
    }
    

}