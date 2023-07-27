import { Column, Default, Model, Table } from "sequelize-typescript"

@Table
export class Users extends Model{
    
    @Default(1)
    @Column
    RolID: number
    @Column
    full_name: string
    @Column
    identification: string
    @Column
    email: string
    @Column
    password: string
}