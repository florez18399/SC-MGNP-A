import { Component, OnInit } from '@angular/core';
import { meanSquares, getXis} from './meanSquared.js';
import {DataRangesService} from '../data-ranges.service';


@Component({
  selector: 'app-mean-squares',
  templateUrl: './mean-squares.component.html',
  styleUrls: ['./mean-squares.component.css']
})
export class MeanSquaresComponent implements OnInit {
  jstat: any;
  ris: number[] = [];
  xis: number[] = [];
  nis: number[] = [];

  constructor(private dataRangeService: DataRangesService) { }

  ngOnInit(): void {

  }

  run(data): void {
    console.log('Hola mundo ', data);
    this.ris = meanSquares(data.seed, data.quant, data.k);
    this.xis = getXis();
    this.calculateNis();
  }

  calculateNis(): void{
    this.nis = [];
    let min: number = +this.dataRangeService.min;
    let max: number =  +this.dataRangeService.max;
    for(let riNumber of this.ris){
      this.nis.push(min + (max - min) * riNumber);
    }
  }

}
