import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../models/blog-post';
import {Comment} from '../models/comment';
import {CommentService} from '../service/comment.service';
import {Image} from '../models/image';
import {ImageService} from '../service/image.service';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {CategoryService} from '../service/category.service';
import {Category} from '../models/category';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.css']
})
export class PreviewPostComponent implements OnInit {
  @Input() post: BlogPost;
  comments: Comment[];
  images: Image[];
  category: Category;

  loadingComments = true;
  loadingImages = true;
  loadingCategory = true;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,
    centeredSlides: true,
    // height: 600,
    // width: 600,
  };

  index = 0;

  constructor(private commentService: CommentService,
              private imageService: ImageService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.getComments();
    this.getImages();
    this.getCategory();
  }

  private getComments(): void {
    this.commentService.GetComments(this.post.id)
      .subscribe((comments) => {
        this.comments = comments;
        this.loadingComments = false;
      });
  }

  private getImages(): void {
    this.imageService.GetImages(this.post.id)
      .subscribe((images) => {
        this.images = images;
        this.loadingImages = false;
      });
  }

  private getCategory() {
    this.categoryService.GetCategory(this.post.categoryId)
      .subscribe((category) => {
        this.category = category;
        this.loadingCategory = false;
      });
  }

  onCommented(comment: Comment) {
    this.comments.push(comment);
  }
}
