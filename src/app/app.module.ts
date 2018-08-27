import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";


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
  MatFormFieldModule,
  MatInputModule,
  MatButtonToggleModule,
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

import {FlexLayoutModule} from "@angular/flex-layout";
import { MapAdminComponent } from './dashboard/cards-admin/map-admin/map-admin.component';
import { AgmDirectionModule } from 'agm-direction';


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
    UserCardComponent,
    MapAdminComponent,
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
    MatButtonToggleModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_YLBHJrEc36MdARSyS_qpqWHp8OBkyhA'
      }),
    AgmDirectionModule
  ],
  providers: [
    GuestlistService,
    WeddingService,
    PresentListGuestService
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
