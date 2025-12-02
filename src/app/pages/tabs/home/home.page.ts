import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonButton, IonRow, IonCol, IonSearchbar, IonRouterLink } from '@ionic/angular/standalone';
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonCol, IonRow, IonButton, IonText, IonIcon, IonLabel, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonItem, IonRouterLink, ListHeadingComponent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
