import {Component, OnInit, Input, OnChanges} from '@angular/core';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.data) {
      this.allData['temprature'] =[];
      this.allData['pressure'] =[];
      this.allData['humidity'] =[];
      this.allData['wind'] =[];

      changes.data.currentValue.list.forEach((item) => {
        this.allData['temprature'].push(item.main.temp);
        this.allData['pressure'].push(item.main.pressure);
        this.allData['humidity'].push(item.main.humidity);
        this.allData['wind'].push(item.wind.speed);
      });

      this.barChartLabels = changes.data.currentValue.list.map((item) => {
        return item.dt_txt;
      });

      this.currentProperty = 'wind';

      this.barChartData = [
        {data: this.allData[this.currentProperty]}
      ];
    }
  }

  @Input() data;



  public barChartLabels:string[];
  public barChartData:any[];
  public allData = {};
  public currentProperty:string;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  // events
  public chartClicked(e:any):void {
    console.log(this.data);
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  updateChart(type) {
    this.currentProperty = type;

    this.barChartData = [
      {data: this.allData[this.currentProperty]}
    ];
  }

  // public randomize():void {
  //   // Only Change 3 values
  //   let data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   let clone = JSON.parse(JSON.stringify(this.barChartData));
  //   clone[0].data = data;
  //   this.barChartData = clone;
  // }
}

