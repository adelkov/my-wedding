import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule, MatInputModule,
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import {InfoCardComponent} from "./dashboard/infocard/info-card.component";
import { PresentListGuestComponent } from './dashboard/presentlist-guest/present-list-guest.component';
import {HttpClientModule} from "@angular/common/http";
import { GuestlistAdminComponent } from './dashboard/cards-admin/guestlist-admin/guestlist-admin.component';
import { GuestDetailComponent } from './dashboard/cards-admin/guestlist-admin/guest-detail/guest-detail.component';
import {GuestlistService} from "./dashboard/cards-admin/guestlist-admin/guestlist.service";
import {WeddingService} from "./navigation/wedding.service";
import { UserCardComponent } from './navigation/user-card/user-card.component';
import {PresentListGuestService} from "./dashboard/presentlist-guest/present-list-guest.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    DashboardComponent,
    InfoCardComponent,
    PresentListGuestComponent,
    InfoCardComponent,
    GuestlistAdminComponent,
    GuestDetailComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    GuestlistService,
    WeddingService,
    PresentListGuestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
