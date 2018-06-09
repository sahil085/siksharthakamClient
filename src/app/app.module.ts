///<reference path="../../node_modules/@stomp/ng2-stompjs/src/stomp.config.d.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {DataService} from './services/data.service';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import { UserregistraionComponent } from './components/userregistraion/userregistraion.component';
import {
  MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule,
  MatOption, MatOptionModule, MatSelect, MatSelectModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule, MatGridListModule, MatMenuModule
} from '@angular/material';
import {Route, RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: 'user-registration', component:UserregistraionComponent },
  {path: 'dashboard',component:DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserregistraionComponent,
    MyNavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyNavComponent,DataService,
    StompService,
    {
      provide: StompConfig,
      useValue: StompConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
