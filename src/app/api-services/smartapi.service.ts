import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpointsService } from './core/api-endpoints.service';
import { ApiHttpService } from './core/api-http.service';
import { SecurityService } from './common/security.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class SmartapiService {
  constructor(
    private apiHttpServices: ApiHttpService,
    private apiEndPointServices: ApiEndpointsService,
    private securityService: SecurityService
  ) {}

  public smartPost(url, payload, encrypt = false,urlIndex = 0) {
    if(encrypt || environment.RES_REQ_SECURITY){
      payload =  this.securityService.encrypt(payload)
    }
     return this.apiHttpServices.post(url, payload)
  }

  public smartGet(url,decrypt = false, urlIndex = 0) {
    if(decrypt || environment.RES_REQ_SECURITY){
      url = this.securityService.decrypt(url)
    }
   return this.apiHttpServices.get(url)
  }

  public smartPut(url, payload, encrypt = false, urlIndex = 0) {
    if(encrypt || environment.RES_REQ_SECURITY){
      payload =  this.securityService.encrypt(payload)
    }
    return this.apiHttpServices.put(url, payload)
  }

  public smartDelete(url, urlIndex = 0) {
   return this.apiHttpServices.delete(url)
  }
}
