import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowWayBindingComponent } from './tow-way-binding.component';

describe('TowWayBindingComponent', () => {
  let component: TowWayBindingComponent;
  let fixture: ComponentFixture<TowWayBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowWayBindingComponent]
    });
    fixture = TestBed.createComponent(TowWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
