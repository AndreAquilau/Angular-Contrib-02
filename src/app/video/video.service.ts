import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Repository } from './video-list/video-list.component';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private http: HttpClient
  ) { }

  getRepos(): Observable<Repository[]> {
    return this.http.get<any>('https://api.github.com/users/andreaquilau/repos');
  }
}
