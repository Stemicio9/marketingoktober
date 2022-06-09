import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpazipubblicitariComponent } from './spazipubblicitari.component';

describe('SpazipubblicitariComponent', () => {
  let component: SpazipubblicitariComponent;
  let fixture: ComponentFixture<SpazipubblicitariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpazipubblicitariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpazipubblicitariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
