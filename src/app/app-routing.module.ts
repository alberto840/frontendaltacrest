import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './inventual/common/login/login.component';
import { RegisterComponent } from './inventual/common/register/register.component';
import { NotFoundComponent } from './inventual/not-found/not-found.component';
import { CarritoPageComponent } from './inventual/views/carrito-page/carrito-page.component';
import { ProductoDetalleComponent } from './inventual/views/producto-detalle/producto-detalle.component';
import { ProductosPageComponent } from './inventual/views/productos-page/productos-page.component';


const routes: Routes = [ 
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'producto/:id',
    component: ProductoDetalleComponent
  },
  {
    path: 'carrito',
    component: CarritoPageComponent
  },
  {
    path: 'productos/:id',
    component: ProductosPageComponent
  },
  {
    path: 'productos',
    component: ProductosPageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
