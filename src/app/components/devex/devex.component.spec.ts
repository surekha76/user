import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevexComponent } from './devex.component';

describe('DevexComponent', () => {
  let component: DevexComponent;
  let fixture: ComponentFixture<DevexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
