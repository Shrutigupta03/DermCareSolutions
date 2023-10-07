import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPswrdComponent } from './forgot-pswrd.component';

describe('ForgotPswrdComponent', () => {
  let component: ForgotPswrdComponent;
  let fixture: ComponentFixture<ForgotPswrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPswrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPswrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
