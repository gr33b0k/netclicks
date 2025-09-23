import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Card } from './components/card/card';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Search } from './components/search/search';
import { SidebarArticle } from './components/sidebar-article/sidebar-article';

@NgModule({
  declarations: [
    App,
    Card,
    Header,
    Sidebar,
    Search,
    SidebarArticle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
