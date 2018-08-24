
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestlistAdminComponent } from './guestlist-admin.component';

describe('GuestlistAdminComponent', () => {
  let component: GuestlistAdminComponent;
  let fixture: ComponentFixture<GuestlistAdminComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
