import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {PresentListService} from "../../../../services/present-list.service";

@Component({
  selector: 'app-present-upload',
  templateUrl: './present-upload.component.html',
  styleUrls:['./present-upload.component.css']
})
export class PresentUploadComponent{

  constructor(public presentListService: PresentListService) {}

  onPresentSubmit(form: NgForm){
    if (form.invalid){
      return;
    }
    this.presentListService.addPresent(form.value.name, form.value.link);
  }

}
