import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'convert-decimal-to-binary';

  convertNumber: FormGroup = new FormGroup({
    'decemal': new FormControl(0),
    'binary': new FormControl(0),
  });
  convertAction(): void {
    let num = this.convertDecemalToBinary(this.convertNumber.value.decemal);
    this.convertNumber.get('binary')?.setValue(num);
  }
  //Normal Methods
  convertDecemalToBinary(number: number): number {
    let value = 0, n = 1;
    for (; number != 0; number = Math.floor(number / 2)) {
      value += (number % 2) * n;
      n *= 10;
    }
    return value;
  }
  // value = 0;
  // n = 1;
  // convertDecemalToBinary(num: number) {
  //   if (num === 0) return 0;
  //   this.value += (num % 2) * this.n;
  //   this.n *= 10;
  //   this.convertDecemalToBinary(Math.floor(num / 2));
  //   return this.value;
  // }
  ngOnInit(): void {

  }
}
