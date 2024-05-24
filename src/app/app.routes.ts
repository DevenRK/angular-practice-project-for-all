import { Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { ChildParentRelationComponent } from './pages/child-parent-relation/child-parent-relation.component';
import { FormComponent } from './pages/form/form.component';
import { DataHistoryComponent } from './pages/data-history/data-history.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: '',
    component: DataBindingComponent,
  },
  {
    path: '',
    component: ChildParentRelationComponent,
  },
  {
    path: '',
    component: FormComponent,
  },
  {
    path: '',
    component: DataHistoryComponent,
  }
];
