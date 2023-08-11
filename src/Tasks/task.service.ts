import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { CreateTasksDto } from "./dto/create-task-dto";
import { UpdateTaskDto } from "./dto/update-task";
import { Tasks, status, category, priority} from "./models/tasks.entity";

@Injectable()
export class TasksService{
     constructor(
        @InjectModel(Tasks)
        private readonly tasksModel: typeof Tasks) { }
    
    async getAlltask(): Promise<Tasks[]>{
        return this.tasksModel.findAll();
    }

    async getTaskForId(id: number ): Promise<Tasks> {
        return await this.tasksModel.findOne(
            {
                where: {
                    id: id
                }
            }
        )
    }
    async create_task(dto: CreateTasksDto): Promise<Tasks | any>{
        return await this.tasksModel.create({
            title: dto.title,
            date: dto.date,
            category: dto.category,
            status: status.pending,
            priority : priority.medium,
            description : dto.description
        }).then((response) => response).catch((error) => { return { "message_error": "exist title task" } })
    }

    async update_task(id: number, dto: UpdateTaskDto): Promise<Tasks | any>{
        return this.tasksModel.update(
            {
                Title: dto.title,
                Date: dto.date,
                Status  : dto.status,
                Priority : dto.priority,
                Description : dto.description 
            }, { where : {id : id}  }
        )
    }


    

}