import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboradComponent } from './user-dashborad.component';

describe('UserDashboradComponent', () => {
  let component: UserDashboradComponent;
  let fixture: ComponentFixture<UserDashboradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
