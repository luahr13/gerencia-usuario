import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-estado-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  tableColumns: string[] = ['id-column', 'nome-column', 'cpf-column'];
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

}