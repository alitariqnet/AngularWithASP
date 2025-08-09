import { CanActivateFn } from '@angular/router';

export const useraccessGuard: CanActivateFn = (route, state) => {
  return true;
};
