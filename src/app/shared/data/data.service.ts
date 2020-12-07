import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000/api/';

  constructor(private httpClient: HttpClient) { }

  headers: HttpHeaders;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  get(url): Promise<any> {
    // this.updateHttpHeaders();
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.baseUrl + url).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  post(url, data): Promise<any> {
    // this.updateHttpHeaders();
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.baseUrl + url, data).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  patch(url, id, data): Promise<any> {
    // this.updateHttpHeaders();
    return new Promise((resolve, reject) => {
      this.httpClient.patch(this.baseUrl + url + '/' + id, data).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  delete(url, id?): Promise<any> {
    // this.updateHttpHeaders();
    if (id) {
      return new Promise((resolve, reject) => {
        this.httpClient.delete(this.baseUrl + url + '/' + id).subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      });
    } else {
      return new Promise((resolve, reject) => {
        this.httpClient.delete(this.baseUrl + url).subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      });
    }
  }
}
