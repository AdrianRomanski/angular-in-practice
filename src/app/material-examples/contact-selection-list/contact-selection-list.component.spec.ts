import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSelectionListComponent } from './contact-selection-list.component';

describe('ContactSelectionListComponent', () => {
  let component: ContactSelectionListComponent;
  let fixture: ComponentFixture<ContactSelectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSelectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
