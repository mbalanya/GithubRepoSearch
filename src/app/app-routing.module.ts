import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from "./github/github.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NotFoundComponent } from "./not-found/not-found.component";


const routes: Routes = [
  { path: 'github', component: GithubComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo:'/homepage', pathMatch:'full' },
  { path: '**', component:NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
