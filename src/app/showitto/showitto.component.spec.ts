import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowittoComponent } from './showitto.component';

describe('ShowittoComponent', () => {
  let component: ShowittoComponent;
  let fixture: ComponentFixture<ShowittoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowittoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowittoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
