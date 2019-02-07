import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../models/comment';
import {CommentService} from '../service/comment.service';
import * as moment from 'moment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() postId: string;
  @Output() commented = new EventEmitter<Comment>();
  comment: Comment;

  public processing = false;
  public submitted = false;
  public success = false;
  public failure = false;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.comment = new Comment();
  }

  submit() {
    this.processing = this.submitted = true;

    console.log('submitting blog post: ' + JSON.stringify(this.comment));
    this.comment.postId = this.postId;
    this.comment.commentDatetime = moment().format('YYYY-MM-DD HH:MM:SS');
    this.commentService.CreateComment(this.comment)
      .subscribe(
        // response => console.log('response on new post: ' + JSON.stringify(response))
        response => { // Handle each observable response
          console.log('result: ' + response);
          this.processing = false;
        },
        error => { // Error response code
          this.processing = false;
          this.failure = true;
        },
        () => { // Success response code
          this.processing = false;
          this.success = true;
          this.submitted = false;
          this.commented.emit(this.comment);
          this.comment = new Comment();
        }
      );
  }

}
