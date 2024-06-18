import { Component, Input } from '@angular/core';
import { IRegion }from "../Modelos";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  title = "Region"
  facturaList = [
    'luis',
    'pedro',
    'Juan'
  ]
  
  @Input() data : IRegion = {
    region: "",
    sistema: ""
  }
  saveData(){
    console.log(this.data);
  }
}
