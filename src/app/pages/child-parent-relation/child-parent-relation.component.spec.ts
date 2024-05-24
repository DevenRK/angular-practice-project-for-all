import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentRelationComponent } from './child-parent-relation.component';

describe('ChildParentRelationComponent', () => {
  let component: ChildParentRelationComponent;
  let fixture: ComponentFixture<ChildParentRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildParentRelationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildParentRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
