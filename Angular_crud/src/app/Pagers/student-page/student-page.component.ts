import { Component } from '@angular/core';
import { StudentService, studentRes } from 'src/app/Service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
  constructor(private studentService: StudentService){}

  students!: studentRes[];
  isLoading: boolean = false

  ngOnInit(){
    this.getStudentList();

  }
  getStudentList(){
    this.isLoading = true;
    this.studentService.getStudents().subscribe((res: any)=>{
      console.log(res);
      this.students = res[1];
      this.isLoading = false;
    });
  }

  deleteStudent(id: number) {
    if (confirm('Are you confirm the delete ?')) {
      this.studentService.deleteStdByID(id).subscribe({
        next: (res: any) => {
          console.log(res);
          alert(res.Status || 'Successfully Deleted!');
          // Refresh the student list after deletion
          this.getStudentList();
        },
        error: (err) => {
          console.error('Error deleting student:', err);
          alert(err.error.message || 'Failed to delete the student');
        },
      });
    }
  }
  

}
