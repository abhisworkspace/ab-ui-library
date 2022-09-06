import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiControlsRoutingModule } from './ui-controls-routing.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, UiControlsRoutingModule],
  exports: [UiControlsModule],
})
export class UiControlsModule {}
