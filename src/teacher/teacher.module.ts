import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { TeacherController } from '../teacher/teacher.controller';
import { TeacherService } from '../teacher/teacher.service';
import { StudentTeacherController } from './student.controller';

@Module({
  imports: [StudentModule],
  controllers: [TeacherController, StudentTeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
