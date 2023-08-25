import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class UsuarioModule { }