import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudentsByTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentResponseDto[] {
    return this.studentService.getStudentByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentByTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): StudentResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
