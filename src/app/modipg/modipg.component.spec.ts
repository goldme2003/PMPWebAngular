import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModipgComponent } from './modipg.component';

describe('ModipgComponent', () => {
  let component: ModipgComponent;
  let fixture: ComponentFixture<ModipgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModipgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModipgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
