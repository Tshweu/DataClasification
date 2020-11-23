import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
  elements: any = [];
  metaData: any = [];
  previous: any = [];
  headElements = ['', 'Field', 'Classification'];

  classification = '';

  constructor(private cdRef: ChangeDetectorRef,private data:DataService) { }

  ngOnInit() {

    
    this.data.currentData.subscribe(meta=> {this.metaData = meta});
    // console.log(this.elements);
    // this.mdbTable.setDataSource(this.elements);
    // this.elements = this.mdbTable.getDataSource();
    // this.previous = this.mdbTable.getDataSource();
    
    //console.log(this.metaData);  
  }

  getData(){
    this.data.currentData.subscribe(meta=> {this.elements = meta});
    console.log(this.elements);
  }
  ngAfterViewInit() {
  
  }

  checkClassification(el){
      let index = this.elements.indexOf(el);
      this.elements[index].classified = this.elements[index].classified=== false ? true : false;
      this.elements[index] = el;
      //console.log(this.metaData);    
  }

}
