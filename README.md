## Rocketseat Contrib #2

#### Starting Project
```bash
ng new  contrib-02
```

#### Create Module and Router Video
```bash
ng module video --routing
```
> video/video.module.ts
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoListComponent } from './video-list/video-list.component';


@NgModule({
  declarations: [
    VideoListComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
```
> video-routing.module.ts
```ts
import { VideoListComponent } from './video-list/video-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VideoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
```

#### Create Component Video
```bash
ng generate component video/video-list
```
> video.component.ts

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

#### Create Service Video
```bash
ng generate service video/video
```
```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }
}
```

#### Import HttpClient In Service and HttpClientModule In Module
```ts
import { HttpClient } from '@angular/common/http';
```
```ts
import { HttpClientModule } from '@angular/common/http';
```

#### Use Observable and Observable Operator
```ts
import { Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private http: HttpClient
  ) { }
  getRepos(): Observable<any> {
    return this.http.get<any>('http://api.github.com/users/andreaquilau/agenda-online')
    .pipe(map( repo => ({
      name: repo.full_Name,
      description: repo.description,
    })), tap(console.log) );
  }
}


// OR

getRepos(): Observable<Repository[]> {
  return this.http.get<any>('https://api.github.com/users/andreaquilau/repos');
}
```

#### Use ngFor
```html
<ul>
  <li *ngFor="let repo of repos | async">
    <strong>{{repo.name}}</strong>
    <strong>{{repo.description}}</strong>
  </li>
</ul>
```

#### Get Param Of Router
```ts
  {
    path: 'ditail/:name',
    component: VideoEditComponent,
  }
```
```html
  <a [routerLink]="['detail/', repo.name]">Detalhes</a>
```
```html
  <a [routerLink]="['detail/', repo.name]">Detalhes</a>
```
