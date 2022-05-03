import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;

  showDynamicComponent() {
    this.viewRef.clear();
    this.viewRef.createComponent(DynamicComponent);
  }
}
