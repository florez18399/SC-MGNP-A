import { Component, OnInit } from '@angular/core';
import { uniformDist, countInIntervals } from './uniform.js';
import {Chart} from 'chart.js'
import {DataRangesService} from '../data-ranges.service';
@Component({
  selector: 'app-uniform',
  templateUrl: './uniform.component.html',
  styleUrls: ['./uniform.component.css']
})
export class UniformComponent implements OnInit {
  ris: number[] = [];
  nis: number[] = [];
  ranges: JSON[] = [];
  chart: any = null;
  counts: number[] = [];
  labels: string[] = [];

  constructor(private dataRangeService: DataRangesService) { }

  ngOnInit(): void {
  }

  run(data): void{
    console.log(data);
    this.ris = uniformDist(data.quant, data.intervals);
    const dataChart = countInIntervals();
    this.ranges = dataChart.ranges;
    this.counts = dataChart.counts;
    this.calculateNis();
    this.configureRangesText();
    this.createChart();
  }

  configureRangesText(): void {
    this.labels = [];
    let count = 1;
    this.ranges.forEach(range => {
      this.labels.push(count.toString()) ;
      count += 1;
    });
  }

  createChart(): void {
    let canvas = <HTMLCanvasElement>document.getElementById("diagBarras");
    let contexto = canvas.getContext('2d');
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    this.chart = new Chart('diagBarras', {
      type: 'bar',
      data: {
        labels: this.labels,

        datasets: [
          {
            label: 'Data',
            fill: false,
            data: this.counts,
            backgroundColor: '#168ede',
            borderColor: '#168ede'
          }
        ]
      },
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'white'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              minRotation: 0,
              maxRotation: 0
            }
          }]
        }
      }
    });
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
