import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AgreementType } from '../models/AgreementType.request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AgreementService {

  url:string = environment.apiBaseUrl;
  AList: AgreementType[] =[] ;
  constructor(private http:HttpClient) { }

  newentry(model:AgreementType):Observable<void>
  {
    return this.http.post<void>(this.url,model)
  }

  refresh()
  {
    this.http.get(this.url)
    .subscribe({
      next: (res)=>{
        this.AList = res as AgreementType[];
        console.log(this.AList);
      }
    })
  }


}
