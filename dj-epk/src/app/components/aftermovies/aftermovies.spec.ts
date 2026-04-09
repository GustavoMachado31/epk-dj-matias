import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aftermovies } from './aftermovies';

describe('Aftermovies', () => {
  let component: Aftermovies;
  let fixture: ComponentFixture<Aftermovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aftermovies],
    }).compileComponents();

    fixture = TestBed.createComponent(Aftermovies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
