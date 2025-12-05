import { Component, input, OnInit } from '@angular/core';
import { Strings } from 'src/app/enums/strings.enum';
import { Product } from 'src/app/interfaces/product.interface';
import { IonCard, IonImg, IonThumbnail, IonItem, IonLabel, IonText, IonIcon } from "@ionic/angular/standalone";
import { VegNonvegIndicatorComponent } from "src/app/widgets/veg-nonveg-indicator/veg-nonveg-indicator/veg-nonveg-indicator.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [IonIcon, IonText, IonLabel, IonItem, IonImg, IonCard, IonThumbnail, VegNonvegIndicatorComponent],
})
export class ProductComponent  implements OnInit {

  item = input<Product>();
  currency = Strings.currency
  constructor() { }

  ngOnInit() {}

}
