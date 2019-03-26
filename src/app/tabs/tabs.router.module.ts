import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mesas',
        children: [
          {
            path: '',
            loadChildren: '../mesas/mesas.module#mesasPageModule'
          }
        ]
      },
      {
        path: 'pedidos',
        children: [
          {
            path: '',
            loadChildren: '../pedidos/pedidos.module#pedidosPageModule'
          }
        ]
      },
      {
        path: 'cardapio',
        children: [
          {
            path: '',
            loadChildren: '../cardapio/cardapio.module#cardapioPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/mesas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/mesas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
