import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3GridComponent } from './m3-grid.component';

describe('M3GridComponent', () => {
  let component: M3GridComponent;
  let fixture: ComponentFixture<M3GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3GridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
