import { NgModule } from '@angular/core';
import { ButtonModule } from './ui-controls/button/button.module';
import { UiLibraryComponent } from './ui-library.component';

@NgModule({
  declarations: [UiLibraryComponent],
  imports: [ButtonModule],
  exports: [UiLibraryComponent],
})
export class UiLibraryModule {}
