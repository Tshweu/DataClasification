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
  metaData: any;
  previous: any = [];
  headElements = ['', 'Field', 'Data', 'Classification'];

  classification = '';

  constructor(private cdRef: ChangeDetectorRef,private data:DataService) { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i,classification: ''});
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();

    this.data.currentData.subscribe(meta=> {this.metaData = meta});
    //console.log(this.metaData);  
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  checkClassification(el){
      let index = this.elements.indexOf(el);
      this.elements[index].classification = this.elements[index].classification === '' ? 'Classified':'';
      // this.elements[index] = el;
      //console.log(this.metaData);  
      //
  }

}
