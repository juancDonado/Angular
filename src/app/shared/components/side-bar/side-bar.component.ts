import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu:{ defaultOptions:Array<any>, accessLink:Array<any> } =
  { defaultOptions: [], accessLink: [] };

  customOptions:Array<any> = [];

  constructor(private router:Router) {
    console.log("Sidebar")
   }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Favorites',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query:{hola:'mundo'}
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Create list',
        icon: 'uil-plus-square'
      },
      {
        name: 'Songs you like',
        icon: 'uil-heart-medical'
      }
    ]
    this.customOptions = [
      {
        name: 'Mi lista °1',
        router: ['/']
      },
      {
        name: 'Mi lista °2',
        router: ['/']
      },
      {
        name: 'Mi lista °3',
        router: ['/']
      },
      {
        name: 'Mi lista °4',
        router: ['/']
      }
    ]
  }
  goTo($event:any):void{
    this.router.navigate(['/', 'favorites'],{
      queryParams:{
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    });
    console.log($event);
  }

}
