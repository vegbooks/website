import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1866",
  "slug": "christian-the-lion",
  "url": "/reviews/christian-the-lion/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/05/christian-the-lion/",
  "title": "Christian the Lion",
  "publishedAt": "2010-06-05",
  "publishedLabel": "June 5th, 2010",
  "excerpt": "Undoubtedly you’ve seen the famous photos and YouTube video of long lost friends Anthony and John and their lion, Christian, reuniting and hugging in the African panorama to everyone’s surprise and joy (at the fact…",
  "image": {
    "src": "/media/2010/05/978-0-385-73856-9.jpg",
    "alt": "Christian the Lion",
    "width": 193,
    "height": 300
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
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Anthony Bourke",
      "slug": "anthony-bourke",
      "url": "/topics/anthony-bourke/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
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
      "name": "John Rendall",
      "slug": "john-rendall",
      "url": "/topics/john-rendall/"
    },
    {
      "name": "Lions",
      "slug": "lions",
      "url": "/topics/lions/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
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
    "description": "Undoubtedly you’ve seen the famous photos and YouTube video of long lost friends Anthony and John and their lion, Christian, reuniting and hugging in the African panorama to everyone’s surprise and joy (at the fact…",
    "image": "https://vegbooks.org/media/2010/05/978-0-385-73856-9.jpg"
  },
  "previous": {
    "title": "An Adventure with Billy Bunny",
    "url": "/reviews/an-adventure-with-billy-bunny/"
  },
  "next": {
    "title": "Trouble at the Dinosaur Cafe",
    "url": "/reviews/trouble-at-the-dinosaur-cafe/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/978-0-385-73856-9.jpg"}><img src={"/media/2010/05/978-0-385-73856-9.jpg"} alt={"Christian the Lion"} width={193} height={300} /></a>
      </figure>
      <p>{"Undoubtedly you’ve seen the famous photos and "}<a href={"http://www.youtube.com/watch?v=btuxO-C2IzE"} target="_blank" rel="noopener noreferrer">{"YouTube video"}</a>{" of long lost friends Anthony and John and their lion, Christian, reuniting and hugging in the African panorama to everyone’s surprise and joy (at the fact that Christian remembered the two after having been separated for some time). As a cub, Christian lived in a department store in the heart of London and was rescued by these two humans."}</p>
      <p>{"This children’s picture book serves as a scrapbook, memorializing Christian’s life in the store, the boys’ apartment, his trips around England (visits to radio studios, car rides) and his transition to better accommodations: a halfway house of sorts in England and finally a sanctuary in Africa. These last two locations were initiatives organized by Bill and Virginia Travers of the movie "}<a href={"http://www.bornfreeusa.org/d7_born_free_history.php"} target="_blank" rel="noopener noreferrer">{"“Born Free”"}</a>{" (a must see for any animal advocate)."}</p>
      <p>{"The book is cute enough and it does go to show young ones how strange (and ultimately wrong) it is to keep a wild animal in a domesticated setting. Of course, it also has its drawbacks. For one, Christian is overly anthropomorphized. Two, the authors call Africa a country. Worth checking out of the library though."}</p>
      <p>{"Ages 5-12."}</p>
    </div>
  );
}
