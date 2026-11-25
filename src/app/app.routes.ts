import { Routes } from '@angular/router';
import {InicioComponent} from './components/web/inicio-component/inicio-component';
import {ValorantListComponent} from './components/web/valorant/valorant-list-component/valorant-list-component';
import {ValorantDetailComponent} from './components/web/valorant/valorant-detail-component/valorant-detail-component';
import {ErrorComponent} from './components/web/error-component/error-component';
import {PokemonTCGDetailComponent} from './components/web/pokemon-tcg/pokemon-tcgdetail-component/pokemon-tcgdetail-component';
import {PokemonTCGListComponent} from './components/web/pokemon-tcg/pokemon-tcglist-component/pokemon-tcglist-component';
import {FinalSpaceDetailComponent} from './components/web/final-space/final-space-detail-component/final-space-detail-component';
import {FinalSpaceListComponent} from './components/web/final-space/final-space-list-component/final-space-list-component';
import {
  MonsterHunterDetailComponent
} from './components/web/monster-hunter/monster-hunter-detail-component/monster-hunter-detail-component';
import {MonsterHunterListComponent} from './components/web/monster-hunter/monster-hunter-list-component/monster-hunter-list-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: InicioComponent
  },
  {
    path: 'valorant/list',
    component: ValorantListComponent
  },
  {
    path: 'valorant/detail/:id',
    component: ValorantDetailComponent
  },
  {
    path: 'monster-hunter/list',
    component: MonsterHunterListComponent
  },
  {
    path: 'monster-hunter/detail/:id',
    component: MonsterHunterDetailComponent
  },
  {
    path: 'final-space/list',
    component: FinalSpaceListComponent
  },
  {
    path: 'final-space/detail/:id',
    component: FinalSpaceDetailComponent
  },
  {
    path: 'pokemon-tcg/list',
    component: PokemonTCGListComponent
  },
  {
    path: 'pokemon-tcg/detail/:id',
    component: PokemonTCGDetailComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];
