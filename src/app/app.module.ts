import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationFormBuilderComponent } from './registration-form-builder/registration-form-builder.component';
import { RegistrationFormBuilderValidationComponent } from './registration-form-builder-validation/registration-form-builder-validation.component';
import { ModelDriveFormComponent } from './model-drive-form/model-drive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RegistrationFormBuilderComponent,
    RegistrationFormBuilderValidationComponent,
    ModelDriveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
