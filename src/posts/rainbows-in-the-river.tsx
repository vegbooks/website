import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1479",
  "slug": "rainbows-in-the-river",
  "url": "/reviews/rainbows-in-the-river/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/06/rainbows-in-the-river/",
  "title": "Rainbows in the River",
  "publishedAt": "2010-05-06",
  "publishedLabel": "May 6th, 2010",
  "excerpt": "Rainbows in the River is a new book by Nick and Maggie Russell which focuses on environmental pollution. The story takes place outdoors in Ireland and tells the story of a young man, Fergal, who has a love for…",
  "image": {
    "src": "/media/2010/05/nick-russell-robertson-bogdoddies1-1.jpg",
    "alt": "Rainbows in the River",
    "width": 204,
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
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Ireland",
      "slug": "ireland",
      "url": "/topics/ireland/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Maggie Russell",
      "slug": "maggie-russell",
      "url": "/topics/maggie-russell/"
    },
    {
      "name": "Nick Russell",
      "slug": "nick-russell",
      "url": "/topics/nick-russell/"
    },
    {
      "name": "Pollution",
      "slug": "pollution",
      "url": "/topics/pollution/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "Rainbows in the River is a new book by Nick and Maggie Russell which focuses on environmental pollution. The story takes place outdoors in Ireland and tells the story of a young man, Fergal, who has a love for…",
    "image": "https://vegbooks.org/media/2010/05/nick-russell-robertson-bogdoddies1-1.jpg"
  },
  "previous": {
    "title": "The Chicken Gave It to Me",
    "url": "/reviews/the-chicken-gave-it-to-me/"
  },
  "next": {
    "title": "Just Like Mama",
    "url": "/reviews/just-like-mama/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/nick-russell-robertson-bogdoddies1-1.jpg"}><img src={"/media/2010/05/nick-russell-robertson-bogdoddies1-1.jpg"} alt={"Rainbows in the River"} width={204} height={300} /></a>
      </figure>
      <p><em>{"Rainbows in the River"}</em>{" is a new book by Nick and Maggie Russell which focuses on environmental pollution. The story takes place outdoors in Ireland and tells the story of a young man, Fergal, who has a love for animals and nature."}</p>
      <p>{"Fergal often finds himself helping animals. As the story goes along, he finds there are rainbows in the river which are impacting the animals and environment. He investigates to find the source of the rainbows, which he discovered are caused by oil contamination from a milling business. Being brave, he confronts the "}<a href={"http://www.edf.org/page.cfm?tagID=56"} target="_blank" rel="noopener noreferrer">{"business owner"}</a>{" and even helps him to put an end to the leak that is causing the environmental damage."}</p>
      <p>{"This is an interesting story that shows one person’s compassion for animals and care for the planet. Vegetarian and vegan parents may want to know that there is one reference that says the "}<a href={"http://www.veganpeace.com/animal_cruelty/donkeys.htm"} target="_blank" rel="noopener noreferrer">{"donkey pulled the tinker caravan"}</a>{" everywhere and was always “…strong, sturdy and as dependable as the seasons.” Additionally, there are activities included that contain non-vegan recipes, although they may be able to be easily veganized."}</p>
      <p>{"Ages 5-8."}</p>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=095651510X"} alt={""} width={1} height={1} />
      </figure>
      <p>{"NOTE: The book will soon be available on "}<a href={"http://www.amazon.com/gp/product/095651510X?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=095651510X"} target="_blank" rel="noopener noreferrer">{"Amazon.com"}</a>{", but in the meanwhile, to order a copy, email "}<a href={"mailto:bogdoddies@gmail.com"} target="_blank" rel="noopener noreferrer">{"bogdoddies@gmail.com"}</a>{"."}</p>
    </div>
  );
}
