import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksModule } from './Tasks/task.module';
import { UsersModule } from './Users/Users.module';
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true, // no need to import into other modules
  }),
  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'task master',
    autoLoadModels: true,
    synchronize: true,
  }),
  TasksModule,
  UsersModule,
  AuthModule
],
  controllers: [],
  providers: [],
  

})
export class AppModule {}
