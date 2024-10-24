import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALinkComponent } from './a-link.component';

describe('ALinkComponent', () => {
  let component: ALinkComponent;
  let fixture: ComponentFixture<ALinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ALinkComponent]
    });
    fixture = TestBed.createComponent(ALinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
