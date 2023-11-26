import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTimestampComponent } from './toggle-timestamp.component';

describe('ToggleTimestampComponent', () => {
  let component: ToggleTimestampComponent;
  let fixture: ComponentFixture<ToggleTimestampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleTimestampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
