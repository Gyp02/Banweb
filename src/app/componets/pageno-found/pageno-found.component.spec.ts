import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenoFoundComponent } from './pageno-found.component';

describe('PagenoFoundComponent', () => {
  let component: PagenoFoundComponent;
  let fixture: ComponentFixture<PagenoFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenoFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenoFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
