import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicImportanceComponent } from './basic-importance.component';

describe('BasicImportanceComponent', () => {
  let component: BasicImportanceComponent;
  let fixture: ComponentFixture<BasicImportanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicImportanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicImportanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
