import { SpotifyComponent } from './components/spotify/spotify.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { MovieFinderComponent } from './components/moviefinder/moviefinder.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MapComponent } from './components/map/map.component';
const appRoutes: Routes = [
    {
        path: '', component: ProfileComponent
    },
    {
        path: 'spotify', component: SpotifyComponent
    },
    {
        path: 'moviefinder', component: MovieFinderComponent
    },
    {
        path: 'artist/:id', component: ArtistComponent
    },
    {
        path: 'album/:id', component: AlbumComponent
    },
    {
        path: 'movie-details/:id', component: MovieDetailsComponent
    },
    {
        path: 'map', component: MapComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);