import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdlogComponent } from './adlog.component';

describe('AdlogComponent', () => {
  let component: AdlogComponent;
  let fixture: ComponentFixture<AdlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
