import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// import img from '../../../assets/images/img-broken.png'
@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg:string = '';
  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement
    elNative.src = '../../../assets/images/img-broken.png';
    console.log('🔴 Esta imagen revento -->', elNative);
    /* elNative.src = 'http://i.imgur.com/fFU3IqP.png' */
    /* elNative.src = this.customImg */
  }

  constructor(private elHost:ElementRef) {
    /* console.log(this.elHost); */
  } 
}
