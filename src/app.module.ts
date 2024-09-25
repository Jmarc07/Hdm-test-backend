import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'dg31',
            password: 'jean1234marc',
            database: 'mysql57',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true, // Set to false in production
        }),
        TasksModule,
    ],
})
export class AppModule {}
