import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModitoolComponent } from './moditool.component';

describe('ModitoolComponent', () => {
  let component: ModitoolComponent;
  let fixture: ComponentFixture<ModitoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModitoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModitoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
