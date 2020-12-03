import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataRangesService {
  max: number;
  min: number;
  constructor() { }
}
