import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3554",
  "slug": "princess-pigsty",
  "url": "/reviews/princess-pigsty/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/11/26/princess-pigsty/",
  "title": "Princess Pigsty",
  "publishedAt": "2010-11-26",
  "publishedLabel": "November 26th, 2010",
  "excerpt": "Joining Princess Smartypants and Do Princesses Wear Hiking Books? in the growing genre of anti-/ alterna-princess lit is the English translation of the German book Princess Pigsty. Fiesty and funny, Cornelia Funke’s…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Princess Pigsty",
    "width": 210,
    "height": 139
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
      "name": "animal intelligence",
      "slug": "animal-intelligence",
      "url": "/topics/animal-intelligence/"
    },
    {
      "name": "Cornelia Funke",
      "slug": "cornelia-funke",
      "url": "/topics/cornelia-funke/"
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
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Princess",
      "slug": "princess",
      "url": "/topics/princess/"
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
    "description": "Joining Princess Smartypants and Do Princesses Wear Hiking Books? in the growing genre of anti-/ alterna-princess lit is the English translation of the German book Princess Pigsty. Fiesty and funny, Cornelia Funke’s…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Animals Get Scared Too, Just Like You!",
    "url": "/reviews/animals-get-scared-too-just-like-you/"
  },
  "next": {
    "title": "Top Holiday Picks 2010",
    "url": "/reviews/top-holiday-picks-2010/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Princess Pigsty"} width={210} height={139} /></a>
      </figure>
      <p>{"Joining "}<em><a href={"/reviews/princess-smartypants/"}>{"Princess Smartypants"}</a></em>{" and "}<a href={"/reviews/do-princesses-wear-hiking-boots/"}><em>{"Do Princesses Wear Hiking Books?"}</em></a>{" in the growing genre of anti-/ alterna-princess lit is the English translation of the German book "}<em>{"Princess Pigsty"}</em>{". Fiesty and funny, Cornelia Funke’s picture book even struck a chord with my daughter who genuinely "}<em>{"adores"}</em>{" princesses."}</p>
      <p>{"Families willing to put up with the fact that the heroine of the book, Isabella, cheerfully helps out in the kitchen by plucking pheasants, will delight in the fact that Isabella thoughtfully suggests to her father the king that "}<a href={"http://www.nytimes.com/2009/11/10/science/10angier.html"} target="_blank" rel="noopener noreferrer">{"pigs are smart"}</a>{" and perhaps we should not eat them. Veg parents will also appreciate that the story ends by recounting that the young princess sometimes returns to the barn to sleep among the pigs."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
