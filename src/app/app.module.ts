import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './core/shared.module'
import { HomeComponent } from './home/home.component'
import { MaterialModule } from './core/material.module'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, MaterialModule, CommonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
