import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const matModules = [
  MatButtonModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...matModules],
  exports: [...matModules],
})
export class MaterialModule {}
