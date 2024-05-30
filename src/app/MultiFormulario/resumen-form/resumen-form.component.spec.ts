import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenFormComponent } from './resumen-form.component';

describe('ResumenFormComponent', () => {
  let component: ResumenFormComponent;
  let fixture: ComponentFixture<ResumenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
