import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodgladFakturyComponent } from './podglad-faktury.component';

describe('PodgladFakturyComponent', () => {
  let component: PodgladFakturyComponent;
  let fixture: ComponentFixture<PodgladFakturyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodgladFakturyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodgladFakturyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
