import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'users',
        short_label: 'u',
        name: 'Users management',
        type: 'link',
        icon: 'ti-user',
        
      },
      {
        state: 'address',
        short_label: 'A',
        name: 'Addresses management',
        type: 'link',
        icon: 'ti-map-alt ',
        
      },
      {
        state: 'order',
        short_label: 'O',
        name: 'Orders Management',
        type: 'link',
        icon: 'ti-shopping-cart '
      }
    ],
  },

  
 
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
