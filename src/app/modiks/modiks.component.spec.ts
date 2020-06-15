import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiksComponent } from './modiks.component';

describe('ModiksComponent', () => {
  let component: ModiksComponent;
  let fixture: ComponentFixture<ModiksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
