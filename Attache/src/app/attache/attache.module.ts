import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttacheRoutingModule } from './attache-routing.module';
import { ExperienciaComponent } from './componentes/Experiencia/experiencia.component';

import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { NgCircleProgressModule } from 'ng-circle-progress';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AttacheComponet } from './attache';
import { interceptorProvider } from '../servicios/interceptor.service';
import { AppComponent } from '../app.component';
import { EditarPersonaComponent } from './componentes/editarPersona/editar-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { BtnLoginComponent } from './componentes/btn-login/btn-login.component';
import { EditarExperienciaComponent } from './componentes/editar-crear-experiencia/editar-experiencia.component';
import { CrearExperienciaComponent } from './componentes/editar-crear-experiencia/crear-experiencia.component';





@NgModule({
  declarations: [
    ExperienciaComponent,
    EncabezadoComponent,
    FormacionComponent,
    HabilidadesComponent,
    ContactoComponent, 
   AttacheComponet, 
   EditarPersonaComponent,
FooterComponent,
BtnLoginComponent,
EditarExperienciaComponent,
CrearExperienciaComponent,
   
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AttacheRoutingModule, 
    NgCircleProgressModule.forRoot({}),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent,]
})
export class AttacheModule { }
