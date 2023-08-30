import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiptechComponent } from './shiptech.component';

describe('ShiptechComponent', () => {
  let component: ShiptechComponent;
  let fixture: ComponentFixture<ShiptechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiptechComponent]
    });
    fixture = TestBed.createComponent(ShiptechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
