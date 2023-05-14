import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpointsService } from './core/api-endpoints.service';
import { ApiHttpService } from './core/api-http.service';
import { QueryStringParameters } from './core/query-string-parameters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SmartapiService {
  constructor(
    private apiHttpServices: ApiHttpService,
    private apiEndPointServices: ApiEndpointsService
  ) {}

  public smartPost(url, payload, secure = false, environment = 0) {
   this.apiHttpServices.post(url, payload).subscribe((response) => {
      return response
    })
  }

  public smartGet(url, secure = false, environment = 0) {
   this.apiHttpServices.get(url).subscribe((response) => {
    return response
   });
  }

  public smartPut(url, payload, secure = false, environment = 0) {
  this.apiHttpServices.put(url, payload).subscribe((response) => {
    return response
   });
  }

  public smartDelete(url, secure = false, environment = 0) {
   this.apiHttpServices.delete(url).subscribe((response) => {
      return response
   });
  }
}
