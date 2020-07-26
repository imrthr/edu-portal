import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailsComponent} from './student-details/student-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { freeApiService } from './services/freeapi.service';

const routes: Routes = [
{path: "", component: LoginComponent},
{path: "dashboard",component: DashboardComponent},
{path: "student-details", component: StudentDetailsComponent},
{path: "sign-up", component: SignUpComponent},
{path: "services",component:freeApiService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
