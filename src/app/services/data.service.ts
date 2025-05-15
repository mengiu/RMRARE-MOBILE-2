import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Documento } from '../logic/documento';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public endpoint = "http://localhost:3000";
  public documentoEntity = "/documenti";

  constructor(private httpClient: HttpClient) { }

  getList(callback: Function) {
     const list = [
       new Documento(1, "Double Espresso", "Cafe Tortoni"),
       new Documento(2, "Honey Americano", "Starcoffee")
     ];
     callback(list);
     //this.httpClient.get(`${this.endpoint}${this.coffeeEntity}`)
     // .subscribe(response => callback(response))
  }

  get(documentoId: number, callback: Function) {
    //this.httpClient.get(`${this.endpoint}${this.coffeeEntity}/${coffeeId}`)
    //  .subscribe(response => callback(response));
    const list = [
      new Documento(1, "Double Espresso", "Cafe Tortoni"),
      new Documento(2, "Honey Americano", "Starcoffee")
    ];
    const documento = list.find(doc => doc._idDocumento == documentoId);
    callback(documento);
       
  }
/*   save(documento: any, callback: Function) {
    if (documento._idDocumento) {
      // It's an update
      // http://localhost:3000/coffees/12333
      // TODO: Error checking
      this.httpClient.put(`${this.endpoint}${this.documentoEntity}/${documento._idDocumento}`, documento)
        .subscribe(response => callback(true));
    } else {
      // It's a new item
      this.httpClient.post(`${this.endpoint}${this.documentoEntity}`, documento)
        .subscribe(response => callback(true));
    }
  }
 */
}
