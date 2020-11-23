import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from '../../../services/file-upload.service';
import { HttpEventType} from '@angular/common/http';
import { ModalDirective} from 'angular-bootstrap-md';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;
  selectedFile: File = null;
  fileName : string = 'Choose file';
  fileExists : boolean = false;
  excelSelected : boolean = false;
  fileTypes = [];
  fileType: number;
  value:number = 0;
  Sheets:any;
  selectedSheet : string;
  filename: string;

  constructor(private _fileUploadService: FileUploadService,private data: DataService,private _router:Router) { }

  ngOnInit(): void { 
    this.fileTypes = [{id:1,name:'Excel'},
                {id:2,name:'Text'},
                {id:3,name:'Word'}];
    this.Sheets = {sheets:'',
    filename:''};
  }
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
    this._fileUploadService.fileUpload(this.selectedFile,this.fileType)
      .subscribe(event =>{
        if(event.type === HttpEventType.UploadProgress){
          this.value = event.loaded / event.total * 100;
          // console.log(event.loaded / event.total * 100);
        }else if(event.type === HttpEventType.Response){
          console.log(event);
          if(this.excelSelected)
          {
            this.Sheets = event.body;
            console.log(this.Sheets);
          }
        }
      })
  }

  onTypeSelected(val:any){
    if(this.fileType == 1){
      this.excelSelected = true;
    }else{
      this.excelSelected = false;
    }
    console.log(val+ " :val  "+ this.fileType + " excel " + this.excelSelected)
  }

  onSheetSelected(){
    this._fileUploadService.sheetSelection(this.selectedSheet,this.Sheets.filename)
    .subscribe(res => {this.data.updateData(res);
      this._router.navigateByUrl('home/review');
    console.log(res)},
      err => {})
  }

}
