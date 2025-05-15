import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  setTitle(title: string) {
    this.document.title = title;
  }

  setThemeColor(color: string) {
    const meta = this.document.querySelector("meta[name=theme-color]") as any;
    meta.content = color;
  }  
}
