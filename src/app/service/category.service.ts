import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService: ApiService) { }

  public GetCategory(id: string): Observable<Category> {
    return this.apiService.Get(environment.api.categories + '/' + id)
    .pipe(map(json => {
      return new Category(json);
    }));
  }

  public CreateCategory(category: Category): Observable<any> {
    return this.apiService.Post(
      environment.api.categories,
      category
    ).pipe(map(json => {
      return new Category(json);
    }));
  }

  public UpdateCategory(category: Category): Observable<any> {
    return this.apiService.Put(
      environment.api.categories + '/' + category.id,
      category
    ).pipe(map(json => {
      return new Category(json);
    }));
  }

  GetCategories(): Observable<Category[]> {
    return this.apiService.Get(environment.api.categories)
      .pipe(map(json => {
        return json.map((category) => new Category(category));
      }));
  }

  DeleteCategory(id: string) {
    return this.apiService.Delete(environment.api.categories + '/' + id)
      .pipe((json => {
        // console.log(json);
        return json;
      }));
  }
}
