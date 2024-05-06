import { Component, Input,AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      products works!
      <!-- 单槽内容投影 -->
      <ng-content></ng-content>
    </p>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements
OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy {
  constructor(){
    console.log('constructor')
  }
  ngOnInit() {
    // 在第一个ngOnChanges之后触发，只执行一次。这个函数用来初始化页面内容。
    console.log('ngOnInit') 
  }
  ngOnChanges(changes: SimpleChanges){
    //ngOnChanges()在每次更改检测运行后立即调用，并ngOnInit()在第一次运行后立即调用。
    //ngOnInit()在之前（如果组件具有绑定输入）以及每当一个或多个数据绑定输入属性发生更改时调用。
    // @input()接收父组件传递的数据,发生变动，ngOnChanges() 就会被触发
    console.log('ngOnChanges', changes)
  }
  ngDoCheck(){
    //1. 在状态发生变化，Angular不能捕获这个变化时会触发NgDoCheck。
    //2. 每次变化检测以后，都会触发ngDoCheck钩子函数，紧跟在ngOnChanges和ngOnInit之后运行。
    console.log('ngDoCheck')
    /**
     * 通过ChangeDetectionStrategy.OnPush可以跳过某个组件或者某个父组件以及它下面所有子组件的变
     * 化检测，以下四种情况出出现组件变化检测
     * 1. 组件的 @Input() 引用发生变化。
     * 2. 组件的 DOM 事件，包括它子组件的 DOM 事件，比如 click、submit、mouse down。
     * 3. Observable 订阅事件，同时设置 Async pipe。
     * 4. ChangeDetectorRef.detectChanges()、ChangeDetectorRef.markForCheck()、
     * ApplicationRef.tick()，手动调用这三种方式触发变化检测。
     */
  }
  ngAfterContentInit() {
    // 第一次 ngDoCheck() 之后调用，只调用一次。
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    // ngAfterContentInit() 和每次 ngDoCheck() 之后调用。
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    //第一次 ngAfterContentChecked() 之后调用，只调用一次。
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    //ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用。
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    //在 Angular 销毁指令或组件之前立即调用。
    console.log('ngOnDestroy')
  }

  @Input() value?: string


}
