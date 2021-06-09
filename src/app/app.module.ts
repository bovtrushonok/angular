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
import { ProfileSidebarComponent } from './main/profile/profile-sidebar/profile-sidebar.component';
import { WishCardComponent } from './main/main-page/main-page-content/wish-card/wish-card.component';
import { SearchInputComponent } from './main/main-menu/search-input/search-input.component';
import { ModalWindowComponent } from './main/main-page/main-page-content/wish-card/modal-window/modal-window.component';
import { EmptyFieldComponent } from './main/main-page/main-page-content/empty-field/empty-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishcardModalComponent } from './main/main-page/main-page-content/wish-card/wishcard-modal/wishcard-modal.component';
import { ProfileEditFormComponent } from './main/profile/profile-edit-form/profile-edit-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageContentComponent } from './main/main-page/main-page-content/main-page-content.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { CreateWishBlockComponent } from './main/main-menu/create-wish-block/create-wish-block.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { WishDetailsComponent } from './main/main-page/wish-details/wish-details.component';

const appRoutes: Routes = [
  {path: 'log-in', component: LoginFormComponent},
  {path: 'main', 
    component: MainPageComponent,
      children: [
      {path: '', component: MainPageContentComponent},
      {path: 'edit-my-profile', component: ProfileEditFormComponent},
      {path: 'wish-details/:id', component: WishDetailsComponent}
    ],
    canActivate: [CanActivateGuard]
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
    CreateWishBlockComponent,
    WishDetailsComponent,
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
