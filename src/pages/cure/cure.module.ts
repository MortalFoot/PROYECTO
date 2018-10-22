import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurePage } from './cure';

@NgModule({
  declarations: [
    CurePage,
  ],
  imports: [
    IonicPageModule.forChild(CurePage),
  ],
})
export class CurePageModule {}
