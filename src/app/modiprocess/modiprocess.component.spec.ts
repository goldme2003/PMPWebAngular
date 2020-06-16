import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiprocessComponent } from './modiprocess.component';

describe('ModiprocessComponent', () => {
  let component: ModiprocessComponent;
  let fixture: ComponentFixture<ModiprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
