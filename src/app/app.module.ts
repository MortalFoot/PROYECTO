import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArcticPage } from '../pages/arctic/arctic';
import { BoysPage } from '../pages/boys/boys';
import { BrothersPage } from '../pages/brothers/brothers';
import { CaratulAarcticPage } from '../pages/caratul-aarctic/caratul-aarctic';
import { CaratulAcurePage } from '../pages/caratul-acure/caratul-acure';
import { CaratulaBrothersPage } from '../pages/caratula-brothers/caratula-brothers';
import { Caratula1Page } from '../pages/caratula1/caratula1';
import { CurePage } from '../pages/cure/cure';
import { FosterPage } from '../pages/foster/foster';
import { FwdPage } from '../pages/fwd/fwd';
import { KeysPage } from '../pages/keys/keys';
import { Reseña1Page } from '../pages/rese\u00F1a1/rese\u00F1a1';
import { Reseña2Page } from '../pages/rese\u00F1a2/rese\u00F1a2';
import { Reseña3Page } from '../pages/rese\u00F1a3/rese\u00F1a3';
import { Reseña4Page } from '../pages/rese\u00F1a4/rese\u00F1a4';
import { ReseñacurePage } from '../pages/rese\u00F1acure/rese\u00F1acure';
import { SupermodelPage } from '../pages/supermodel/supermodel';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArcticPage,
    BoysPage,
    BrothersPage,
    CaratulAarcticPage,
    CaratulAcurePage,
    CaratulaBrothersPage,
    Caratula1Page,
    CurePage,
    FosterPage,
    FwdPage,
    KeysPage,
    Reseña1Page,
    Reseña2Page,
    Reseña3Page,
    Reseña4Page,
    ReseñacurePage,
    SupermodelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArcticPage,
    BoysPage,
    BrothersPage,
    CaratulAarcticPage,
    CaratulAcurePage,
    CaratulaBrothersPage,
    Caratula1Page,
    CurePage,
    FosterPage,
    FwdPage,
    KeysPage,
    Reseña1Page,
    Reseña2Page,
    Reseña3Page,
    Reseña4Page,
    ReseñacurePage,
    SupermodelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
