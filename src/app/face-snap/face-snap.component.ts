import { Router } from '@angular/router';
import { FaceSnapService } from './../services/face-snap.service';
import { FaceSnap } from './../models/face-snap.models';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  userSnaped = false;
  snapMsg = "Oh snap!";
  @Input()faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapService, private router: Router){}

  ngOnInit(){} 

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

  onViewSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
