import { Stay } from './../../model/stay';
import { Travel } from './../../model/travel';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-travel-table',
  templateUrl: './travel-table.component.html',
  styleUrls: ['./travel-table.component.css']
})
export class TravelTableComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
