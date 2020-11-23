import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // upload_url : string = ''; //'http://localhost:8080/api/upload';
  private update_url = 'https://data-catalog-0.herokuapp.com/api/update';

  constructor(private _http:HttpClient) { }

  fileUpload(file,fileType){
    //this.indentifyFileType(fileType);
    let url='';
    switch(fileType){
      case '1':
        url = 'https://data-catalog-0.herokuapp.com/api/upload/excel';
        console.log(url);    
        break;
      case '2':
        url = 'https://data-catalog-0.herokuapp.com/api/upload/txt';
        break;
      case '3':
        url = 'https://data-catalog-0.herokuapp.com/api/upload/word';
        break;
    }

    const fd = new FormData();
    fd.append('file',file,file.name);
    return this._http.post<any>(url,fd, {
      reportProgress: true,
      observe: 'events'
    });
  }

  sheetSelection(Sheet,filename){
    let url = 'https://data-catalog-0.herokuapp.com/api/upload/excelSheet';
    return this._http.post<any>(url,{"sheet":Sheet,"filename":filename});
  }

  fileUpdate(data){
    return this._http.post(this.update_url,data);
  }
}
