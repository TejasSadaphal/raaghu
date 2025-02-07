import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetBar {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-bar-horizontal',
  templateUrl: './rds-chart-bar-horizontal.component.html',
  styleUrls: ['./rds-chart-bar-horizontal.component.scss']
})
export class RdsChartBarHorizontalComponent implements OnInit {

  static count = 0;
  canvas: any;
  ctx: any;
  //chartId = 'horizontalChart' + RdsChartBarHorizontalComponent.count;
  @Input() chartId:string='horizontalChart0';
  @Input() chartWidth = 100;
  @Input() chartHeight = 350;
  @Input() chartLabels?: any
  @Input() chartDataSets?: ChartDataSetBar[] | any;
  @Input() chartOptions?: any;
  style: CSSStyleDeclaration | undefined;

  constructor() { }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
/*     this.chartDataSets[0].backgroundColor[0] = this.style.getPropertyValue('--chartColor1');
    this.chartDataSets[0].backgroundColor[1] = this.style.getPropertyValue('--chartColor2');
    this.chartDataSets[0].backgroundColor[2] = this.style.getPropertyValue('--chartColor3');
    this.chartDataSets[0].backgroundColor[3] = this.style.getPropertyValue('--chartColor4');
    this.chartDataSets[0].backgroundColor[4] = this.style.getPropertyValue('--chartColor5');
    this.chartDataSets[0].backgroundColor[5] = this.style.getPropertyValue('--chartColor6');
    this.chartDataSets[0].backgroundColor[6] = this.style.getPropertyValue('--chartColor7');
    this.chartDataSets[0].backgroundColor[7] = this.style.getPropertyValue('--chartColor8');
    this.chartDataSets[0].backgroundColor[8] = this.style.getPropertyValue('--chartColor9');
    this.chartDataSets[0].backgroundColor[9] = this.style.getPropertyValue('--chartColor10'); */
  }

  ngOnChanges(): void {
    this.barChartBrowser();
  }

  ngAfterViewInit(): void {
    this.barChartBrowser();
  }



  barChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.ctx = this.canvas.getContext('2d');
      const canvas = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if(canvas !== null){
        canvas.canvas.style.height = this.chartHeight+'px'; 
        canvas.canvas.style.width = this.chartWidth+'px';
      }    
    }
  }

}
