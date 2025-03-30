import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OrderFormComponent } from './order-form.component';
import { ActivatedRoute } from '@angular/router';

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [OrderFormComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: { order: { id: '', task: '' } } } },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.form.value).toEqual({ id: '', task: '' });
  });

  it('should validate task field', () => {
    const taskControl = component.form.get('task');
    taskControl?.setValue('');
    expect(taskControl?.valid).toBeFalse();

    taskControl?.setValue('Valid Task');
    expect(taskControl?.valid).toBeTrue();
  });
});
