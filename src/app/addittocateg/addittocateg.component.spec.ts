import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddittocategComponent } from './addittocateg.component';

describe('AddittocategComponent', () => {
  let component: AddittocategComponent;
  let fixture: ComponentFixture<AddittocategComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddittocategComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddittocategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
