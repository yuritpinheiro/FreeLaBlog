import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../models/comment';

@Component({
  selector: 'app-preview-comment',
  templateUrl: './preview-comment.component.html',
  styleUrls: ['./preview-comment.component.css']
})
export class PreviewCommentComponent implements OnInit {
  @Input() comment: Comment;
  @Input() last: boolean;

  constructor() { }

  ngOnInit() {
  }

}
