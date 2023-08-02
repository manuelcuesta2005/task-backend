import { Column, Model, Table, Default } from "sequelize-typescript";

export enum Status{
    pending = "pending",
    in_progress = "In progress",
    completed = "Completed"
}

export enum Priority{
    low= 'Low',
    medium ='Medium',
    high='High'
}

@Table
export class Task extends Model{
    @Column
    Title: string
    @Column
    Date: Date
    @Column
    Status: Status
    @Column
    Priority: Priority
    @Column
    Description:string
}