import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IRoom } from '../rooms';

@Component({
  selector: 'hotelinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {
  
  @Input() rooms: IRoom[] = [];

  @Output() roomSelected = new EventEmitter<IRoom>();
  constructor() { }

  ngOnInit(): void {
  }
selectRoom(room: IRoom) {
    this.roomSelected.emit(room);
  }
}
