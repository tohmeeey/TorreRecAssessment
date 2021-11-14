import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserskillsComponent } from './userskills.component';

describe('UserskillsComponent', () => {
  let component: UserskillsComponent;
  let fixture: ComponentFixture<UserskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
