import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, Student } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  // getAssignmentListByStudentAPI(userId, schoolId, status) {
  //   return this.http.get<any>(`${environment.baseUrl}${assignmentServices.getAssignmentByStudentAPI}
  // ${'?studentUserId=' + userId + '&schoolId=' + schoolId + '&status=' + status}`);
  // }
  // getStudentDetailsByAcademecIdClassIdSectionId(academicSessionId: any,classId: any,sectionId: any) {
  //   return this.http.get('http://localhost:17808/api/Student/getStudentDetailsByClassIdSectionIdAcademicId/'  +sectionId)
  // }
  getStudentDetailsByAcademecIdClassIdSectionId(academicSessionId: any, classId: any, sectionId: any) {
    return this.http.get<any>(`${environment.baseUrl}${Student.getstudentDetailByAcademicIdClassIdSectionId}${'?AcademicSessionId=' + academicSessionId + '&ClassId=' + classId + '&SectionId=' + sectionId}`)
  }
  studentList() {
    return this.http.get('http://localhost:17808/api/Student/getStudent')
  }

  addStudent(data: any) {
    return this.http.post('http://localhost:17808/api/Student/addStudent', data)
  }
  updateStudent(data: any) {
    return this.http.post('http://localhost:17808/api/Student/updateStudent', data)
  }

  StudentParentById(id: any) {
    return this.http.get('http://localhost:17808/api/Student/getStudentParentById/' + id)
  }
  sectionByClassId(id: any) {
    return this.http.get('http://localhost:17808/api/Student/getSectionByClassId/' + id)
  }
  DeleteStudent(id: any) {
    return this.http.delete('http://localhost:17808/api/Student/deleteStudent/' + id)
  }
  academicSessionDropDown() {
    return this.http.get('http://localhost:17808/api/AcademicSession/GetAcademicSessionDropDown')
  }
}
