import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }
  ngOnChanges(): void {
    this.log('ngOnChanges');

  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');

  }
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
  private log(value: string) {
    console.log(value);
  }


}
