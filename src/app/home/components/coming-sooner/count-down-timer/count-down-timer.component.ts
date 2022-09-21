import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';
import { interval } from 'rxjs';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss'],
})
export class CountDownTimerComponent implements OnInit, OnDestroy {
  private subscription?: any;
  public startDate = moment(new Date(), 'DD-MM-YYYY');
  public endDate = moment('01-10-2022', 'DD-MM-YYYY');
  public timeDifference: any;
  public secondsLeft: any;
  public secondsRight: any;
  public minutesLeft: any;
  public minutesRight: any;
  public hoursLeft: any;
  public hoursRight: any;
  public daysLeft: any;
  public daysRight: any;
  ngOnInit() {
    this.subscription = interval(1000).subscribe((x) => {
      this.startDate = moment(new Date(), 'DD-MM-YYYY');
      this.timeDifference = moment
        .utc(this.endDate.diff(this.startDate))
        .format('DD:hh:mm:ss');
      this.daysLeft = this.timeDifference.split(':')[0].charAt(0);
      this.daysRight = this.timeDifference.split(':')[0].charAt(1);
      this.hoursLeft = this.timeDifference.split(':')[1].charAt(0);
      this.hoursRight = this.timeDifference.split(':')[1].charAt(1);
      this.minutesLeft = this.timeDifference.split(':')[2].charAt(0);
      this.minutesRight = this.timeDifference.split(':')[2].charAt(1);
      this.secondsLeft = this.timeDifference.split(':')[3].charAt(0);
      this.secondsRight = this.timeDifference.split(':')[3].charAt(1);
    });
  }
  ngOnDestroy() {
    clearInterval(this.subscription);
  }
}
