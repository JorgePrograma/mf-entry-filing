import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSenderComponent } from './section-sender.component';

describe('SectionSenderComponent', () => {
  let component: SectionSenderComponent;
  let fixture: ComponentFixture<SectionSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
