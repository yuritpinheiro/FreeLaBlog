import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BlogPostService } from '../service/blog-post.service';
import { BlogPost } from '../models/blog-post';
import {Category} from '../models/category';
import {CategoryService} from '../service/category.service';

@Component({
  selector: 'app-author-post',
  templateUrl: './author-post.component.html',
  styleUrls: ['./author-post.component.css']
})
export class AuthorPostComponent implements OnInit {

  public categories: Category[];
  public category: Category;
  public posts: BlogPost[];
  public post: BlogPost;
  public processing = false;
  public submitted = false;
  public success = false;
  public failure = false;
  public loadingCategories = true;
  public loadingPosts = true;

  constructor(private postService: BlogPostService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.category = new Category();
    this.post = new BlogPost();
    this.postService.GetPosts()
      .subscribe((posts) => {
        this.posts = posts;
        this.loadingPosts = false;
      });

    this.categoryService.GetCategories()
      .subscribe((categories) => {
        this.categories = categories;
        this.loadingCategories = false;
      });
  }

  getNewCategory(newCategory: Category) {
    this.categories = this.categories.filter(category => newCategory.id !== category.id);
    this.categories.push(newCategory);
  }

  getEditCategory(category: Category) {
    this.category = category;
  }

  getNewPost(newPost: BlogPost) {
    this.posts = this.posts.filter(post => newPost.id !== post.id);
    this.posts.push(newPost);
  }

  getEditPost(post: BlogPost) {
    this.post = post;
  }
}
