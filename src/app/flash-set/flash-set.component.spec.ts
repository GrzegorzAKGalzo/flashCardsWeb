import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSetComponent } from './flash-set.component';

describe('FlashSetComponent', () => {
  let component: FlashSetComponent;
  let fixture: ComponentFixture<FlashSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashSetComponent]
    });
    fixture = TestBed.createComponent(FlashSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
