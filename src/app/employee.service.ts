import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { 
  }

  public getallse()

    {

      return this.http.get("http://localhost:62478/api/StockExchange/getall");

    }

    public Getallusers():Observable<Employee[]>

    {

      return this.http.get<Employee[]>("https://localhost:44325/api/Employee");

    }

  public doGET(){
    console.log("GET");
    let url = `https://localhost:44325/api/Employee`;

    return this.http.get(url);
  }
}
