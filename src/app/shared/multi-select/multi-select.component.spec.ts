import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelect2Component } from './multi-select.component';

describe('MultiSelectComponent', () => {
  let component: MultiSelect2Component;
  let fixture: ComponentFixture<MultiSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
