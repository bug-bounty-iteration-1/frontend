import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalstylesComponent } from './globalstyles.component';

describe('GlobalstylesComponent', () => {
  let component: GlobalstylesComponent;
  let fixture: ComponentFixture<GlobalstylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalstylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
