import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mesas',
  templateUrl: 'mesas.page.html',
  styleUrls: ['mesas.page.scss']
})
export class mesasPage {

  public mesas;

  constructor(public navCtrl: NavController){
    this.mesas = [
      { nro: 9 },
      { nro: 25 },
      { nro: 62 },
      { nro: 18 },
      { nro: 36 },
    ]
  }
}
