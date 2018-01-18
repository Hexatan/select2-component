import { NgModule, ApplicationRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { Select2Module } from '../dist/'
import { MainComponent } from './main.component'

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Select2Module
  ],
  bootstrap: [MainComponent]
})
export class MainModule {
  constructor (
        public appRef: ApplicationRef
    ) { }
}
