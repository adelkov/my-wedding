import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";
import {AppComponent} from './app.component';
import {HomeComponent} from './landing/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './home/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { environment } from '../environments/environment.prod';
import {MatChipsModule} from '@angular/material/chips';

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
  MatButtonToggleModule, MatDialog, MatDialogModule, MatNativeDateModule,
} from '@angular/material';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {WeddingService} from "./services/wedding.service";
import {UserCardComponent} from './home/user-card/user-card.component';

// import {FlexLayoutModule} from "@angular/flex-layout";
import {AgmDirectionModule} from 'agm-direction';
import {DashboardComponent} from "./home/dashboard/dashboard.component";
import {GuestlistAdminComponent} from "./home/dashboard/cards-admin/guestlist-admin/guestlist-admin.component";
import {GuestDetailComponent} from "./home/dashboard/cards-admin/guestlist-admin/guest-detail/guest-detail.component";
import {MarkerInfoComponent} from "./home/dashboard/cards-admin/map-admin/marker-info/marker-info.component";
import {MapAdminComponent} from './home/dashboard/cards-admin/map-admin/map-admin.component';
import {GuestlistService} from "./services/guestlist.service";
import {InfoCardAdminComponent} from './home/dashboard/cards-admin/info-card-admin/info-card-admin.component';
import {NewWeddingDialogComponent} from './home/new-wedding-dialog/new-wedding-dialog.component';
import {PresentListService} from "./services/present-list.service";
import {PresentUploadComponent} from "./home/dashboard/cards-admin/present-upload/present-upload.component";
import {PresentListGuestComponent} from "./home/dashboard/cards-guest/presentlist-guest/present-list-guest.component";
import {CallbackComponent} from "./callback.component";
import {AuthService} from "./auth/auth.service";
import { MessagesComponent } from './home/dashboard/cards-admin/messages/messages.component';
import { ChatFlowComponent } from './home/dashboard/cards-admin/messages/chat-flow/chat-flow.component';
import {InfoCardComponent} from "./home/dashboard/cards-guest/infocard/info-card.component";
import {RouterModule} from "@angular/router";
import { InviteGuestComponent } from './home/dashboard/cards-admin/guestlist-admin/invite-guest/invite-guest.component';
import {TokenInterceptor} from "./auth/token.interceptor";


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
    NewWeddingDialogComponent,
    PresentListGuestComponent,
    PresentUploadComponent,
    MessagesComponent,
    ChatFlowComponent,
    InfoCardComponent,
    InviteGuestComponent,
    PresentUploadComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatButtonModule,
    MatChipsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    // FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: environment.agm_api,
      libraries: ["places"]
    }),
    AgmDirectionModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    NewWeddingDialogComponent,
    InviteGuestComponent
  ],
  providers: [
    GuestlistService,
    WeddingService,
    GoogleMapsAPIWrapper,
    MatDialog,
    PresentListService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
