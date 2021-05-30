import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSolutionsComponent } from './profile-solutions.component';

describe('ProfileSolutionsComponent', () => {
  let component: ProfileSolutionsComponent;
  let fixture: ComponentFixture<ProfileSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
