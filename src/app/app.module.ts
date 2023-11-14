import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { ToggleComponent } from './pages/toggle/toggle.component';
import { TdfComponent } from './pages/tdf/tdf.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { ToggleDirective } from './shared/directives/toggle.directive';
import { FormatFileSizePipe } from './shared/pipes/format-file-size.pipe';
import { RainbowDirective } from './shared/directives/raibow.directive';
import { ProfileComponent } from './shared/profile/profile.component';
import { MultiSelect2Component } from './shared/multi-select/multi-select.component'
import { OverlayDirective } from './shared/directives/overlay.directive';
import { ListFilterPipe } from './shared/multi-select/list-filter.pipe';
import { FilterTextPipe } from './shared/pipes/filter-text.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './pages/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ToggleComponent,
    TdfComponent,
    ReactiveFormComponent,
    ToggleDirective,
    FormatFileSizePipe,
    RainbowDirective,
    ProfileComponent,
    OverlayDirective,
    ListFilterPipe,
    MultiSelect2Component,
    FilterTextPipe,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
