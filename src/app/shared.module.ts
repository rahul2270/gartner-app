import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule,
  MatCardModule, MatFormFieldModule, 
  MatSelectModule,
  MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './routing/routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpExceptionInterceptor } from './http-exception-interceptor';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule,
    MatButtonModule, MatInputModule, MatCardModule,
    MatFormFieldModule, MatSelectModule,
    MatTableModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpExceptionInterceptor,
      multi: true,
    }
  ],
  exports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule,
    CommonModule, MatButtonModule, MatInputModule, MatCardModule,
    MatFormFieldModule, MatSelectModule, MatTableModule,
    ReactiveFormsModule, AppRoutingModule, MatProgressSpinnerModule
  ]
})
export class SharedModule { }
