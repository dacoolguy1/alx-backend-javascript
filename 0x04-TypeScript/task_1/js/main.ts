interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key, string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

const teacher1: Teacher = {
    firstName: 'Frank',
    lastName: 'Donald',
    fullTimeEmployee: true,
    location: 'New Jersey',
    contract: false,
}

console.log(teacher1);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Smith',
    location: 'America',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return '${firstName[0]} ${lastName[0]} ';
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacherFunction: PrintTeacherFunction = printTeacher;

console.log(printTeacher('John', 'Doe')); // J. Doe

