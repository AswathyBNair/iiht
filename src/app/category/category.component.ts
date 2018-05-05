import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 words2 = [ ];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }
add(title) {
    this.words2.push({value: title});


    this.categoryService.addCategory(title);





    alert(title);
    //call service
  }
}
