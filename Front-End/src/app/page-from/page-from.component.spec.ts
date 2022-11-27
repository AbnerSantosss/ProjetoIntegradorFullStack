import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFromComponent } from './page-from.component';

describe('PageFromComponent', () => {
  let component: PageFromComponent;
  let fixture: ComponentFixture<PageFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
