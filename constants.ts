
import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'La Maison', href: '#histoire' },
  { label: 'Créations', href: '#menu' },
  { label: 'Click & Collect', href: '#services' },
  { label: 'Commander', href: '#commander' },
];

export const BENTO_CAKES: Product[] = [
  {
    id: 'cake-iconic',
    name: 'Iconic',
    description: 'Blanc lissé, intemporel. Génoise légère, vanille & fruits de saison ou chocolat praliné.',
    price: 'Sur Devis',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000&auto=format&fit=crop',
    category: 'Bento Cakes'
  },
  {
    id: 'cake-elegant',
    name: 'Elegant',
    description: 'Rond ou cœur, décor poché. Couleur au choix. Finition premium.',
    price: 'Sur Devis',
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1000&auto=format&fit=crop',
    category: 'Bento Cakes'
  },
  {
    id: 'cake-signature',
    name: 'Signature - Création du mois',
    description: 'Recette premium en édition limitée. Couverture "Couleur Dune", finition soignée.',
    price: 'Sur Devis',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000&auto=format&fit=crop',
    category: 'Bento Cakes'
  }
];

export const SALES_MAISON: Product[] = [
  {
    id: 'sale-avocado',
    name: 'Tartine Avocado',
    description: 'Pain de campagne, cream cheese, avocat, oeuf poché, graines de courge.',
    price: '65 MAD',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000&auto=format&fit=crop',
    category: 'Les Salés'
  },
  {
    id: 'sale-croissant',
    name: 'Croissant Smash Mozza',
    description: 'Croissant garni et toasté, pesto verde, mozzarella, tomates confites, zaatar.',
    price: '55 MAD',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    category: 'Les Salés'
  },
  {
    id: 'sale-grilled-cheese',
    name: 'Grilled Cheese Truffle',
    description: 'Pain de campagne, crème truffe signature, mozzarella, oignons caramélisés.',
    price: '75 MAD',
    image: 'https://images.unsplash.com/photo-1528733918455-5a59687cedf0?q=80&w=1000&auto=format&fit=crop',
    category: 'Les Salés'
  }
];

export const PRODUCTS = [...BENTO_CAKES, ...SALES_MAISON];
