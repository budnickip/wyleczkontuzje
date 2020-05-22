import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemitendinosusComponent } from './semitendinosus.component';

describe('SemitendinosusComponent', () => {
  let component: SemitendinosusComponent;
  let fixture: ComponentFixture<SemitendinosusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemitendinosusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemitendinosusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
