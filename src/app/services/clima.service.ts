import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  URI: string = '';
  apiKey = '9fa68bbd7fecb95ba86c8975e57a5906';

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getClima(nombreCiudad: string){
    return this.httpClient.get(`${this.URI}${nombreCiudad}`)
  }
}
