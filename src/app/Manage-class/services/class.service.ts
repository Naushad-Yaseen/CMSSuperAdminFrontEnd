import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }
  GetClassList()
  {
    return this.http.get('http://localhost:17808/api/Class/getClassList')
  }
  GetDepartdropdown()
  {
    return this.http.get('http://localhost:17808/api/Department/DepartmentDropDown')
  }
  addClass(data:any)
  {
    return this.http.post('http://localhost:17808/api/Class/addClass',data)
  }
  updateClass(data:any)
  {
    return this.http.post('http://localhost:17808/api/Class/updateClass',data)
  }
  ClassById(id:any)
  {
    return this.http.get('http://localhost:17808/api/Class/getClassById/'+id)
  }
  DeleteClass(id:any)
  {
    return this.http.delete('http://localhost:17808/api/Class/deleteClass/'+id)
  }
}
