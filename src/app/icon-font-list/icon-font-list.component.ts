import { Component, OnInit, Input } from '@angular/core';
import { Icon, IconFont } from '../app.component';
import {Clipboard} from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icon-font-list',
  templateUrl: './icon-font-list.component.html',
  styleUrls: ['./icon-font-list.component.scss'],
})
export class IconFontListComponent implements OnInit {
  @Input() iconFontList: IconFont[] = []
  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  copyIconId(icon:Icon) {
    this.clipboard.copy(icon.unicode);
    this._snackBar.open(icon.title + ' icon unicode id has been copied to your clipboard.', undefined, {duration:4000});
  }

  copyFontName(font:IconFont) {
    this.clipboard.copy(font.title);
    this._snackBar.open('Font Name has been copied to your clipboard.', undefined, {duration:4000});

  }


  ngOnInit(): void {
  }

}
