import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AssociationComponent } from './components/association/association.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { CampsComponent } from './components/animations/camps/camps.component';
import { SchoolsComponent } from './components/animations/schools/schools.component';
import { ExceptionnalsComponent } from './components/animations/exceptionnals/exceptionnals.component';
import { PresentationComponent } from './components/association/presentation/presentation.component';
import { JoinComponent } from './components/association/join/join.component';
import { ContactComponent } from './components/association/contact/contact.component';
import { MembersComponent } from './components/association/members/members.component';
import { HistoryComponent } from './components/association/history/history.component';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssociationComponent,
    AnimationsComponent,
    CampsComponent,
    SchoolsComponent,
    ExceptionnalsComponent,
    PresentationComponent,
    JoinComponent,
    ContactComponent,
    MembersComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
