import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }
  subjectList()
  {
    return this.http.get('http://localhost:17808/api/Subject/getSubjectList')
  }
  addsubject(data:any)
  {
    return this.http.post('http://localhost:17808/api/Subject/addSubject',data)
  }
  updatesubject(data:any)
  {
    return this.http.post('http://localhost:17808/api/Subject/updateSubject',data)
  }
  subjectById(id:any)
  {
    return this.http.get('http://localhost:17808/api/Subject/getSubjectById/'+id)
  }
  deleteSubject(id:any)
  {
    return this.http.delete('http://localhost:17808/api/Subject/deleteSubject/'+id)
  }
}
