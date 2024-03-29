import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent {
nombreE: string ="";
descripcionE: string = "";

constructor (private experienciaService:ExperienciaService, private router:Router){}
ngOnInit():void{}

onCreate():void{
const experiencia= new Experiencia(this.nombreE, this.descripcionE);
this.experienciaService.saveExperiencia(experiencia).subscribe(data=>{alert("Experiencia añadida");
this.router.navigate(['/attache/attache'])
}, err =>{
  alert("Falló");
  this.router.navigate(['/attache/attache']);
});

}}
