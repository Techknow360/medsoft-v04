import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpointsService } from './core/api-endpoints.service';
import { ApiHttpService } from './core/api-http.service';
import { QueryStringParameters } from './core/query-string-parameters';

@Injectable({
  providedIn: 'root'
})
export class SmartapiService {

  constructor(
    private apiHttpServices : ApiHttpService,
    private apiEndPointServices : ApiEndpointsService
  ){

  }
  
  public login()  {
    this.apiHttpServices.get(this.apiEndPointServices.createUrlWithQueryParameters('productlist', 
    (qs: QueryStringParameters) => {
      qs.push('countryCode', "en");
      qs.push('postalCode', "603102");
    })).subscribe(()=>{
      
    })
  }
}
