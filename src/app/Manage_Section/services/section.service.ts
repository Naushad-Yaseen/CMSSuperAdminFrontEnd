import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http:HttpClient,) { }
  getSection()
  {
    return this.http.get('http://localhost:17808/api/Section/GetSectionList')
  }
  getSectionById(id:any)
  {
    return this.http.get('http://localhost:17808/api/Section/GetSectionById/'+id)
  }
  deleteSection(id:any)
  {
    return this.http.delete('http://localhost:17808/api/Section/deleteSection/'+id)
  }

  addSection(data:any)
  {
    return this.http.post('http://localhost:17808/api/Section/addSection',data)
  }
  updateSection(data:any)
  {
    return this.http.post('http://localhost:17808/api/Section/updateSection',data)
  }
  getSectionDropDown()
  {
    return this.http.get('http://localhost:17808/api/Section/GetSectionDeopDown')
  }
  getClassDropDown()
  {
    return this.http.get('http://localhost:17808/api/Class/getClassDropDown')
  }
}
