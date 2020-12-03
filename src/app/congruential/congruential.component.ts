import { Component, OnInit } from '@angular/core';
import {congruentialMethod, getXis} from './conguential.js';
import {DataRangesService} from '../data-ranges.service';

@Component({
  selector: 'app-congruential',
  templateUrl: './congruential.component.html',
  styleUrls: ['./congruential.component.css']
})
export class CongruentialComponent implements OnInit {
  isClosedInterval: boolean = false;
  typeCongruential: string;
  nis: number[];
  xis: number[];
  ris: number[];

  constructor(private dataRangeService: DataRangesService) { }

  ngOnInit(): void {
  }

  run(data): void {
    let isMultiplicative = (this.typeCongruential === "Multiplicativo" ) ? true : false;
    this.ris = congruentialMethod(data.seed, data.k, data.c, data.g, this.isClosedInterval, isMultiplicative);
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
