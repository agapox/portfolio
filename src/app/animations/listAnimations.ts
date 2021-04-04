import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

export const ListAnimationUpTrigger = trigger('listAnimationUp', [
  transition('void => *', [ // each time the binding value changes
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30%)' }),
      stagger(100, [
        animate('0.37s .7s ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateY(30%)' }),
          style({ opacity: .5, transform: 'translateY(-5%)' }),
          style({ opacity: 1, transform: 'translateY(0%)' }),
        ]))
      ])
    ])
  ])
])

export const ListAnimationleftTrigger = trigger('listAnimationLeft', [
  transition('void => *', [ // each time the binding value changes
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(30%)' }),
      stagger(100, [
        animate('0.37s .5s ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateX(30%)' }),
          style({ opacity: .7, transform: 'translateX(-2%)' }),
          style({ opacity: 1, transform: 'translateX(0%)' }),
        ]))
      ])
    ])
  ])
])
