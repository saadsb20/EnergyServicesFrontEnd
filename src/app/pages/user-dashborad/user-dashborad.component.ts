import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnergyService } from 'src/app/services/energy.service';
import { ETService } from 'src/app/services/et.service';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample2
} from "../../variables/charts";
@Component({
  selector: 'app-user-dashborad',
  templateUrl: './user-dashborad.component.html',
  styleUrls: ['./user-dashborad.component.css']
})
export class UserDashboradComponent implements OnInit {
  form: FormGroup;
  form1: FormGroup;
  barChartData: number[] = [];
  ETBalance: number;
  EthBalance: number;
  WeiBalance: number;
  TotalSupply: number;
  ETBalanceInEth: any;
  MyServices: any[];
  MyServicesCount: any;
  TotalUsedEnergy: number;
  barChartLabels: string[] = [];
  services: { date: "", value: 0, station: "", cable: "" }[];

  data: any;


  constructor(private etService: ETService, private energyService: EnergyService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      privateKey: '',
      station: '',
      cable: '',
      value: 0
    });
    this.form1 = this.formBuilder.group({
      privateKey: '',
      amount: 0
    });
    this.getETBalance();
    this.getEthBalance();
    this.getWeiBalance();
    this.getTotalSupply();
    this.getMyServices();
    this.ETBalanceInEth = this.ETBalance * 0.000000012;


    var barChart = document.getElementById('bar-chart');

    parseOptions(Chart, chartOptions());

    this.data = {
      labels: this.barChartLabels,
      datasets: [{
        label: 'Energy consumption',
        data: this.barChartData
      }]
    }

    var ordersChart = new Chart(barChart, {
      type: 'bar',
      options: chartExample2.options,
      data: this.data
    });
  }

  getETBalance() {
    this.etService.getETBalance().subscribe((res: any) => {
      console.log(res);
      this.ETBalance = res;
    });
  }
  getEthBalance() {
    this.etService.getEthBalance().subscribe((res: any) => {
      console.log(res);
      this.EthBalance = res;
    });
  }
  getWeiBalance() {
    this.etService.getWeiBalance().subscribe((res: any) => {
      console.log(res);
      this.WeiBalance = res;
    });
  }
  getTotalSupply() {
    this.etService.getTotalSupply().subscribe((res: any) => {
      console.log(res);
      this.TotalSupply = res;
    });
  }

  getMyServices() {
    this.energyService.getMyServices().subscribe((res: any) => {
      console.log(res);
      this.MyServices = res;
      this.services = res;
      this.MyServicesCount = res.length;
      this.TotalUsedEnergy = 0;
      this.MyServices.forEach(service => {
        this.TotalUsedEnergy += service.value;

      });
      var i = 0;
      this.services.forEach(service => {
        this.barChartData[i] = service.value;
        this.barChartLabels[i] = service.date;
        i++;
      });
      console.log(this.barChartLabels);
      console.log(this.barChartData);
    });

  }
  buyService() {
    const data = {
      privateKey: this.form.getRawValue().privateKey,
      station: this.form.getRawValue().station,
      cable: this.form.getRawValue().cable,
      value: this.form.getRawValue().value
    }

    this.energyService.buyService(data).subscribe((res: any) => {
      console.log(res);
      this.ngOnInit();
    });

  }
  buyET() {
    const data = {
      privateKey: this.form1.getRawValue().privateKey,
      amount: this.form1.getRawValue().amount
    }
    this.etService.buyET(data).subscribe((res: any) => {
      console.log(res);
      this.ngOnInit();
    });
  }
}
