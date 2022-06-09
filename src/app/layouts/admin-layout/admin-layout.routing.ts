import { Routes } from '@angular/router';


import {SpazipubblicitariComponent} from "../../pages/spazipubblicitari/spazipubblicitari.component";
import {GalleryComponent} from "../../pages/gallery/gallery.component";


export const AdminLayoutRoutes: Routes = [
    { path: 'spazi',      component: SpazipubblicitariComponent },
    { path: 'gallery',      component: GalleryComponent },

];
