import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2457",
  "slug": "our-farm",
  "url": "/reviews/our-farm/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/30/our-farm/",
  "title": "Our Farm",
  "publishedAt": "2010-06-30",
  "publishedLabel": "June 30th, 2010",
  "excerpt": "Farm animals are nothing short of magnificent. Seemingly, they’re more esoteric than our household companion animals, but friendlier and more approachable than say wildlife from the African savannah. Perhaps that’s…",
  "image": {
    "src": "/media/2010/06/978-0-375-86118-5.jpg",
    "alt": "Our Farm",
    "width": 209,
    "height": 270
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Coffee Table Books",
      "slug": "coffee-table-books",
      "url": "/topics/coffee-table-books/"
    },
    {
      "name": "Cows",
      "slug": "cows",
      "url": "/topics/cows/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Goats",
      "slug": "goats",
      "url": "/topics/goats/"
    },
    {
      "name": "Maya Gottfried",
      "slug": "maya-gottfried",
      "url": "/topics/maya-gottfried/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Poetry",
      "slug": "poetry",
      "url": "/topics/poetry/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Turkeys",
      "slug": "turkeys",
      "url": "/topics/turkeys/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "Farm animals are nothing short of magnificent. Seemingly, they’re more esoteric than our household companion animals, but friendlier and more approachable than say wildlife from the African savannah. Perhaps that’s…",
    "image": "https://vegbooks.org/media/2010/06/978-0-375-86118-5.jpg"
  },
  "previous": {
    "title": "I Got Two Dogs",
    "url": "/reviews/i-got-two-dogs/"
  },
  "next": {
    "title": "The Little Mermaid (1989)",
    "url": "/reviews/the-little-mermaid/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/978-0-375-86118-5.jpg"}><img src={"/media/2010/06/978-0-375-86118-5.jpg"} alt={"Our Farm"} width={209} height={270} /></a>
      </figure>
      <p>{"Farm animals are nothing short of magnificent. Seemingly, they’re more esoteric than our household companion animals, but friendlier and more approachable than say wildlife from the African savannah. Perhaps that’s why we are so enchanted with them. They’re a bit foreign to us city-dwellers, yet at the same time we grew up with them- their faces dotting our picture books, plush toys and favorite TV shows."}</p>
      <p>{"Enlightening "}<a href={"http://www.farmsanctuary.org/"} target="_blank" rel="noopener noreferrer">{"Farm Sanctuary"}</a>{" visitors to the dynamic personalities of these loveable animals was my absolute favorite thing to do while I was working at the California Shelter. (I still blab about their fascinating lives to anyone who will listen, in hopes of making them think twice about eating my farm animal friends). Goats relish a good scratch between the horns. Perky porcines will flop over in an instant for a satisfying belly rub. But beyond these traits you’ll find in most well-treated farm animals, Maya Gottfried has captured the exceptional natures of a handful of sanctuary residents. You’ll meet Maya, also known as “Grandmama Moo,” who ensures that newly arrived bovine orphans find their way in the herd and pastures. Mayfly rooster, in his very protective poem about his hens, declares “A true rooster knows: it is always ladies first,” when it comes to dust baths and feeding. The Turkey Girl flock likens themselves to a ballet class, with such fluid, graceful moves in the green grasslands."}</p>
      <p>{"This publication is a must have in every animal lover’s library. And like Ms. Gottfried’s other work, "}<a href={"/reviews/good-dog/"}><em>{"Good Dog"}</em></a>{", this one also makes a fine coffee table addition!"}</p>
      <p>{"Ages: All!"}</p>
    </div>
  );
}
