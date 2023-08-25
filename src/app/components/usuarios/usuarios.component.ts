import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

}