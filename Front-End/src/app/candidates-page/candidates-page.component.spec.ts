import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesPageComponent } from './candidates-page.component';

describe('CandidatesPageComponent', () => {
  let component: CandidatesPageComponent;
  let fixture: ComponentFixture<CandidatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
