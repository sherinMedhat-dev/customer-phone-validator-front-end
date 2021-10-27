import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPhoneDetailsComponent } from './customer/customer-phone-details/customer-phone-details.component';

const routes: Routes = [{ path: 'customer/phone-details', component: CustomerPhoneDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
