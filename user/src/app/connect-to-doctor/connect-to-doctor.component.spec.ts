import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectToDoctorComponent } from './connect-to-doctor.component';

describe('ConnectToDoctorComponent', () => {
  let component: ConnectToDoctorComponent;
  let fixture: ComponentFixture<ConnectToDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectToDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectToDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
