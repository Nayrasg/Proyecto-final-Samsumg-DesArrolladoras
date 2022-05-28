import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSocioComponent } from './add-edit-socio.component';

describe('AddEditSocioComponent', () => {
  let component: AddEditSocioComponent;
  let fixture: ComponentFixture<AddEditSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
