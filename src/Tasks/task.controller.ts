import {Body, Controller, Post, Get, Delete, Param, Put} from '@nestjs/common';
import { TasksService } from './task.service';
import { CreateTaskDto } from './dto/create-task';
import { UpdateTaskDto } from './dto/update-task';
import { Task } from './models/task.entity';

@Controller('Task')
export class TaskController{
    constructor(private taskServices:TasksService) { }
    
    @Post()
    create_task(@Body() dto: CreateTaskDto): Promise<Task>{
        return this.taskServices.create_task(dto)
    }

    @Get()
    getallTask(){
        return this.taskServices.getAlltask()
    }

    @Get('/:id')
    getTaskforId(@Param() Params: any): Promise<Task>{
        return this.taskServices.getTaskForId(Params.id)
    }

    @Put('/:id')
    updateTask(@Param() params: any, @Body() dto: UpdateTaskDto): Promise<Task>{
        return this.taskServices.update_task(params.id, dto)
    }

    

}