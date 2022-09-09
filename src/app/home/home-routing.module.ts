import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AulasComponent } from '../aulas/aulas.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'aulas', component: AulasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
