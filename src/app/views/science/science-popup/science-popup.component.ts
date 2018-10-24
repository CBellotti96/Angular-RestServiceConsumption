import { Component } from '@angular/core';
import { DialogComponent,  DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title: string;
  message: string;
  imageUrl: string;
  linkUrl: string;
}
@Component({
    selector: 'app-sciencepopup',
    templateUrl: './science-popup.component.html',
    styleUrls: ['./science-popup.component.css']

})
export class SciencePopupComponent extends DialogComponent<ConfirmModel,  boolean> implements ConfirmModel {
  title:  string;
  message:  string;
  imageUrl: string;
  linkUrl: string;

 constructor(dialogService:  DialogService) {
    super(dialogService);
  }
  confirm() {
    this.close();
  }
}