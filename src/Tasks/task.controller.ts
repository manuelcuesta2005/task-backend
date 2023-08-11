import {Body, Controller, Post, Get, Delete, Param, Put} from '@nestjs/common';
import { TasksService } from './task.service';
import { CreateTasksDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task';
import { Tasks } from './models/tasks.entity';

@Controller('Tasks')
export class TaskController{
    constructor(private services:TasksService) { }
    
    @Post()
    async create_task(@Body() dto: CreateTasksDto): Promise<Tasks>{
        return await this.services.create_task(dto)
    }

    @Get()
    getallTask(){
        return this.services.getAlltask()
    }

    @Get('/:id')
    getTaskforId(@Param() Params: any): Promise<Tasks>{
        return this.services.getTaskForId(Params.id)
    }

    @Put('/:id')
    updateTask(@Param() params: any, @Body() dto: UpdateTaskDto): Promise<Tasks>{
        return this.services.update_task(params.id, dto)
    }

    

}