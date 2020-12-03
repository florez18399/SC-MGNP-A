import { Component, OnInit } from '@angular/core';
import {standardNormalDistInv, getRis, countInIntervals} from './normalDist.js';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-normal-dist',
  templateUrl: './normal-dist.component.html',
  styleUrls: ['./normal-dist.component.css']
})
export class NormalDistComponent implements OnInit {
  public chart: any = null;
  ris: number[];
  nis: number[];
  labels: string[];
  counts: number[];
  ranges: JSON[];

  constructor() { }

  ngOnInit(): void {
  }

  run(data): void{
    this.nis = standardNormalDistInv(data.quant, data.intervals, data.median, data.deviation);
    this.ris = getRis();
    let dataChart = countInIntervals();
    this.counts = dataChart.counts;
    this.ranges = dataChart.ranges;
    console.log(this.ranges);
    this.configureRangesText(dataChart.ranges);
    console.log(this.labels);
    this.configureChart();
  }

  configureRangesText(ranges): void {
    this.labels = [];
    let count = 1;
    ranges.forEach(range => {
       this.labels.push(count.toString()) ;
       count += 1;
    });
  }

  configureChart(): void {
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

}
