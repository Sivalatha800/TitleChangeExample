import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  heading = 'Child Component';

  @Output() transforTitle = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
