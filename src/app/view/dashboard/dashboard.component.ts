import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart: any;
  chartConfig : any = [];

  ngOnInit(): void {
      this.createChart();
  }

  createChart(){
      this.chartConfig = [
        {
          labels:['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13','2022-05-14', '2022-05-15', '2022-05-16','2022-05-17'],
          data : ['467','576', '572', '79', '92','574', '573', '576']
        }
      ]
  }
  

}
