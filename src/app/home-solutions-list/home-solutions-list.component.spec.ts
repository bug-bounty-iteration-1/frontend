import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSolutionsListComponent } from './home-solutions-list.component';

describe('HomeSolutionsListComponent', () => {
  let component: HomeSolutionsListComponent;
  let fixture: ComponentFixture<HomeSolutionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSolutionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSolutionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
