import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaDocumentiComponent } from './ricerca-documenti.component';

describe('RicercaDocumentiComponent', () => {
  let component: RicercaDocumentiComponent;
  let fixture: ComponentFixture<RicercaDocumentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RicercaDocumentiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicercaDocumentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
