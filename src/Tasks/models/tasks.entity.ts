import { Column, Model, Table } from "sequelize-typescript";

export enum status{
    pending = "pending",
    in_progress = "In progress",
    completed = "Completed"
}

export enum priority{
    low= 'Low',
    medium ='Medium',
    high='High'
}

export enum category{
    WORK = 'Work',
    SPORT = 'Sport',
    HEALTH = 'Health',
    EVENTS = 'Events'
}

@Table
export class Tasks extends Model{
    @Column({unique: true})
    title: string
    @Column
    date: Date
    @Column
    category: category
    @Column
    status: status
    @Column
    priority: priority
    @Column
    description:string
}