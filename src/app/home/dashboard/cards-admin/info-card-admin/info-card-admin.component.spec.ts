import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardAdminComponent } from './info-card-admin.component';

describe('InfoCardAdminComponent', () => {
  let component: InfoCardAdminComponent;
  let fixture: ComponentFixture<InfoCardAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCardAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
