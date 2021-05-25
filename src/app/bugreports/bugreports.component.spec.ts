import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugreportsComponent } from './bugreports.component';

describe('BugreportsComponent', () => {
  let component: BugreportsComponent;
  let fixture: ComponentFixture<BugreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
