import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsItemComponent } from './assets-item.component';

describe('AssetsItemComponent', () => {
  let component: AssetsItemComponent;
  let fixture: ComponentFixture<AssetsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetsItemComponent]
    });
    fixture = TestBed.createComponent(AssetsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
