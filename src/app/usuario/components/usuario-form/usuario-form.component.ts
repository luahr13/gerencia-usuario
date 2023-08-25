import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-estado-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router) {
    this.formGroup = formBuilder.group({
      nome:['', Validators.required],
      cpf:['', Validators.required]
    })
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const novoUsuario = this.formGroup.value;
      this.usuarioService.salvar(novoUsuario).subscribe({
        next: (usuarioCadastrado) => {
          this.router.navigateByUrl('/usuarios/list');
        },
        error: (err) => {
          console.log('Erro ao salvar' + JSON.stringify(err));
        }
      })
    
    }
  }

}