import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RafavideosComponent } from './rafavideos.component';

describe('RafavideosComponent', () => {
  let component: RafavideosComponent;
  let fixture: ComponentFixture<RafavideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RafavideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RafavideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
