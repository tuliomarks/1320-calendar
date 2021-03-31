import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'discover',
        loadChildren: () => import('../../pages/discover/discover.module').then(m => m.DiscoverPageModule)
      },
      {
        path: 'you',
        loadChildren: () => import('../../pages/you/you.module').then(m => m.YouPageModule)
      },
      {
        path: 'learn',
        loadChildren: () => import('../../pages/learn/learn.module').then(m => m.LearnPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
