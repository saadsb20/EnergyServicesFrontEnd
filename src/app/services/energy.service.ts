import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {
  host: string = "http://127.0.0.1:8080"

  constructor(private Http: HttpClient) { }

  getMyServices() {
    return this.Http.get(this.host + "/myServices", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  buyService(data) {
    return this.Http.post(this.host + "/addService", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
}
