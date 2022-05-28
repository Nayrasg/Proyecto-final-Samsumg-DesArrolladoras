import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSocioComponent } from './list-socio.component';

describe('ListSocioComponent', () => {
  let component: ListSocioComponent;
  let fixture: ComponentFixture<ListSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
