import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL: string =  'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}/usuarios`);
  }

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}/usuarios`, usuario);
  }
}