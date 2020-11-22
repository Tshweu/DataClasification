import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private upload_url = 'http://localhost:8080/api/upload';
  private update_url = 'http://localhost:8080/api/update';

  constructor(private _http:HttpClient) { }

  fileUpload(file,fileType){
    this.indentifyFileType(fileType);
    const fd = new FormData();
    fd.append('file',file,file.name);
    return this._http.post<any>(this.upload_url,fd, {
      reportProgress: true,
      observe: 'events'
    });
  }

  indentifyFileType(fileType: String): void{
    switch(fileType){
      case 'Excel':
        this.upload_url = 'http://localhost:8080/api/upload/excel';
      case 'Word':
        this.upload_url = 'http://localhost:8080/api/upload/word';
      case 'Text':
        this.upload_url = 'http://localhost:8080/api/upload/txt';
    }
  }

  sheetSelection(Sheet,filename){
    this.update_url = 'http://localhost:8080/api/upload/excelSheet';
    return this._http.post<any>(this.upload_url,{"sheet":Sheet,"filename":filename});
  }

  fileUpdate(data){
    return this._http.post(this.update_url,data);
  }
}
