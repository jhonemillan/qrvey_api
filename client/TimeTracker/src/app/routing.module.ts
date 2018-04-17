import { LoginComponent } from './components/login/login.component';
import { TogglComponent } from './components/toggl/toggl.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '',   component: LoginComponent},
  { path: 'toggl', component: TogglComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
