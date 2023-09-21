import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssestItemComponent } from './assest-item.component';

describe('AssestItemComponent', () => {
  let component: AssestItemComponent;
  let fixture: ComponentFixture<AssestItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssestItemComponent]
    });
    fixture = TestBed.createComponent(AssestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
