import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe',
})
export class MiPipePipe implements PipeTransform {
  transform(value: number[], ...args: any): any {
    return value.filter((num) => this.esNumPrimo(num));
  }

  esNumPrimo(num: number): boolean {
    if (num == 0) return false;
    else {
      let count = 0;
      for (let i = 2; i < num / 2; i++) {
        if (num % i == 0) count++;
      }
      return count === 0;
    }
  }
}
