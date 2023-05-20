import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDubplicateComponent } from './remove-dubplicate.component';

describe('RemoveDubplicateComponent', () => {
  let component: RemoveDubplicateComponent;
  let fixture: ComponentFixture<RemoveDubplicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDubplicateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveDubplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
