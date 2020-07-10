import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStayComponent } from './edit-stay.component';

describe('EditStayComponent', () => {
  let component: EditStayComponent;
  let fixture: ComponentFixture<EditStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
