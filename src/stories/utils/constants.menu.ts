import { IconSearch, ArrowDownIcon, IconX } from '../assets/svg';

export const MENU_DATA_DUMMY = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: IconSearch,
    active: true,
  },
  {
    title: 'Escuela',
    url: '/profile/school',
    icon: ArrowDownIcon,
    active: false,
  },
  {
    title: 'Usuarios',
    url: '/user',
    icon: IconX,
    active: false,
  },
  {
    title: 'Estudiantes',
    url: '/student',
    icon: IconSearch,
    active: false,
  },
  {
    title: 'Grupos',
    url: '/group',
    icon: IconX,
    active: false,
  },
];
