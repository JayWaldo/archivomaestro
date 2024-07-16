import { Component, Input, OnInit } from '@angular/core';
import { IRegion }from "../Modelos";
import { AuthService } from 'src/app/services/auth.service';
import { RegionService } from 'src/app/services/region.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormStateService } from 'src/app/services/FormState.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit{

  title = "Region"
  regionList ?: IRegion[];
  regionForm!: FormGroup;
  isCompleted: boolean = false;
  private formKey = 'regionForm'


  @Input() data : IRegion = {
    idRegion: 0,
    region: "",
    sistema: ""
  }

  constructor(
    private authService: AuthService,
    private regionService: RegionService,
    private formState: FormStateService,
    private fb: FormBuilder
  ) {
    this.regionForm = this.fb.group({
      region: ['', Validators.required],
      sistema: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.fetchRegion();
    const savedState = this.formState.getFormState(this.formKey);
    if (savedState) {
      this.regionForm.patchValue(savedState);
    } else {
      this.regionForm.patchValue(this.data);
    }

    this.regionForm.valueChanges.subscribe(() => {
      this.saveFormState();
      this.checkAllFieldsFilled();
    });

    this.checkAllFieldsFilled();
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

  
  saveData(){
    // this.data = this.regionForm.value;
    console.log(this.data);
    this.saveFormState();
  }

  private saveFormState() {
    this.formState.saveFormState(this.formKey, this.regionForm.value);
  }

  private checkAllFieldsFilled() {
    this.isCompleted = Object.values(this.regionForm.value).every(field => field !== '');
  }
}
