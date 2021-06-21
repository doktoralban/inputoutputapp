import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AliasingComponent } from './aliasing/aliasing.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InTheMetadataComponent } from './in-the-metadata/in-the-metadata.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';

@NgModule({
  declarations: [
    AppComponent,
    AliasingComponent,
    InputOutputComponent,
    InTheMetadataComponent,
    ItemDetailComponent,
    ItemOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
