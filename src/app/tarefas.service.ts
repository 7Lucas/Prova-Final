import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { status } from 'src/interfaceTarefas'

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http: HttpClient) {}

  private urlTarefas = 'https://jsonplaceholder.typicode.com/todos'

  stTarefas(): Observable<status[]>{
    return this.http.get<status[]>(this.urlTarefas)
  }
}