export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  tag?: string;
  colors?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Velocity Pro Neon',
    category: "Men's Running",
    price: 24500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARoUb-hZJa9Lsfrg475A-waxKGnqW5iiFYogKGGfW1TuKaddkB96h-mpA9lV_J7-HLM2lp_wjiMIa-ti_Pbaobxfp1IMVxv8KeNUINSGuHzE1k9s7mdoMgWd3UwJe1pBGaSQJsYm48m17h1rVyDDCHCMk_myRKudf-9HxbvCYBK6gmADg2CTAH0zTqOFbgaJdtodsNvpiUBV07-MS6L4hZ1x1Zl7VO-l22ReUvTfbrPkQ2xNYJfqk99BM3a3M-_1wzzQ2KAMROtIAU',
    rating: 4.8,
    reviews: 128,
    tag: 'New Release',
    colors: ['#CCFF00', '#000000']
  },
  {
    id: '2',
    name: 'Crimson Street Elite',
    category: 'Unisex Lifestyle',
    price: 18900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnWHYRiR8pTrCfmMbNHl-wCC6uHgOhcWGVfoJWxTMIead-FG_ZlsrSWVklO7HNztj8O6A4M-HzuMqTPQ4dJbWIxvdxpiHAi5p1UURlgmtuBfygwjgD2tCu6JrBqDjsDt_5Ze0QD-UWK9LJgrW1O1i66wJmt7LRuCsmi-Rlz5SONVvykJ9jFBwTJ2OVu845BfNdGiFQiUi9oJX8rOqwvt7QGgnHV-BG7ivNTv45lKVY0WO0FE8MhjETKcrVoEIFZWGgT9a32W01SMvz',
    rating: 4.7,
    reviews: 95,
    tag: 'Limited',
    colors: ['#FF0000', '#FFFFFF']
  },
  {
    id: '3',
    name: 'Zenith Minimalist',
    category: "Women's Casual",
    price: 12500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxVUAk-d6UUkAW1v0w7GUVXVMyipym7HEQAbx5qbgb3FMBH-aMy6j89YnOYaReJQl0ltd0p1qCcjW8ELD9uul4_V-X1fVaBsd6s6fHDAG5YVBWgBX6mKsjy0Ild8fgjvGplJEhcQob7ihtvDvbSPqdj-Kmy3kuJKthlY2blacZT9E_qV8iJeKkFE1FnkTRIwB3J8n5InP_v6jqsulqlN4pMLBr9jh53srPmWvsnZF7m1-ODMdoFisSOkm-Vpo3ktBh6wJk3w3zmzyF',
    rating: 4.6,
    reviews: 210,
    tag: 'Trending',
    colors: ['#FFFFFF', '#000000']
  },
  {
    id: '4',
    name: 'Retro Pulse OG',
    category: 'Heritage Series',
    price: 16000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr4aiHZkFB3F716gEKqbq4bhvSlcQTuOVrIXLJwwKPT6KAx8qdS3zZdpNTvBKJBp4v60-kR0ax_pwlemZgaUBj83Bg7h9tfWIzKFn-_EF3qi0_kX4bTsZe8dT5D2qa3bw7sPuAejuRo8E0MamNlG76Lf0ML1MJ_O8O9_l6pebgjHkNfF5L1LBymFgWYCpKKbOnf5JCsNzoWj6zt3I0nFC9jFaQE6bK190_BKToV-BMkKp0m0_Av1V-Hz7mbKTuqUcedIbVaJr99ztn',
    rating: 4.8,
    reviews: 84,
    tag: 'New Arrival',
    colors: ['#F5F5DC', '#0000FF']
  },
  {
    id: '5',
    name: 'Solar Flare High-Top',
    category: 'Limited Edition Release',
    price: 32000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJQwjMgfr4sX-hXTuLTaXi9smprBxwlHm_xzdbjp3i4FCvRNIs-AgzzeAI-RFmr3gq4yBSDGXNiGTSEiDYAt_r6eG7uTUVTME1Lj9QMxvSLYyiE7z1GYcz_Z6Egt2GEhy0fI9ADcL1BuYEmN_KXkza_C7n4_hn5O0s4zzF0x-C5IYBVeS1yFElxConrd_sw4Y0CXWjn6r7XZV47VCY7qx5zDdiXXH0tjI0cKQVJYlge7bNipei5QkQFNYurct106NW3PxS-sQqVnBC',
    rating: 4.9,
    reviews: 56,
    tag: 'Limited',
    colors: ['#FFFF00', '#FFFFFF']
  },
  {
    id: '6',
    name: 'Dune Walker Suede',
    category: 'Artisan Collection',
    price: 28500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_d1MYPNFYHIQEWk34QOn-uJfNWacmvVnxxcTM4qHXeDcl9JY_fhfT0aggZz8PxXgSKx2vgeSyi0gCxJqyKccmJS5Tmal-VQ63ZxkxtsogoiuDoKmj2Dx2m43Uq2cHfKnxc19QPT4uc8MkEdgYxtiAP9AQldZ1qWMb_0tWoypjKw2d8_pEclSaFCf8KuvhkW8CW2K3I3rrNJkfuItmImcAOahvXlEahBsV7TljSKJjgCP6Wuqxn1wSszAF2PnAOelhMSltRK1DLlVc',
    rating: 4.7,
    reviews: 42,
    tag: 'Artisan',
    colors: ['#D2B48C']
  }
];
