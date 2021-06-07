import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { WishCardComponent } from './wish-card/wish-card.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { EmptyFieldComponent } from './empty-field/empty-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishcardModalComponent } from './wishcard-modal/wishcard-modal.component';
import { ProfileEditFormComponent } from './profile-edit-form/profile-edit-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddWishBlockComponent } from './add-wish-block/add-wish-block.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'main', component: MainPageComponent,
      children: [
      {path: '', component: MainPageContentComponent},
      {path: 'edit-my-profile', component: ProfileEditFormComponent }
    ]
  },
  {path: 'sign-up', component: RegisterFormComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileSidebarComponent,
    WishCardComponent,
    SearchInputComponent,
    ModalWindowComponent,
    EmptyFieldComponent,
    WishcardModalComponent,
    ProfileEditFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    MainPageContentComponent,
    MainPageComponent,
    ErrorPageComponent,
    AddWishBlockComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
