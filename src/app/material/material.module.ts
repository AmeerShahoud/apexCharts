import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const matModules = [
  MatButtonModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...matModules],
  exports: [...matModules],
})
export class MaterialModule {}
