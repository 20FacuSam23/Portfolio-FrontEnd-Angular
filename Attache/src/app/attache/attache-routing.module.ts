import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ExperienciaComponent } from './componentes/Experiencia/experiencia.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

import { AttacheComponet } from './attache';
import { EditarPersonaComponent } from './componentes/editarPersona/editar-persona.component';
import { CrearExperienciaComponent } from './componentes/editar-crear-experiencia/crear-experiencia.component';
import { EditarExperienciaComponent } from './componentes/editar-crear-experiencia/editar-experiencia.component';


const routes: Routes = [{
  path: '',
  children: [
    {path:'editarExperiencia/:id', component:EditarExperienciaComponent},
    {path:'crearExperiencia', component:CrearExperienciaComponent},
    { path: 'attache', component: AttacheComponet },
    { path: 'experiencia', component: ExperienciaComponent },
    { path: 'formacion', component: FormacionComponent },
    { path: 'habilidades', component: HabilidadesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'editarPersona/:id', component: EditarPersonaComponent },
    { path: '**', redirectTo: '/attache/attache' },
  ]
}
]


@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AttacheRoutingModule { }
