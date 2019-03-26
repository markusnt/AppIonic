import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { Grupo } from '../models/grupo';

@Component({
  selector: 'app-cardapio',
  templateUrl: 'cardapio.page.html',
  styleUrls: ['cardapio.page.scss']
})
export class cardapioPage {

  public grupos: Grupo[]

  constructor(public navCtrl: NavController, 
    private _http: HttpClient){
                
      this._http.get<Grupo[]>('http://192.168.1.179:1337/grupo')
                .subscribe(
                  (grupos) => {
                    this.grupos = grupos;
                  }
                );
          
  }
}
