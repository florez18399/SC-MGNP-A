import { Component, OnInit } from '@angular/core';
import {DataRangesService} from '../data-ranges.service';

@Component({
  selector: 'app-ranges',
  templateUrl: './ranges.component.html',
  styleUrls: ['./ranges.component.css']
})
export class RangesComponent implements OnInit {

  constructor(private dataRangeServices: DataRangesService) { }

  get max(): number{
    return this.dataRangeServices.max;
  }

  set max(value: number){
    this.dataRangeServices.max = value;
  }

  get min(): number{
    return this.dataRangeServices.min;
  }

  set min(value: number){
    this.dataRangeServices.min = value;
  }

  ngOnInit(): void {

  }

}
