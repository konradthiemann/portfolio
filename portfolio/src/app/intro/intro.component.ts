import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  constructor() {
    this.calculateCurve();
   }
  calculateCurve(){
    setInterval(() => {
      let picture = document.getElementById("picture-container");
      let curve = document.getElementById("curve");
      let upperSectionWidth = document.getElementById("upper-section")?.offsetWidth;
      let upperSectionHeight = document.getElementById("upper-section")?.offsetHeight;
      let pictureWidth = picture!.offsetWidth;

      if (picture!.offsetWidth < 470 && upperSectionWidth! < 963 && upperSectionHeight! < 1000) {
        curve!.style.height = pictureWidth + 430 + (1480 - upperSectionWidth! * 1.5) - (1850 - upperSectionHeight! * 1.85)  + "px";
      }

      else if (picture!.offsetWidth < 470 && upperSectionWidth! < 963 && upperSectionHeight! > 1000) {
        curve!.style.height = (pictureWidth * 0.8 - (730 - upperSectionHeight! * 1.3) + (1357 - upperSectionWidth! * 1.4) ) + "px";
      }

      else if (picture!.offsetWidth < 470 && upperSectionWidth! > 962 && upperSectionHeight! > 1000) {        
        let newHeight = (670 - pictureWidth)+470;
        curve!.style.height = `${newHeight}` +"px";
      }
      else if(picture!.offsetWidth < 290 && upperSectionWidth! > 962 && upperSectionHeight! < 664){
        curve!.style.height = (pictureWidth - 1540 + (2420 - upperSectionWidth! * 0.5)) + "px";
      }
      else if(picture!.offsetWidth < 670 && upperSectionWidth! > 962 && upperSectionHeight! < 664){
        curve!.style.height = (pictureWidth - 1610 + (2420 - upperSectionWidth! * 0.5)) + "px";
      }
      
      else if(picture!.offsetWidth < 670 && upperSectionWidth! > 962 && upperSectionHeight! < 846){
        curve!.style.height = (pictureWidth -1200 + (2420 - upperSectionWidth! * 0.7)) + "px";
      }
      else if(picture!.offsetWidth < 415 && upperSectionWidth! > 962 && upperSectionHeight! < 1000){
        curve!.style.height = (pictureWidth - 350 + (1600 - upperSectionWidth!*0.8)) + "px";
      }
      else if (picture!.offsetWidth < 670 && upperSectionWidth! > 962 && upperSectionHeight! > 1000) {        
        let newHeight = (670 - pictureWidth)+440;
        curve!.style.height = `${newHeight}` +"px"; 
      }
      
      else if(picture!.offsetWidth < 670 && upperSectionWidth! > 962 && upperSectionHeight! < 1000){
        curve!.style.height = (pictureWidth - 350 + (1880 - upperSectionWidth!)) + "px";
      }
      else{
        curve!.style.height = pictureWidth * 0.65+ (upperSectionHeight! - 1090) + "px";
      }
    }, 10);
  }
}
