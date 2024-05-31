import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterFormComponent } from './data-center-form.component';

describe('DataCenterFormComponent', () => {
  let component: DataCenterFormComponent;
  let fixture: ComponentFixture<DataCenterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCenterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCenterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
