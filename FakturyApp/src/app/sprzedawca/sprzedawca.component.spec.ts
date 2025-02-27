import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprzedawcaComponent } from './sprzedawca.component';

describe('SprzedawcaComponent', () => {
  let component: SprzedawcaComponent;
  let fixture: ComponentFixture<SprzedawcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprzedawcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprzedawcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
