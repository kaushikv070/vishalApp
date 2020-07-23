import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopwatchDecoratorComponent } from './stopwatch-decorator/stopwatch-decorator.component';
import { StopwatchServiceComponent } from './stopwatch-service/stopwatch-service.component';
import { BannerComponent } from './banner/banner.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { WatchInputComponent } from './watch-input/watch-input.component';
import { WatchTimerComponent } from './watch-timer/watch-timer.component';
import { WatchLoggingComponent } from './watch-logging/watch-logging.component';
import { WatchCounterComponent } from './watch-counter/watch-counter.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StutentTableComponent } from './stutent-table/stutent-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { PricePipe } from './price.pipe';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchDecoratorComponent,
    StopwatchServiceComponent,
    BannerComponent,
    EcommerceComponent,
    DynamicDivComponent,
    WatchInputComponent,
    WatchTimerComponent,
    WatchLoggingComponent,
    WatchCounterComponent,
    StudentComponent,
    StutentTableComponent,
    PricePipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxSpinnerModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
