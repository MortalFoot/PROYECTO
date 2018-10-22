import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArcticPage } from './arctic';

@NgModule({
  declarations: [
    ArcticPage,
  ],
  imports: [
    IonicPageModule.forChild(ArcticPage),
  ],
})
export class ArcticPageModule {}
