import {Component, OnInit} from '@angular/core';
import {ClimaService} from './services/clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clima-app';

  // @ts-ignore
  clima;

  constructor(private climaService: ClimaService) {
  }

  ngOnInit() {

  }

  getClima(nombreCiudad: string) {
    this.climaService.getClima(nombreCiudad)
      .subscribe(
        res => {
          this.clima = res
          console.log(res)
        },
        error => console.log(error)
      ) //Metodo que se ejecuta luego de ejecutar metodo de obtener clima
  }

  submitLocation(nombreCiudad: HTMLInputElement) {
    if (nombreCiudad.value) {
      this.getClima(nombreCiudad.value);
      console.log(nombreCiudad);
      nombreCiudad.value = '';
    }else {
      alert("Por favor escriba el nombre de la ciudad");
    }
    nombreCiudad.focus();
    return false;
  }
}
