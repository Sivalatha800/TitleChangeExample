import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TitleChangeExample';
  heading = 'Parent Component';

  @ViewChild(ChildComponent) view!: ChildComponent;
  transforTitle(data: any) {
    this.heading = data;
  }
  updateTitle(head: any) {
    this.view.heading = head;
  }
}
