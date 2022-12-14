import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes:Route[] = [
    {path: "facesnaps", component: FaceSnapListComponent},
    {path: "facesnaps/:id", component: SingleFaceSnapComponent},
    {path: "", component: LandingPageComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}