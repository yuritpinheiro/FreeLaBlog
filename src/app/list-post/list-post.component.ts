import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BlogPost} from '../models/blog-post';
import {BlogPostService} from '../service/blog-post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  loading = true;
  @Input() posts: BlogPost[];
  @Output() editPostEmitter = new EventEmitter<BlogPost>();
  constructor(private postService: BlogPostService) { }

  ngOnInit() {
    this.postService.GetPosts()
      .subscribe((posts) => {
        this.posts = posts;
        this.loading = false;
      });
  }

  editPost(post: BlogPost) {
    this.editPostEmitter.emit(post);
  }

  deletePost(id: string) {
    this.postService.DeletePost(id)
      .subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== id);
      });
  }

}
