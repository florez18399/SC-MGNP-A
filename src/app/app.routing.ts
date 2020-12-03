import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MeanSquaresComponent} from './mean-squares/mean-squares.component';
import {CongruentialComponent} from './congruential/congruential.component';
import {NormalDistComponent} from './normal-dist/normal-dist.component';
import {UniformComponent} from './uniform/uniform.component'; // CLI imports router

const routes: Routes = [
  {
    path: '' , component: HomeComponent, children: [
      { path: 'meanSquares', component: MeanSquaresComponent},
      { path: 'congruential', component: CongruentialComponent},
      { path: 'normalDist', component: NormalDistComponent},
      { path: 'uniformDist', component: UniformComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
