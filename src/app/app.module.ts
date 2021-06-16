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
import { HeaderComponent } from './components/header/header.component';
import { ProfileSidebarComponent } from './components/main/profile/profile-sidebar/profile-sidebar.component';
import { WishCardComponent } from './components/main/main-page/main-page-content/wish-card/wish-card.component';
import { SearchInputComponent } from './components/main/main-menu/search-input/search-input.component';
import { ModalWindowComponent } from './components/main/main-page/main-page-content/wish-card/modal-window/modal-window.component';
import { EmptyFieldComponent } from './components/main/main-page/main-page-content/empty-field/empty-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishcardModalComponent } from './components/main/main-page/main-page-content/wish-card/wishcard-modal/wishcard-modal.component';
import { ProfileEditFormComponent } from './components/main/profile/profile-edit-form/profile-edit-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageContentComponent } from './components/main/main-page/main-page-content/main-page-content.component';
import { MainPageComponent } from './components/main/main-page/main-page.component';
import { CreateWishBlockComponent } from './components/main/main-menu/create-wish-block/create-wish-block.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { Authorize } from './guards/authorization.guard';
import { WishDetailsResolve } from './services/wish-details-resolver.service';
import { WishFieldComponent } from './components/main/main-page/main-page-content/wish-field/wish-field.component';
import { WishesResolve } from './services/wishes-resolver.service';

const appRoutes: Routes = [
  {path: 'log-in', component: LoginFormComponent},
  {path: 'main',
    component: MainPageComponent,
      children: [
      {path: 'wishes', component: MainPageContentComponent, resolve: {wishes: WishesResolve}},
      {path: 'edit-my-profile', component: ProfileEditFormComponent},
      {path: 'wish-details/:id',
        loadChildren: () => import('./wish-details/wish-details.module')
          .then(m => m.WishDetailsModule),
        resolve: {
          wish: WishDetailsResolve
        }
      }
    ],
    canActivate: [Authorize]
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
    WishFieldComponent
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
