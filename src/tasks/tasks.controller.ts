import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import {TasksService} from './tasks.service';
import { CreateTaskDto } from './dto/createTaskDto';
import { GetTasksFilterDto } from './dto/getTasksFilter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    @Get()
    getTasks(@Query() filterDto : GetTasksFilterDto):Task[] {
    
        return this.tasksService.getAllTasks();
    }

    
    @Get('/:id')
    getTaskById(@Param ('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }
    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto):Task {
        return    this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string, @Body('status') status: TaskStatus): Task {
        return this.tasksService.updateTaskStatus(id, status);
    }
}
