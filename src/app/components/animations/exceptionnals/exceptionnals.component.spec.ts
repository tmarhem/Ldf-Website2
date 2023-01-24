import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionnalsComponent } from './exceptionnals.component';

describe('ExceptionnalsComponent', () => {
  let component: ExceptionnalsComponent;
  let fixture: ComponentFixture<ExceptionnalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptionnalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionnalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
