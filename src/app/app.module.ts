import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentNamePipe } from './shared/pipes/department-name.pipe';
import { CategoryNamePipe } from './shared/pipes/category-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HeaderComponent,
    DepartmentNamePipe,
    CategoryNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
