import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GluteusMaximusComponent } from './gluteus-maximus.component';

describe('GluteusMaximusComponent', () => {
  let component: GluteusMaximusComponent;
  let fixture: ComponentFixture<GluteusMaximusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GluteusMaximusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GluteusMaximusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
