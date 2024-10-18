import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmInputDataComponent } from './frm-input-data.component';

describe('FrmTitleComponent', () => {
  let component: FrmInputDataComponent;
  let fixture: ComponentFixture<FrmInputDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmInputDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
