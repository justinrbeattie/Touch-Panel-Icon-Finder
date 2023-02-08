import { Component } from '@angular/core';
import *  as  IconFontList from '../assets/json/iconFonts.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm: string = '';
  iconFontList:IconFont[] = [];
  constructor() {
     const module: any = IconFontList;
     this.iconFontList= module.default;
    console.log(this.iconFontList);
  }

  onSearch() {
    if (this.searchTerm.length > 0) {
      this.iconFontList.forEach((font, fontIndex) => {
        const filteredIcons = font.iconList.filter(icon => {
          return icon.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
        font['filteredIconList'] = Array.from(filteredIcons);
      });

    } else {
      this.iconFontList.forEach((font, fontIndex) => {
        font['filteredIconList'] = font.iconList;
      });
    }
}
}

export interface IconFont {
  name: string,
  title: string,
  iconList: Icon[]
  filteredIconList: Icon[]
}

export interface Icon {
  name: string,
  title: string,
  unicode: string,
  selected: boolean
}
