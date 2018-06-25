import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.data) {
    this.allData['temperature'] = [];
        this.allData['pressure'] = [];
        this.allData['humidity']= [];
        this.allData['wind'] = [];

      changes.data.currentValue.list.forEach((item: any) => {
        this.allData['temperature'].push(item.main.temp);
        this.allData['pressure'].push(item.main.pressure);
        this.allData['humidity'].push(item.main.humidity);
        this.allData['wind'].push(item.wind.speed);
      });

      this.barChartLabels = changes.data.currentValue.list.map((item: any) => {
        return this.datePipe.transform(new Date(item.dt_txt), 'MMM d, h:mm a');
      });

      this.currentProperty = 'wind';

      this.barChartData = [
        {data: this.allData[this.currentProperty]}
      ];
    }
  }

  @Input() data: any;

  public barChartLabels: string[];
  public barChartData: any[];
  public allData = {};
  public currentProperty: string;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }]
    }
  };

  public barChartType: string = 'bar';

  updateChart(type: string): void {
    this.currentProperty = type;

    this.barChartData = [
      {data: this.allData[this.currentProperty]}
    ];
  }

}

