import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //São usados porquê o HttpClient retorna dados de forma assíncrona
import {Categoria} from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    private baseUrl = "http://localhost:7218";

constructor(private http: HttpClient) { }

  technologies : string[] = ["Angular 16", "C#", "Java", "Python", "JavaScript"];

  getTechnologies(){
    return this.technologies;
  }

  getCategorias():Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/Categorias`);
  }
}
