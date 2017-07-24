import { Injectable, Inject } from '@angular/core';
import { TRANSLATIONS } from './translations'; // import our opaque token
import { Http, Response, Headers, URLSearchParams, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TranslateService {

	// inject our translations
	constructor(public http: Http) {
	}

	public callService(lang: string): any {
		return (this.http.get('http://localhost:5000/api/values/'+lang).
			map(res => {
				return res.json();
			}));
	}

	public compareLang(lang1: string, lang2: string): any {
		return (this.http.get('http://localhost:5000/api/compare/'+lang1+'/'+lang2).
			map(res => {
				return res.json();
			}));
		
	}

	public writeJSON(lang: string, json: any): any {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let body = json;
		this.http.post("http://localhost:5000/api/values/"+lang, body, {
			headers: headers
		}).subscribe((res: Response) => {
			console.log(res);
		},
		(error: any) => {});
	}

	public getSupportLang(): any {
		return (this.http.get('http://localhost:5000/api/values').
			map(res => {
				return res.json();
			}));
	}

	public exportData(): any {
		window.location.href='http://localhost:5000/api/download';
	}
}