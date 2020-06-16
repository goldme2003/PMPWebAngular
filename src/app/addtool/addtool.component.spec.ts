import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoolComponent } from './addtool.component';

describe('AddtoolComponent', () => {
  let component: AddtoolComponent;
  let fixture: ComponentFixture<AddtoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
