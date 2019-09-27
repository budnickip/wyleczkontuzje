import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlossComponent } from './floss.component';

describe('FlossComponent', () => {
  let component: FlossComponent;
  let fixture: ComponentFixture<FlossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
