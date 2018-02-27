import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKelompokComponent } from './list-kelompok.component';

describe('ListKelompokComponent', () => {
  let component: ListKelompokComponent;
  let fixture: ComponentFixture<ListKelompokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKelompokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKelompokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
