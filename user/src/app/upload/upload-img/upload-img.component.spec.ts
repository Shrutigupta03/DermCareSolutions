import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImgComponent } from './upload-img.component';

describe('UploadImgComponent', () => {
  let component: UploadImgComponent;
  let fixture: ComponentFixture<UploadImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
