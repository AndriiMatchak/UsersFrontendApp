import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersViewListComponent } from './users-view-list.component';

describe('UsersViewListComponent', () => {
  let component: UsersViewListComponent;
  let fixture: ComponentFixture<UsersViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
