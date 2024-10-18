import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmAccordionComponent } from './frm-accordion.component';

describe('FrmAccordionComponent', () => {
  let component: FrmAccordionComponent;
  let fixture: ComponentFixture<FrmAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
