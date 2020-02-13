import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng9OdometerComponent } from './ng9-odometer.component';

describe('Ng9OdometerComponent', () => {
  let component: Ng9OdometerComponent;
  let fixture: ComponentFixture<Ng9OdometerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng9OdometerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng9OdometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
