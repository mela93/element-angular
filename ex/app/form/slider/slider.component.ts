import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExSliderComponent {
  
  code: string[] = code
  page: any = {
    previous: { name: 'DatePicker 日期选择器', link: '/form/date-picker' },
    next: { name: 'Rate 评分', link: '/form/rate' },
  }
  exClass: any = class {
    handle(val: any): void {
      console.log(val)
    }
  }
  
}
