import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialModule } from './core/material.module'
import { SharedModule } from './core/shared.module'
import { HomeComponent } from './home/home.component'

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, MaterialModule, CommonModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
