import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgIf } from '@angular/common';

import { AuthService, Role } from './auth.service';

@Directive({ selector: '[appHasRole]' })
export class HasRoleDirective extends NgIf {
  @Input() set appHasRole(roles: Role[]) {
    this.ngIf = this.authService.hasRole(roles);
  }

  @Input() set appHasRoleElse(templateElse: TemplateRef<any>) {
    this.ngIfElse = templateElse;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authService: AuthService,
  ) {
    super(viewContainerRef, templateRef);
  }
}
