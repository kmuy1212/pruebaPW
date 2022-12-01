import { TestBed } from '@angular/core/testing';

import { TiendaFirestoreService } from './tienda-firestore.service';

describe('TiendaFirestoreService', () => {
  let service: TiendaFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
