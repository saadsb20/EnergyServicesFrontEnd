import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ETService {
  host: string = "http://127.0.0.1:8080"

  constructor(private Http: HttpClient) { }


  getETBalance() {
    return this.Http.get(this.host + "/accountBalance", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  getEthBalance() {
    return this.Http.get(this.host + "/getEthBalance", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  getWeiBalance() {
    return this.Http.get(this.host + "/getWeiBalance", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  getTotalSupply() {
    return this.Http.get(this.host + "/getTotalSupply");
  }

  buyET(data) {
    return this.Http.post(this.host + "/transferTo", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });

  }
}
