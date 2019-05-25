import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/association/presentation/presentation.component';
import { HistoryComponent } from './components/association/history/history.component';
import { ContactComponent } from './components/association/contact/contact.component';
import { JoinComponent } from './components/association/join/join.component';
import { MembersComponent } from './components/association/members/members.component';
import { CampsComponent } from './components/animations/camps/camps.component';
import { ExceptionnalsComponent } from './components/animations/exceptionnals/exceptionnals.component';
import { SchoolsComponent } from './components/animations/schools/schools.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'join', component: JoinComponent},
  {path: 'members', component: MembersComponent},
  {path: 'camps', component: CampsComponent},
  {path: 'exceptionnals', component: ExceptionnalsComponent},
  {path: 'schools', component: SchoolsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
