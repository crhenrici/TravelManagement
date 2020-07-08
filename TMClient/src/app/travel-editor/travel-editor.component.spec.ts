import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEditorComponent } from './travel-editor.component';

describe('TravelEditorComponent', () => {
  let component: TravelEditorComponent;
  let fixture: ComponentFixture<TravelEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
