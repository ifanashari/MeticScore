import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahkelComponent } from './tambahkel.component';

describe('TambahkelComponent', () => {
  let component: TambahkelComponent;
  let fixture: ComponentFixture<TambahkelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahkelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahkelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
