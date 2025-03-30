import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [AppComponent]
		}).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it(`should have as title 'order-processer-app'`, () => {
		expect(component.title).toEqual('order-processer-app');
	});


});
