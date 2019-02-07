import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private apiService: ApiService) { }

  public GetComments(id: string): Observable<Comment[]> {
    return this.apiService.Get(environment.api.posts + '/' + id + '/' + environment.api.comments)
    .pipe(map(json => {
      return json.map((comment) => new Comment(comment));
    }));
  }

  public CreateComment(comment: Comment): Observable<any> {
    return this.apiService.Post(
      environment.api.comments,
      comment
    );
  }

}
