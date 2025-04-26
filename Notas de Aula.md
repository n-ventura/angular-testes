# Adilson
app.config.ts → só providers.
SharedModule → importar nos componentes que precisarem.

// A melhor forma de organizar, as importações no projecto é criado um share, pode ser de serviços ou de modulos. 

src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SharedModule {}

// src/app/app.config.ts
    importProvidersFrom(SharedModule)

** <app-www></app-www>

Notas: 
No Angular novo (standalone components):
Cada componente é independente!
Cada componente diz diretamente o que ele importa (outros componentes, pipes, diretivas, etc).
Não precisa mais de AppModule.
O Angular lê o app.config.ts para bootstrapping, mas os próprios componentes gerenciam suas dependências.


Resumindo
O SharedModule serve para centralizar componentes, pipes, diretivas etc.
No standalone Angular, você importa SharedModule usando importProvidersFrom no app.config.ts.
Com isso, qualquer componente do SharedModule já pode ser usado direto no HTML!
