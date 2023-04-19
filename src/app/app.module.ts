import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { SearchResultComponent } from './search/components/search-result/search-result.component';
import { TreeComponent } from './search/components/tree/tree.component';
import { HighlightPipe } from './search/pipes/highlight.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,

    ChartComponent,

    SearchResultComponent,
    TreeComponent,
    HighlightPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
