import { Component, Input, OnInit } from '@angular/core';
import { IRegion }from "../Modelos";
import { AuthService } from 'src/app/services/auth.service';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit{

  title = "Region"
  regionList ?: IRegion[];
  constructor(
    private authService: AuthService,
    private regionService: RegionService
  ) {
    
  }

  ngOnInit(): void {
      this.fetchRegion();
  }

  fetchRegion(){
    this.regionService.getRegionInfo().subscribe(
      (region: IRegion[]) => {
        this.regionList = region;
      }, (error) => {
        console.error('Error al cargar las regiones!' + error);
      }
    )
  }

  onRegionChange(event: Event): void {
    if(this.regionList){
      const selectElement = event.target as HTMLSelectElement;
      const selectedId = selectElement.value;
      this.regionList.find( reg => {
        if(reg.region === selectedId){
          this.data.idRegion = reg.idRegion
        }
      })
    }
  }

  @Input() data : IRegion = {
    idRegion: 0,
    region: "",
    sistema: ""
  }
  saveData(){
    console.log(this.data);
  }
}
