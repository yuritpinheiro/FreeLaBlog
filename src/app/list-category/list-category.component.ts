import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryService} from '../service/category.service';
import {Category} from '../models/category';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  @Input() categories: Category[];
  @Output() editCategoryEmitter = new EventEmitter<Category>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  editCategory(category: Category) {
    this.editCategoryEmitter.emit(category);
  }

  deleteCategory(id: string) {
    this.categoryService.DeleteCategory(id)
      .subscribe(() => {
        this.categories = this.categories.filter(category => category.id !== id);
      });
  }
}
