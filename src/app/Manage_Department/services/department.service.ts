import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  departmentList()
  {
    return this.http.get('http://localhost:17808/api/Department/DepartmentList')
  }
  getDepartmentById(id:any)
  {
    return this.http.get('http://localhost:17808/api/Department/DepartmentById/'+id)
  }
  addDepartment(data:any)
  {
    return this.http.post('http://localhost:17808/api/Department/AddDepartment',data)
  }
  updateDepartment(data:any)
  {
    return this.http.post('http://localhost:17808/api/Department/UpdateDepartment',data)
  }
  Deletedepartment(id:any)
  {
    return this.http.delete('http://localhost:17808/api/Department/DeleteDepartment/'+id)
  }
}
