import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObszernyBocznyComponent } from './obszerny-boczny.component';

describe('ObszernyBocznyComponent', () => {
  let component: ObszernyBocznyComponent;
  let fixture: ComponentFixture<ObszernyBocznyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObszernyBocznyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObszernyBocznyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
