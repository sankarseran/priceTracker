import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  baseUrl = 'https://rest.coinapi.io';
  apiKey = 'F050324B-089A-46C6-A7EA-A0EDD8C75E01';
  headers = new HttpHeaders().set('X-CoinAPI-Key', this.apiKey);
  options = { headers: this.headers };
  constructor(private http: HttpClient) {}

  GetAll() {
    console.log('service called');
    return this.http.get<any[]>(
      this.baseUrl + '/v1/assets?filter_type_is_crypto=1',
      this.options
    );
  }
}
