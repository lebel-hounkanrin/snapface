import { FaceSnap } from './../models/face-snap.models';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class FaceSnapService{
    faceSnaps: FaceSnap[] =
    [
      {
        id:1,
        title: "Tadam", 
        description: "Me learning Ng",
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date("12/17/2021 21:21"), 
        snaps: 7,
        location: "Cotonou"
      },
      {
          id:2,
          title: "Vue is wonderfull", 
          description: "Coming back with vue 3",
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(), 
          snaps: 170
      },
      {
        id:3,
        title: "React haters", 
        description: "I'm not react fan",
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(), 
        snaps: 4
      }
    ]

    getAllSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }

    findSnapFaceById(snapFaceId: number): FaceSnap {
      const faceSnap = this.faceSnaps.find(snapFace => snapFace.id === snapFaceId);
      if(faceSnap){
        return faceSnap;
      } else{
        throw new Error("Face snap not found")
    }
    
  }

  snapFaceSnapById(snapFaceId:number, userSnap: boolean): void{
    const faceSnap = this.findSnapFaceById(snapFaceId);
    userSnap ? faceSnap.snaps-- : faceSnap.snaps++;
  }

   
}