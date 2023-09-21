import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssestListComponent } from './assest-list.component';

describe('AssestListComponent', () => {
  let component: AssestListComponent;
  let fixture: ComponentFixture<AssestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssestListComponent]
    });
    fixture = TestBed.createComponent(AssestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
