import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'product-item-detail', component: ProductItemDetailComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-item', component: ProductItemComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
