export class FindStudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class StudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class createStudentRequestDto {
  name: string;
  teacher: string;
}

export class updateStudentRequestDto {
  name: string;
  teacher: string;
}
