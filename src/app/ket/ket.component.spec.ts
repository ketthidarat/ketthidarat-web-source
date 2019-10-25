import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetComponent } from './ket.component';

describe('KetComponent', () => {
  let component: KetComponent;
  let fixture: ComponentFixture<KetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
