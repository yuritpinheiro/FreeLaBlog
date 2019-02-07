import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {Image} from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private apiService: ApiService) { }

  public GetImages(id: string): Observable<Image[]> {
    return this.apiService.Get(environment.api.posts + '/' + id + '/' + environment.api.images)
    .pipe(map(json => {
      return json.map((image) => new Image(image));
    }));
  }

  public CreateImage(image: Image): Observable<any> {
    return this.apiService.Post(
      environment.api.images,
      image
    );
  }

}
