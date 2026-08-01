import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2529",
  "slug": "flush",
  "url": "/reviews/flush/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/06/flush/",
  "title": "Flush",
  "publishedAt": "2010-07-06",
  "publishedLabel": "July 6th, 2010",
  "excerpt": "Carl Hiaasen is probably best known for his beach-worthy page turners, which combine the environmental ethics of Edward Abbey with the fluff of a novel you might pick up in an airport bookstore. Happily for…",
  "image": {
    "src": "/media/2010/07/978-0-375-84185-9.jpg",
    "alt": "Flush",
    "width": 195,
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
      "name": "Carl Hiaasen",
      "slug": "carl-hiaasen",
      "url": "/topics/carl-hiaasen/"
    },
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
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Fish",
      "slug": "fish",
      "url": "/topics/fish/"
    },
    {
      "name": "Fishing",
      "slug": "fishing",
      "url": "/topics/fishing/"
    },
    {
      "name": "Green Earth Book Award Winner",
      "slug": "green-earth-book-award-winner",
      "url": "/topics/green-earth-book-award-winner/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Pollution",
      "slug": "pollution",
      "url": "/topics/pollution/"
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
    "description": "Carl Hiaasen is probably best known for his beach-worthy page turners, which combine the environmental ethics of Edward Abbey with the fluff of a novel you might pick up in an airport bookstore. Happily for…",
    "image": "https://vegbooks.org/media/2010/07/978-0-375-84185-9.jpg"
  },
  "previous": {
    "title": "Whose Garden Is It?",
    "url": "/reviews/whose-garden-is-it/"
  },
  "next": {
    "title": "Deep in the Jungle",
    "url": "/reviews/deep-in-the-jungle/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/978-0-375-84185-9.jpg"}><img src={"/media/2010/07/978-0-375-84185-9.jpg"} alt={"Flush"} width={195} height={300} /></a>
      </figure>
      <p>{"Carl Hiaasen is probably best known for his beach-worthy page turners, which combine the environmental ethics of "}<a href={"http://en.wikipedia.org/wiki/The_Monkey_Wrench_Gang"} target="_blank" rel="noopener noreferrer">{"Edward Abbey"}</a>{" with the fluff of a novel you might pick up in an airport bookstore. Happily for eco-minded kids, in recent years Mr. Hiaasen began writing "}<a href={"http://www.carlhiaasen.com/young.html"} target="_blank" rel="noopener noreferrer">{"novels for the older elementary crowd"}</a>{", including the controversial novel "}<em><a href={"http://www.commonsensemedia.org/book-reviews/hoot"} target="_blank" rel="noopener noreferrer">{"Hoot"}</a></em>{" that inspired the allegedly “eco-terrorist” movie of the same name."}</p>
      <p>{"His most recent kids book, "}<em>{"Flush"}</em>{", involves similar "}<a href={"http://www.greenisthenewred.com/blog/"} target="_blank" rel="noopener noreferrer">{"acts of civil disobedience in defense of the environment"}</a>{". When the Underwood family learns that a casino boat is literally flushing its holding tank into the waters of the Florida Keys, and that law enforcement is reluctant to do anything about it, they’re forced to take matters into their own hands. In the end, the family’s actions, together with the bad guys’ carelessness, combine to bring the pollution to an end."}</p>
      <p>{"Vegetarian parents should be aware that while Mr. Hiaasen writes beautifully in support of the rights of nature and against animal abuse, fishing is portrayed in a positive light."}</p>
      <p>{"Ages 8-12."}</p>
    </div>
  );
}
