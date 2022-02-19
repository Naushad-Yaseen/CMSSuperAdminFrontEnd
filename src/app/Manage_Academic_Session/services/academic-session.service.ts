import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcademicSessionService {

  constructor(private http:HttpClient) { }
  addSession(data:any)
  {
    return this.http.post('http://localhost:17808/api/AcademicSession/addAcademicSession',data)
  }
  updateSession(data:any)
  {
    return this.http.post('http://localhost:17808/api/AcademicSession/updateAcademicSession',data)
  }

  getAcademidSessionStatus()
  {
    return this.http.get('http://localhost:17808/api/AcademicSession/GetAcademicSessionStatus')
  }
  getAcademidSessionList()
  {
    return this.http.get('http://localhost:17808/api/AcademicSession/GetAcademicSessionList')
  }
  DeleteAcademidSession(id:any)
  {
    return this.http.delete('http://localhost:17808/api/AcademicSession/DeleteAcademicSession/'+id)
  }
  getAcademidSessionById(id:any)
  {
    return this.http.get('http://localhost:17808/api/AcademicSession/GetAcademicSessionById/'+id)
  }
  getLockUnlockAcademidSession(id:any)
  {
    return this.http.get('http://localhost:17808/api/AcademicSession/Lock/UnlockAcademicSession/'+id)
  }
}
