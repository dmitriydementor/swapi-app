import { Pipe, PipeTransform } from '@angular/core';

import { COLORS } from '../../config';

@Pipe({
  name: 'swColor'
})
export class SwColorPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string[] {
    if (!value) {
      return ['transparent'];
    }

    const colors = value.split(',').map(v => v.trim());
    return value === 'n/a' ? ['transparent'] : colors.map((c: string) => COLORS[c]);
  }

}
