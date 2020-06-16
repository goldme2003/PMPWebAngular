import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtgComponent } from './addtg.component';

describe('AddtgComponent', () => {
  let component: AddtgComponent;
  let fixture: ComponentFixture<AddtgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
