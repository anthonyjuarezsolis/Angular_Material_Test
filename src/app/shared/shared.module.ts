import {  NgModule } from '@angular/core';
import {  MatListModule, MatButtonModule,
          MatInputModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatProgressBarModule,
      MatToolbarModule
    ],
    exports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatProgressBarModule,
      MatToolbarModule
    ]
})
export class SharedModule { }
