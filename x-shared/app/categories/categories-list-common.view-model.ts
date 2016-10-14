import { CategoryService } from './category.service';
import { Subject } from 'rxjs/Subject';

export class CategoriesListCommonVM {

  lstCategories: any[] = [];

  categories$: Subject<any[]> = new Subject<any[]>();

  constructor(protected categoryService: CategoryService) {

  }

  loadCategoriesList() {
    this.categoryService.get().then((lstCategories) => {
      this.lstCategories.length = 0;
      Array.prototype.push.apply(this.lstCategories, lstCategories);
      this.categories$.next(this.lstCategories);
    });
    return this.categories$;
  }
}