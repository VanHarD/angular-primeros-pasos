import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.compoent";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
