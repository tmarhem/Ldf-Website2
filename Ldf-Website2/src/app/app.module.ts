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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssociationComponent,
    AnimationsComponent,
    CampsComponent,
    SchoolsComponent,
    ExceptionnalsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
