import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmInputComponent } from './frm-input.component';

describe('FrmInputComponent', () => {
  let component: FrmInputComponent;
  let fixture: ComponentFixture<FrmInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
