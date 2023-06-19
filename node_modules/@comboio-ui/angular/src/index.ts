import { colors } from '@comboio-ui/tokens'

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1 [style.color]="colors.primary500">Hello World</h1>'
})
export class AppComponent {
  colors = {
    primary500: colors.primary500
  };
}

