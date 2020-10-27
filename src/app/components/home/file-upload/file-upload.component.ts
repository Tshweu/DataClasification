import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../services/file-upload.service';
import { HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  selectedFile: File = null;
  fileName : string = 'Choose file';
  fileExists : boolean = false;
  value:number = 0 ;
  

  constructor(private _fileUploadService: FileUploadService) { }

  ngOnInit(): void { }
  
  //event is passed to func
  //selected file is set to value of the selected file
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    this.fileName = this.selectedFile.name;
    this.fileExists = true;
    console.log(this.selectedFile);
  }
  //On upload button click
  //file service file upload function is passed file
  //then subscribed to, to get the return value 
  uploadFile(){
    this.fileExists = true;
    this._fileUploadService.fileUpload(this.selectedFile)
      .subscribe(event =>{
        if(event.type === HttpEventType.UploadProgress){
          this.value = event.loaded / event.total * 100;
          // console.log(event.loaded / event.total * 100);
        }else if(event.type === HttpEventType.Response){
          console.log(event);
        }
      })
  }

}
