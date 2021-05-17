import { Injectable } from '@angular/core';
import { BlueFlag } from '../models/blue-flag';

@Injectable({
  providedIn: 'root'
})
export class BlueFlagService {


  private readonly blueFlags: BlueFlag[] = [{
    "region":"Piemonte",
    "province":"VERBANO-CUSIO-OSSOLA",
    "city":"Cannero Riviera",
    "beach":"Spiaggia Lido"
},{
    "region":"Piemonte",
    "province":"NOVARA",
    "city":"Gozzano",
    "beach":"Lido di Gozzano"
},{
    "region":"Lombardia",
    "province":"BRESCIA",
    "city":"Gardone Riviera",
    "beach":"Lido ’84"
},{
    "region":"Lombardia",
    "province":"BRESCIA",
    "city":"Gardone Riviera",
    "beach":"Spiaggia Casinò"
},{
    "region":"Trentino Alto Adige",
    "province":"TRENTO",
    "city":"Bedollo",
    "beach":"Località Piazze"
},{
    "region":"Trentino Alto Adige",
    "province":"TRENTO",
    "city":"Baselga di Pinè",
    "beach":"Spiaggia Lido"
},{
    "region":"Trentino Alto Adige",
    "province":"TRENTO",
    "city":"Baselga di Pinè",
    "beach":"Alberon"
},
{
    "region":"Trentino Alto Adige",
    "province":"TRENTO",
    "city":"Baselga di Pinè",
    "beach":"Bar Spiaggia"
}];

  constructor() { }

  retrieveBlueFrags(): BlueFlag[]{
    return this.blueFlags;
  }

  retrieveBlueFragsByCity(city: string): BlueFlag[]{
    return this.blueFlags.filter(flag => flag.city === city);
  }
}
