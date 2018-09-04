import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWeddingDialogComponent } from './new-wedding-dialog.component';

describe('NewWeddingDialogComponent', () => {
  let component: NewWeddingDialogComponent;
  let fixture: ComponentFixture<NewWeddingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWeddingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWeddingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
