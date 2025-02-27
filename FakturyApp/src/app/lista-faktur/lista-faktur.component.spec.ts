import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFakturComponent } from './lista-faktur.component';

describe('ListaFakturComponent', () => {
  let component: ListaFakturComponent;
  let fixture: ComponentFixture<ListaFakturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFakturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFakturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
