import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFlashSetsComponent } from './my-flash-sets.component';

describe('MyFlashSetsComponent', () => {
  let component: MyFlashSetsComponent;
  let fixture: ComponentFixture<MyFlashSetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFlashSetsComponent]
    });
    fixture = TestBed.createComponent(MyFlashSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
