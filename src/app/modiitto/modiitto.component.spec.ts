import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiittoComponent } from './modiitto.component';

describe('ModiittoComponent', () => {
  let component: ModiittoComponent;
  let fixture: ComponentFixture<ModiittoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiittoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiittoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
