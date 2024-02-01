import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UibuttonComponent } from './uibutton.component';

describe('UibuttonComponent', () => {
  let component: UibuttonComponent;
  let fixture: ComponentFixture<UibuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UibuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UibuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
