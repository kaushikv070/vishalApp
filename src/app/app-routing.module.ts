import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { StopwatchDecoratorComponent } from './stopwatch-decorator/stopwatch-decorator.component';
import { StopwatchServiceComponent } from './stopwatch-service/stopwatch-service.component';
import { StudentComponent } from './student/student.component';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { StutentTableComponent } from './stutent-table/stutent-table.component';


const routes: Route[] = [
  {path: '', redirectTo: '/banner', pathMatch: 'full'},
  {path:'banner', component: BannerComponent},
  {path:'ecom',component: EcommerceComponent},
  {path:'watchDecorator', component: StopwatchDecoratorComponent},
  {path:'watchService',component:StopwatchServiceComponent},
  {path:'student',component:StutentTableComponent},
  {path:'dynamicDiv',component:DynamicDivComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
