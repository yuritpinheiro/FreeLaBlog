import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BlogPost} from '../models/blog-post';
import {BlogPostService} from '../service/blog-post.service';
import {Category} from '../models/category';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {
  @Input() categories: Category[];
  @Output() newPostEmitter = new EventEmitter<BlogPost>();
  @Input() post: BlogPost;


  public processing = false;
  public submitted = false;
  public success = false;
  public failure = false;

  constructor(private postService: BlogPostService) { }

  ngOnInit() {
  }

  submit() {
    this.processing = this.submitted = true;
    this.submitted = this.failure = false;

    console.log('submitting blog post: ' + JSON.stringify(this.post));
    if (this.post.id && parseInt(this.post.id, 10) > 0) {
      this.postService.UpdatePost(this.post)
        .subscribe(
          // response => console.log('response on new post: ' + JSON.stringify(response))
          response => { // Handle each observable response
            console.log('result: ' + JSON.stringify(response));
            this.newPostEmitter.emit(response);
            this.post = new BlogPost();
          },
          error => { // Error response code
            this.processing = false;
            this.failure = true;
          },
          () => { // Success response code
            this.processing = false;
            this.success = true;
            this.submitted = false;
          }
        );
    } else {
      this.postService.CreatePost(this.post)
        .subscribe(
          // response => console.log('response on new post: ' + JSON.stringify(response))
          response => { // Handle each observable response
            console.log('result: ' + JSON.stringify(response));
            this.newPostEmitter.emit(response);
            this.post = new BlogPost();
          },
          error => { // Error response code
            this.processing = false;
            this.failure = true;
          },
          () => { // Success response code
            this.processing = false;
            this.success = true;
            this.submitted = false;
          }
        );
    }
  }
}
