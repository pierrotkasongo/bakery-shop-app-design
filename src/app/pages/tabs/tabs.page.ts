import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons'
import { cart, chatboxEllipses, chevronDownOutline, heart, home, location, notifications, options, person } from 'ionicons/icons'
import { IonTabs, IonTabButton, IonIcon, IonLabel, IonTabBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonLabel, IonIcon, IonTabButton, IonTabs,  CommonModule, FormsModule]
})
export class TabsPage implements OnInit {

  constructor() { 
    addIcons({ home, location, heart, chatboxEllipses, person, chevronDownOutline, cart, notifications, options })
  }

  ngOnInit() {
    
  }

}
