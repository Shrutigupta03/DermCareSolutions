import { TestBed } from '@angular/core/testing';

import { PdfGeneratorServiceService } from './pdf-generator-service.service';

describe('PdfGeneratorServiceService', () => {
  let service: PdfGeneratorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfGeneratorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
