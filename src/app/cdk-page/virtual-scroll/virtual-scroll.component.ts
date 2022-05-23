import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualScrollComponent {

  users = [
    'Artyom Pankov',
    'John Doe',
    'Marie Smith',
    'Hans Andersen',
    'Alex Johnson',
    'Vin Diesel',
  ];

}
