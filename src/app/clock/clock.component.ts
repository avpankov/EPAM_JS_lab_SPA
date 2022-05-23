import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent implements OnInit {

  date = new Date();
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
      this.cd.markForCheck();
    }, 1000)
  }

}
