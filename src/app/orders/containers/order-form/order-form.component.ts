import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { Order } from '../../model/order';
import { OrdersService } from '../../services/orders.service';
import { FormUtilsService } from '../../../shared/form/form-utils.service';

@Component({
  selector: 'app-order-form',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [FormUtilsService],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit  {

  form!: FormGroup;

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: OrdersService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    public formUtils: FormUtilsService) {
  }

  ngOnInit(): void {
    const order: Order = this.route.snapshot.data['order'];
    this.form = this.formBuilder.group({
      id: [order.id],
      task: [order.task, [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value)
        .subscribe(result => this.onSuccess(), error => this.onError());
    } else {
      this.formUtils.validateAllFormFields(this.form);
    }
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Order saved successfully!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Error saving order.', '', { duration: 5000 });
  }


}
