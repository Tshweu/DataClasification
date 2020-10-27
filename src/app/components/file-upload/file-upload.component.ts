import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  selectedFile: File = null;
  fileName : string = 'Choose file';
  constructor(private _fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  //event is passed to func
  //selected file is set to value of the selected file
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    this.fileName = this.selectedFile.name;
    console.log(this.selectedFile);
  }
  //On upload button click
  //file service file upload function is passed file
  //then subscribed to, to get the return value 
  uploadFile(){
    this._fileUploadService.fileUpload(this.selectedFile)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
      )
  }

}
