import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {DataGridModule} from 'primeng/datagrid';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    InputTextModule,
    TabViewModule,
    DataGridModule,
    CardModule,
    ButtonModule,
    ScrollPanelModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
