import MenuComponent from './Menu';
import MenuItem from './MenuItem';
import MenuCollapse from './MenuCollapse';
import { IMenu, IMenuItem, IMenuCollpse } from './interfaces';

const Menu = Object.assign(MenuComponent, {
  Item: MenuItem,
  Collapse: MenuCollapse,
});

export default Menu;
export type { IMenu, IMenuCollpse, IMenuItem };
