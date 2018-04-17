import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglComponent } from './toggl.component';

describe('TogglComponent', () => {
  let component: TogglComponent;
  let fixture: ComponentFixture<TogglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
