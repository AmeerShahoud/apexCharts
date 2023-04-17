import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
} from 'ng-apexcharts';
import { ChartOptions } from '../content/content.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() chartOptions!: Partial<ChartOptions>;

  constructor() {}
}
