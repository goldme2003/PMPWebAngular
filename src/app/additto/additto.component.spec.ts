import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddittoComponent } from './additto.component';

describe('AddittoComponent', () => {
  let component: AddittoComponent;
  let fixture: ComponentFixture<AddittoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddittoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddittoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
