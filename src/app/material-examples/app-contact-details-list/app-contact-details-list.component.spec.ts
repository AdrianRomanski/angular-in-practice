import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactDetailsListComponent } from './app-contact-details-list.component';

describe('AppContactDetailsListComponent', () => {
  let component: AppContactDetailsListComponent;
  let fixture: ComponentFixture<AppContactDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContactDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
