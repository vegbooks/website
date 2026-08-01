import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2150",
  "slug": "sallys-great-balloon-adventure",
  "url": "/reviews/sallys-great-balloon-adventure/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/28/sallys-great-balloon-adventure/",
  "title": "Sally’s Great Balloon Adventure",
  "publishedAt": "2010-06-28",
  "publishedLabel": "June 28th, 2010",
  "excerpt": "This beautifully illustrated book by Stephen Huneck follows Sally the black dog as she accidentally embarks on a hot air balloon adventure. It’s hard not to fall in love with Mr. Huneck’s technique, which he…",
  "image": {
    "src": "/media/2010/06/s-gba.jpg",
    "alt": "Sally’s Great Balloon Adventure",
    "width": 269,
    "height": 358
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
      "name": "Adventure",
      "slug": "adventure",
      "url": "/topics/adventure/"
    },
    {
      "name": "Bravery",
      "slug": "bravery",
      "url": "/topics/bravery/"
    },
    {
      "name": "Depictions of Meat in Books",
      "slug": "depictions-of-meat-in-books",
      "url": "/topics/depictions-of-meat-in-books/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Stephen Huneck",
      "slug": "stephen-huneck",
      "url": "/topics/stephen-huneck/"
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
    "description": "This beautifully illustrated book by Stephen Huneck follows Sally the black dog as she accidentally embarks on a hot air balloon adventure. It’s hard not to fall in love with Mr. Huneck’s technique, which he…",
    "image": "https://vegbooks.org/media/2010/06/s-gba.jpg"
  },
  "previous": {
    "title": "Marsupial Sue Presents The Runaway Pancake",
    "url": "/reviews/marsupial-sue-presents-the-runaway-pancake/"
  },
  "next": {
    "title": "I Got Two Dogs",
    "url": "/reviews/i-got-two-dogs/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/s-gba.jpg"}><img src={"/media/2010/06/s-gba.jpg"} alt={"Sally’s Great Balloon Adventure"} width={269} height={358} /></a>
      </figure>
      <p>{"This beautifully illustrated book by "}<a href={"http://www.dogmt.com/"} target="_blank" rel="noopener noreferrer">{"Stephen Huneck"}</a>{" follows Sally the black dog as she accidentally embarks on a hot air balloon adventure. It’s hard not to fall in love with Mr. Huneck’s technique, which he describes in detail at the end of the book. Kids will also love Sally’s unflappable demeanor in a situation that might be alarming to some."}</p>
      <p>{"Veg kids, parents, and "}<a href={"http://www.vegsoc.org/teachers.html"}>{"teachers"}</a>{" will cheer when the whole world comes together to rescue Sally — and an ingenious little girl finally does. Still, while the dog’s fascination with the contents of the balloon gondola is certainly understandable, some veg kids may feel uncomfortable that fried chicken figures so heavily into the plot, especially if their own dog is "}<a href={"http://www.vegandogslife.com/"} target="_blank" rel="noopener noreferrer">{"vegetarian"}</a>{"."}</p>
      <p>{"Ages 3-7."}</p>
    </div>
  );
}
