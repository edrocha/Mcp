import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmTitleComponent } from './frm-title.component';

describe('FrmTitleComponent', () => {
  let component: FrmTitleComponent;
  let fixture: ComponentFixture<FrmTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
