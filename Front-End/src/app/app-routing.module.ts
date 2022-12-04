import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CandidatesPageComponent } from './candidates-page/candidates-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageFromComponent } from './page-from/page-from.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
  path:'',//Essa configuração é pra esse caminho ser sempre a página inicial
  redirectTo: 'home',
  pathMatch:"full"
},
  {
  path:'home',//Aqui estou linkando a página home
  component: HomeComponent,
},
  {
  path:'about',//E aqui a página about
  component: AboutComponent,
  
},
  {
  path:'navbar',//E aqui a página about
  component: NavBarComponent,
  
},
  {
  path:'pageform',
  component: PageFromComponent,
  
},
{
  path:'login',
  component: LoginComponent,
},
{
  path:'register',
  component: RegisterComponent,
},
{
  path:'candidatepages',
  component: CandidatesPageComponent
}

];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
