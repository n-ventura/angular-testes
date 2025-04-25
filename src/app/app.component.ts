import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AppService} from '../services/app.service';
import {Categoria} from '../models/Categoria';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  technologies: string[] = [];
  constructor(private appService: AppService) {
  }
  saudacao : string = "Ola mundo do ts";
  //tecnologias : string[] = ["Angular 16", "C#", "Java", "Python", "JavaScript"];

  apareceSaudacao: boolean = true;
  categorias: Categoria[] = [];
  ngOnInit(){
    this.technologies = this.appService.getTechnologies();
    this.appService.getCategorias().subscribe(data => this.categorias = data);
    //subscribe: receber os dados de forma assíncrona
  }

}
