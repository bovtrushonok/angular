import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { WishCardComponent } from './wish-card/wish-card.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { EmptyFieldComponent } from './empty-field/empty-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishcardModalComponent } from './wishcard-modal/wishcard-modal.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';
import { ProfileEditFormComponent } from './profile-edit-form/profile-edit-form.component';

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
    ProfileModalComponent,
    ProfileEditFormComponent,
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
