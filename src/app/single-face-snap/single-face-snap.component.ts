import { FaceSnapService } from './../services/face-snap.service';
import { FaceSnap } from './../models/face-snap.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  userSnaped = false;
  snapMsg = "Oh snap!";
  faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapService,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.faceSnap = this.faceSnapService.findSnapFaceById(+this.route.snapshot.params["id"])
  } 

  onSnap(){
    if(!this.userSnaped){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, this.userSnaped);
      this.userSnaped= true;
      this.snapMsg= "Ooops snaped !";
    } else if (this.userSnaped){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, this.userSnaped);
      this.userSnaped= false;
      this.snapMsg = "Oh snap!";
    }
  }

}
