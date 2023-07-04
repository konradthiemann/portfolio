import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintMainComponent } from './imprint-main.component';

describe('ImprintMainComponent', () => {
  let component: ImprintMainComponent;
  let fixture: ComponentFixture<ImprintMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprintMainComponent]
    });
    fixture = TestBed.createComponent(ImprintMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
