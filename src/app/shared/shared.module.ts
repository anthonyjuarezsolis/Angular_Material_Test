import {  NgModule } from '@angular/core';
import {  MatListModule, MatButtonModule,
          MatInputModule, MatProgressBarModule } from '@angular/material';

@NgModule({
    imports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatProgressBarModule
    ],
    exports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatProgressBarModule
    ]
})
export class SharedModule { }
