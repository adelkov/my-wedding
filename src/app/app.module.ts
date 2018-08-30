import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";
import { AppComponent } from './app.component';
import { HomeComponent } from './landing/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './home/navigation.component';
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
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {WeddingService} from "./home/wedding.service";
import { UserCardComponent } from './home/user-card/user-card.component';

import {FlexLayoutModule} from "@angular/flex-layout";
import { AgmDirectionModule } from 'agm-direction';
import {DashboardComponent} from "./home/dashboard/dashboard.component";
import {GuestlistAdminComponent} from "./home/dashboard/cards-admin/guestlist-admin/guestlist-admin.component";
import {GuestDetailComponent} from "./home/dashboard/cards-admin/guestlist-admin/guest-detail/guest-detail.component";
import {MarkerInfoComponent} from "./home/dashboard/cards-admin/map-admin/marker-info/marker-info.component";
import {MapAdminComponent} from './home/dashboard/cards-admin/map-admin/map-admin.component';
import {GuestlistService} from "./home/dashboard/cards-admin/guestlist-admin/guestlist.service";
import {PresentListGuestService} from "./home/dashboard/cards-guest/presentlist-guest/present-list-guest.service";
import { InfoCardAdminComponent } from './home/dashboard/cards-admin/info-card-admin/info-card-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    DashboardComponent,
    GuestlistAdminComponent,
    GuestDetailComponent,
    UserCardComponent,
    MapAdminComponent,
    MarkerInfoComponent,
    InfoCardAdminComponent,
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
    PresentListGuestService,
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
