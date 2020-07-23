import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StutentTableDataSource, StutentTableItem } from './stutent-table-datasource';

@Component({
  selector: 'app-stutent-table',
  templateUrl: './stutent-table.component.html',
  styleUrls: ['./stutent-table.component.css']
})
export class StutentTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<StutentTableItem>;
  dataSource: StutentTableDataSource;

 
  displayedColumns = ['name','class','section','subject1','subject2','subject3'];

  ngOnInit() {
    this.dataSource = new StutentTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }
}
