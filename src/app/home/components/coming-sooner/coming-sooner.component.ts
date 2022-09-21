import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubSink } from './services/subsink';
import { AnimationOptions } from 'ngx-lottie';
// import { WaitingListService } from './services/waiting-list.service';

@Component({
  selector: 'app-coming-sooner',
  templateUrl: './coming-sooner.component.html',
  styleUrls: ['./coming-sooner.component.scss'],

  animations: [
    trigger('fadeAnimation', [
      state(
        'fade-out',
        style({
          opacity: 0,
        })
      ),
      transition('* => fade-out', animate('1500ms ease-in-out')),
    ]),
  ],
})
export class ComingSoonerComponent implements OnInit {
  subs = new SubSink();
  formGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  fadeOut: string = '';
  state = '';
  comingSoon: AnimationOptions = {
    path: 'assets/animations/test.json',
  };
  berry: AnimationOptions = {
    path: 'assets/animations/berry.json',
  };
  light: AnimationOptions = {
    path: 'assets/animations/light.json',
  };
  mobileLight: AnimationOptions = {
    path: 'assets/animations/new-light.json',
  };
  pig: AnimationOptions = {
    path: 'assets/animations/pig.json',
  };
  cow: AnimationOptions = {
    path: 'assets/animations/cow.json',
  };
  ball: AnimationOptions = {
    path: 'assets/animations/ball.json',
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submitApplicationFormHandler(e: any) {
    // if (this.formGroup.invalid) return;
    // this.subs.sink = this.waitingListService
    //   .create(this.formGroup.value)
    //   .subscribe({
    //     next: () => {
    //       this.fadeOut = 'fade-out';
    //     },
    //     error: () => {},
    //   });
  }
}
