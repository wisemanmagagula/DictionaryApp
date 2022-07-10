import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSentenceComponent } from './show-sentence.component';

describe('ShowSentenceComponent', () => {
  let component: ShowSentenceComponent;
  let fixture: ComponentFixture<ShowSentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSentenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
