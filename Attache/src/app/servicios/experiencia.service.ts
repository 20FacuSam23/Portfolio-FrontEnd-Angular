import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
URL = environment.URL + 'exp/';

constructor(private httpClient: HttpClient) { }

public lista(): Observable<Experiencia[]> {
  return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
}

public detail(id: number): Observable<Experiencia> {
  return this.httpClient.get<Experiencia>(this.URL + `detail/${id}`);
}

public update(id: number, experiencia:Experiencia): Observable<any> {
  return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
}
public saveExperiencia(experiencia:Experiencia): Observable<any> {
  return this.httpClient.post<any>(this.URL + 'create', experiencia);
}  

public deleteExperiencia(id:number): Observable<any> {
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}
}
