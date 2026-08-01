import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3597",
  "slug": "silly-tillys-thanksgiving-dinner",
  "url": "/reviews/silly-tillys-thanksgiving-dinner/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/11/22/silly-tillys-thanksgiving-dinner/",
  "title": "Silly Tilly’s Thanksgiving Dinner",
  "publishedAt": "2010-11-22",
  "publishedLabel": "November 22nd, 2010",
  "excerpt": "Silly Tilly is a sweet, and yes silly, mole who invites her friends over for Thanksgiving dinner. She inadvertently a) forgets to make the dinner; and b) gives them recipes instead of invitations. Thinking they’ve…",
  "image": {
    "src": "/media/2010/11/s-thanksgiving-dinner.jpg",
    "alt": "Silly Tilly’s Thanksgiving Dinner",
    "width": 210,
    "height": 326
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Holiday Books",
      "slug": "holiday-books",
      "url": "/topics/holiday-books/"
    },
    {
      "name": "Lillian Hoban",
      "slug": "lillian-hoban",
      "url": "/topics/lillian-hoban/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    },
    {
      "name": "Thanksgiving Books for Vegetarian Kids",
      "slug": "thanksgiving-books-for-vegetarian-kids",
      "url": "/topics/thanksgiving-books-for-vegetarian-kids/"
    },
    {
      "name": "Vegan Thanksgiving",
      "slug": "vegan-thanksgiving",
      "url": "/topics/vegan-thanksgiving/"
    },
    {
      "name": "Vegetarian Thanksgiving",
      "slug": "vegetarian-thanksgiving",
      "url": "/topics/vegetarian-thanksgiving/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "Silly Tilly is a sweet, and yes silly, mole who invites her friends over for Thanksgiving dinner. She inadvertently a) forgets to make the dinner; and b) gives them recipes instead of invitations. Thinking they’ve…",
    "image": "https://vegbooks.org/media/2010/11/s-thanksgiving-dinner.jpg"
  },
  "previous": {
    "title": "Over the River: A Turkey’s Tale",
    "url": "/reviews/over-the-river/"
  },
  "next": {
    "title": "Thanksgiving in the White House",
    "url": "/reviews/thanksgiving-in-the-white-house/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/11/s-thanksgiving-dinner.jpg"}><img src={"/media/2010/11/s-thanksgiving-dinner.jpg"} alt={"Silly Tilly’s Thanksgiving Dinner"} width={210} height={326} /></a>
      </figure>
      <p>{"Silly Tilly is a sweet, and yes silly, mole who invites her friends over for Thanksgiving dinner. She inadvertently a) forgets to make the dinner; and b) gives them recipes instead of invitations. Thinking they’ve been invited to a potluck, the friends converge on Tilly’s home with acorn jam, pine nut cake, cranberry stew, oat bran pudding, and a sweet potato pie."}</p>
      <p>{"Vegetarian and vegan kids will love when the turkey arrives late, exclaiming, “Don’t you know you can’t have Thanksgiving without Mr. Turkey?” and proceeds to take a seat at the table. The tale concludes with the friends popping the corn that the turkey has brought."}</p>
      <p>{"This "}<a href={"http://lookingglassreview.com/books/silly-tilly%E2%80%99s-thanksgiving-dinner"} target="_blank" rel="noopener noreferrer">{"early reader book"}</a>{" is a great pick for a vegetarian Thanksgiving."}</p>
      <p>{"Ages 5-7."}</p>
    </div>
  );
}
