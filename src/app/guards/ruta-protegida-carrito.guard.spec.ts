import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rutaProtegidaCarritoGuard } from './ruta-protegida-carrito.guard';

describe('rutaProtegidaCarritoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rutaProtegidaCarritoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
