import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverwritePageComponent} from "./pages/indrident/overwrite-page/overwrite-page.component";
import {Swiperdemo1PageComponent} from "./pages/indrident/swiperdemo1-page/swiperdemo1-page.component";

const routes: Routes = [
  { path: "", component: OverwritePageComponent, pathMatch: "full" },
  { path: "page1", component: OverwritePageComponent },
  { path: "page2", component: Swiperdemo1PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
