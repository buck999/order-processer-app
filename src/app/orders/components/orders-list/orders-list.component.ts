import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { Order } from '../../model/order';

@Component({
  selector: 'app-orders-list',
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss'
})
export class OrdersListComponent{

  @Input() orders: Order[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['status', 'created_at', 'updated_at', 'task', 'result'];

  onAdd() {
    this.add.emit(true);
  }

  onEdit(order: Order) {
    this.edit.emit(order);
  }

  onDelete(order: Order) {
    this.remove.emit(order);
  }

}
