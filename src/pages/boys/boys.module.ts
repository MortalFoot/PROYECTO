import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoysPage } from './boys';

@NgModule({
  declarations: [
    BoysPage,
  ],
  imports: [
    IonicPageModule.forChild(BoysPage),
  ],
})
export class BoysPageModule {}
