import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonButton, IonRow, IonCol, IonSearchbar, IonRouterLink } from '@ionic/angular/standalone';
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Banner } from 'src/app/interfaces/banner.interface';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { ProductListHorizontalComponent } from 'src/app/components/product-list-horizontal/product-list-horizontal.component';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonCol, IonRow, IonButton, IonText, IonIcon, IonLabel, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonItem, IonRouterLink, ListHeadingComponent, BannerComponent, CategoriesComponent, ProductListHorizontalComponent]
})
export class HomePage implements OnInit {

  private bannerService: BannerService = inject(BannerService);
  private categoryService: CategoryService = inject(CategoryService);
  private productService: ProductService = inject(ProductService);

  banners = computed<Banner[]> (() => this.bannerService.getBanners());
  categories = computed<Category[]> (() => this.categoryService.getCategories())
  products = computed<Product[]> (() => this.productService.getProducts())

  constructor() { }

  ngOnInit() {
    
  }

}
