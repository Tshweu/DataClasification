import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private upload_url = 'http://localhost:8080/api/upload';

  constructor(private _http:HttpClient) { }

  fileUpload(file){
    const fd = new FormData();
    fd.append('file',file,file.name);
    return this._http.post<any>(this.upload_url,fd, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
