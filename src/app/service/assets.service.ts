import { Observable, of } from 'rxjs';
import { Asset } from 'src/app/model/Assets.Model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  baseUrl = 'https://rest.coinapi.io';
  apiKey = '95E8F718-5A9C-4DF1-ADD6-28F265C76921';
  headers = new HttpHeaders().set('X-CoinAPI-Key', this.apiKey);
  options = { headers: this.headers };
  constructor(private http: HttpClient) {}

  GetAll() {
    const stringList = localStorage.getItem('assetsList');
    if (stringList) {
      return of(JSON.parse(stringList));
    }
    return this.http.get<Asset[]>(
      this.baseUrl + '/v1/assets?filter_type_is_crypto=1',
      this.options
    );
  }
}
