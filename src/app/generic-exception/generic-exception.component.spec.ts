import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericExceptionComponent } from './generic-exception.component';

describe('GenericExceptionComponent', () => {
  let component: GenericExceptionComponent;
  let fixture: ComponentFixture<GenericExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
