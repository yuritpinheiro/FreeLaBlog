import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../models/category';
import {CategoryService} from '../service/category.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {
  @Output() newCategoryEmitter = new EventEmitter<Category>();
  @Input() category: Category;

  constructor(private categoryService: CategoryService) { }

  public processing = false;
  public submitted = false;
  public success = false;
  public failure = false;

  ngOnInit() {
    // this.category = new Category();
  }

  submit() {
    this.processing = this.submitted = true;
    this.submitted = this.failure = false;

    console.log('submitting blog post: ' + JSON.stringify(this.category));
    if (this.category.id && parseInt(this.category.id, 10) > 0) {
      this.categoryService.UpdateCategory(this.category)
        .subscribe(
          // response => console.log('response on new post: ' + JSON.stringify(response))
          response => { // Handle each observable response
            console.log('result: ' + JSON.stringify(response));
            this.newCategoryEmitter.emit(response);
            this.category = new Category();
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
      this.categoryService.CreateCategory(this.category)
        .subscribe(
          // response => console.log('response on new post: ' + JSON.stringify(response))
          response => { // Handle each observable response
            console.log('result: ' + JSON.stringify(response));
            this.newCategoryEmitter.emit(response);
            this.category = new Category();
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
