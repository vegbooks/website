import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8233",
  "slug": "rickie-and-henri",
  "url": "/reviews/rickie-and-henri/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/10/06/rickie-and-henri/",
  "title": "Rickie and Henri",
  "publishedAt": "2012-10-06",
  "publishedLabel": "October 6th, 2012",
  "excerpt": "A book about interspecies friendship? Written by Jane Goodall, hero for animals and founder of Roots and Shoots? AND illustrated by Alan Marks? Imagine my excitement when I found this title at my local library! Based…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Rickie and Henri",
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
      "name": "Africa",
      "slug": "africa",
      "url": "/topics/africa/"
    },
    {
      "name": "Alan Marks",
      "slug": "alan-marks",
      "url": "/topics/alan-marks/"
    },
    {
      "name": "Captive Wildlife",
      "slug": "captive-wildlife",
      "url": "/topics/captive-wildlife/"
    },
    {
      "name": "Chimpanzees",
      "slug": "chimpanzees",
      "url": "/topics/chimpanzees/"
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
      "name": "Interspecies Friendship",
      "slug": "interspecies-friendship",
      "url": "/topics/interspecies-friendship/"
    },
    {
      "name": "Jane Goodall",
      "slug": "jane-goodall",
      "url": "/topics/jane-goodall/"
    },
    {
      "name": "Pet Trade",
      "slug": "pet-trade",
      "url": "/topics/pet-trade/"
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
    "description": "A book about interspecies friendship? Written by Jane Goodall, hero for animals and founder of Roots and Shoots? AND illustrated by Alan Marks? Imagine my excitement when I found this title at my local library! Based…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Nature’s Patchwork Quilt",
    "url": "/reviews/natures-patchwork-quilt/"
  },
  "next": {
    "title": "Love You When",
    "url": "/reviews/love-you-when/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"Rickie and Henri"} width={210} height={139} /></a>
      </figure>
      <p>{"A book about interspecies friendship? Written by Jane Goodall, hero for animals and founder of "}<a href={"http://www.rootsandshoots.org/"} target="_blank" rel="noopener noreferrer">{"Roots and Shoots"}</a>{"? AND illustrated by "}<a href={"http://www.goodreads.com/author/list/188645.Alan_Marks"} target="_blank" rel="noopener noreferrer">{"Alan Marks"}</a>{"? Imagine my excitement when I found this title at my local library!"}</p>
      <p>{"Based on a true story, this book is geared to kids a little older than most picture books. After depicting the love between an infant chimpanzee and her mother, "}<em>{"Rickie and Henri"}</em>{" dives into a very serious subject: wildlife trade."}</p>
      <p>{"A gunshot rings through the forest. Rickie’s mother is dead or mortally injured, and the small chimpanzee is torn from her side and then dragged, wounded and grieving, through the forest by poachers intent on selling her at the market. Fortunately, a kind man confronts the poachers about their actions, and they run away, leaving him to raise Rickie himself. It is at his home, while he is away on a business trip, that Rickie befriends Henri, a dog, and the two become fast friends."}</p>
      <p>{"In the end, Rickie must go to a chimpanzee sanctuary so that she can be with others of her kind. Henri is upset, but soon has a canine companion by his side."}</p>
      <p>{"The book ends with a note from Jane Goodall about the chimpanzee sanctuaries she has established, and a frank discussion of her desire to return these highly intelligent and social animals to the wild and the obstacles she faces."}</p>
      <p>{"With depictions of violence and death, and fairly dense text, this picture book is best for kids ages 6 to 8. You can view the full book "}<a href={"http://www.minedition.com/en/book/73/"} target="_blank" rel="noopener noreferrer">{"online"}</a>{"."}</p>
    </div>
  );
}
