import { TogglService } from './services/toggl.service';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule, FormControl, NgControl} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { AuthService } from './services/auth.service';


import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatAutocomplete,
  MatFormFieldModule,
  MatAutocompleteModule
} from '@angular/material';
import 'hammerjs';
import { TogglComponent } from './components/toggl/toggl.component';
import { ProjectComponent } from './components/project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    TogglComponent,
    HomeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [AuthService, TogglService],
  bootstrap: [AppComponent]
})
export class AppModule { }
