import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddksComponent } from './addks.component';

describe('AddksComponent', () => {
  let component: AddksComponent;
  let fixture: ComponentFixture<AddksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
