import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './profile/playlist/playlist.component';



export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/playlist', component: PlaylistComponent },
  { path: 'search', component: SearchComponent },
  { path: '', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
