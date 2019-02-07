import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { BlogPost } from '../models/blog-post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private apiService: ApiService) { }

  public GetPosts(): Observable<BlogPost[]> {
    return this.apiService.Get(environment.api.posts)
    .pipe(map(json => {
      return json.map((post) => new BlogPost(post));
    }));
  }

  public GetPost(id: string): Observable<BlogPost> {
    return this.apiService.Get(environment.api.posts + '/' + id)
    .pipe(map(json => {
      return new BlogPost(json);
    }));
  }

  public CreatePost(post: BlogPost): Observable<any> {
    return this.apiService.Post(
      environment.api.posts,
      post
    );
  }

  public UpdatePost(post: BlogPost): Observable<any> {
    return this.apiService.Put(
      environment.api.posts + '/' + post.id,
      post
    );
  }

  DeletePost(id: string) {
    return this.apiService.Delete(environment.api.posts + '/' + id)
      .pipe((json => {
        // console.log(json);
        return json;
      }));
  }

}
