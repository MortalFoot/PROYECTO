import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FosterPage } from '../foster/foster';
import { Caratula1Page } from '../caratula1/caratula1';
import { SupermodelPage } from '../supermodel/supermodel';
import { Reseña1Page } from '../rese\u00F1a1/rese\u00F1a1';
import { CurePage } from '../cure/cure';
import { CaratulAcurePage } from '../caratul-acure/caratul-acure';
import { BoysPage } from '../boys/boys';
import { Reseña2Page } from '../rese\u00F1a2/rese\u00F1a2';
import { KeysPage } from '../keys/keys';
import { BrothersPage } from '../brothers/brothers';
import { CaratulaBrothersPage } from '../caratula-brothers/caratula-brothers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  PUK = FosterPage;
  SUPER = Caratula1Page;
  MODEL = SupermodelPage;
  R1 = Reseña1Page;
  C = CurePage;
  CS = CaratulAcurePage;
  B = BoysPage;
  R2 = Reseña2Page;
  BLA = KeysPage;
  BRO = BrothersPage;
  BS = CaratulaBrothersPage;


  constructor(public navCtrl: NavController) {

    
   
  }
  clickFoster(){
   
    this.navCtrl.push(this.PUK);
      
  }

   clickcaratulaSUP(){
   
    this.navCtrl.push(this.SUPER);
      
  }

  clickSupermodel(){

   this.navCtrl.push(this.MODEL);

  } 

  clickRES1(){

   this.navCtrl.push(this.R1);

  }

  clickCURE(){

   this.navCtrl.push(this.C);

  }

  clickCUR() {

  this.navCtrl.push(this.CS);
  }

  clickboys(){

   this.navCtrl.push(this.B);

  }

  clickRES2() {

   this.navCtrl.push(this.R2);

  }

  clickBLACK(){
   
    this.navCtrl.push(this.BLA);

  }

  clickBLAF(){

   this.navCtrl.push(this.BRO);

  }

  clickRES3(){
  
   this.navCtrl.push(this.BS);
  }
  

}
