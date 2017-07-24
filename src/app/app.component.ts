import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { TranslateService } from './translate';
import * as FileSaver from 'file-saver';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

  public currentLang_1: string = 'en';
  public currentLang_2: string = 'en';
  public keys = [];
  // public lang1 = [];
  // public lang2 = [];
  public JSONObj1 = [];
  public JSONObj2 = [];
  public supportedLanguages = [];
  

  constructor(private _translate: TranslateService) {
    this.getData();
    this._translate.getSupportLang().
      subscribe(res => {
        this.supportedLanguages = res;
        // console.log(res);
      });
    this._translate.compareLang(this.currentLang_1, this.currentLang_2);
  }

  ngOnInit() {
    // standing data
  }

  getData() {
    this.keys = [];
    // this.lang1 = [];
    // this.lang2 = [];
    this.JSONObj1 = [];
    this.JSONObj2 = [];
    this._translate.compareLang(this.currentLang_1, this.currentLang_2).
      subscribe(res => {
        this.transform(res, this.keys);
      });
    this._translate.callService(this.currentLang_1).
      subscribe(res => {
        this.JSONObj1 = res;
        // this.transform(this.JSONObj1, this.lang1);
        // console.log(this.lang1);
      });
      this._translate.callService(this.currentLang_2).
      subscribe(res => {
        this.JSONObj2 = res;
        // this.transform(this.JSONObj2, this.lang2);
        // console.log(this.lang1);
      });
  }

  addData1(key: string, value: string) {
    this.keys.push({
      key: key,
      value: value
    });
    // this.lang1.push({
    //   key: key,
    //   value: value
    // });
    this.JSONObj1[key] = value;
    // console.log(this.lang1);
    console.log(this.JSONObj1);
  }
  addData2(key: string, value: string) {
    this.keys.push({
      key: key,
      value: value
    });
    // this.lang2.push({
    //   key: key,
    //   value: value
    // });
    this.JSONObj2[key] = value;
    console.log(this.JSONObj2);
    
  }

  transform(value, list) {
    if (!value) {
      return value;
    }
    for (let key in value) {
      // console.log(key);
      list.push({ key: key, value: value[key] });
    }
  }

  writeData() {
    this._translate.writeJSON(this.currentLang_1, this.JSONObj1);
    this._translate.writeJSON(this.currentLang_2, this.JSONObj2);
  }

  exportData() {
    this._translate.exportData();
  }

  selectLang_1(lang: string) {
    console.log(lang);
    this.currentLang_1 = lang;
    this.getData();
  }
  selectLang_2(lang: string) {
    console.log(lang);
    this.currentLang_2 = lang;
    this.getData();
  }

  changeData1(event: any, key: string) {
    // for(let o of this.lang1) {
    //   if(o.key == key)
    //     o.value = event.target.innerText;
    // }
    this.JSONObj1[key] = event.target.innerText;
    // console.log(this.lang1);
    console.log(this.JSONObj1);
    
  }

  changeData2(event: any, key: string) {
    // for(let o of this.lang2) {
    //   if(o.key == key)
    //     o.value = event.target.innerText;
    // }
    this.JSONObj2[key] = event.target.innerText;
    // console.log(this.lang2);
    console.log(this.JSONObj2);
    
  }

  delData1(event: any, key: string) {
    // delete object from lang1[]
    // for(let o of this.lang1) {
    //   if(o.key == key) {
    //     let index: number = this.lang1.indexOf(o);
    //     this.lang1.splice(index, 1);
    //   }
    // }
    
    // delete prop from JSONObj1
    delete this.JSONObj1[key];
    console.log(this.JSONObj1);
  }

  delData2(event: any, key: string) {
    // delete object from lang2[]
    // for(let o of this.lang2) {
    //   if(o.key == key) {
    //     let index: number = this.lang2.indexOf(o);
    //     this.lang2.splice(index, 1);
    //   }
    // }
    
    // delete prop from JSONObj2
    delete this.JSONObj2[key];
    console.log(this.JSONObj2);
  }

}