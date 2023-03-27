import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  
  highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotShadow: false,
        type: 'pie',
      },
      title: {
          text: '',
          align: 'left'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Brands',
          type: 'pie',
          colorByPoint: true,
          data: [
            {
              name: 'Chrome',
              y: 70.67
          }, {
              name: 'Edge',
              y: 14.77
          },  {
              name: 'Firefox',
              y: 4.86
          }, {
              name: 'Safari',
              y: 2.63
          }, {
              name: 'Internet Explorer',
              y: 1.53
          },  {
              name: 'Opera',
              y: 1.40
          }, {
              name: 'Sogou Explorer',
              y: 0.84
          }, {
              name: 'QQ',
              y: 0.51
          }, {
              name: 'Other',
              y: 2.6
          }]
      }]
    }
  }

  onLogout() {
    this.router.navigate(['/auth']);
  }
}
