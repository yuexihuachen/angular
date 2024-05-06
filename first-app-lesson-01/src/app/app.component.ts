import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterLink } from '@angular/router';

/**
 * NgModules配置注入器和编译器，并帮助将相关的东西组织在一起。
 * NgModule 是由装饰器标记的类。 采用一个元数据对象，该对象描述如何编译组件的模板以及如何在运行时创建注入器。它
 * 标识模块自己的组件、指令和管道，通过属性将其中一些公开，以便外部组件可以使用它们。 还可以将服务提供者添加到应用
 * 程序依赖注入器中。
 */

@Component({
  selector: 'app-root',//在模板中使用的 CSS 选择器来放置此组件
  standalone: true, //描述组件是否需要NgModule,独立组件
  imports: [
    HomeComponent,
    RouterModule,
    RouterLink
  ],//允许您指定可在其模板中使用的组件的依赖项。
  templateUrl: './app.component.html',//与组件关联的 HTML 文件
  styleUrls: ['./app.component.css'],//用于此组件的样式的文件位置和名称
})
export class AppComponent {
  title = 'hello angular';
  appId= "appid"
}
