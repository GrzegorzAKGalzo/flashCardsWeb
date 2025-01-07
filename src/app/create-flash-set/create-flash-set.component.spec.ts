import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlashSetComponent } from './create-flash-set.component';

describe('CreateFlashSetComponent', () => {
  let component: CreateFlashSetComponent;
  let fixture: ComponentFixture<CreateFlashSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFlashSetComponent]
    });
    fixture = TestBed.createComponent(CreateFlashSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
