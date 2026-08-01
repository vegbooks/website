import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9422",
  "slug": "view",
  "url": "/reviews/view/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/01/01/view/",
  "title": "View from a Zoo",
  "publishedAt": "2014-01-01",
  "publishedLabel": "January 1st, 2014",
  "excerpt": "I received this book as a review copy from the author. It is the story of a house cat that has a nice cushy life in a warm, comfy house. But she gets bored staring out the window at the world – she wants to…",
  "image": {
    "src": "/media/2013/12/vfaz-cover.jpg",
    "alt": "View from a Zoo",
    "width": 210,
    "height": 266
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
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Artie Knapp",
      "slug": "artie-knapp",
      "url": "/topics/artie-knapp/"
    },
    {
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Lions",
      "slug": "lions",
      "url": "/topics/lions/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sunayana Nair Kanjilal",
      "slug": "sunayana-nair-kanjilal",
      "url": "/topics/sunayana-nair-kanjilal/"
    },
    {
      "name": "Zoos",
      "slug": "zoos",
      "url": "/topics/zoos/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "I received this book as a review copy from the author. It is the story of a house cat that has a nice cushy life in a warm, comfy house. But she gets bored staring out the window at the world – she wants to…",
    "image": "https://vegbooks.org/media/2013/12/vfaz-cover.jpg"
  },
  "previous": {
    "title": "The Dirty Socks Come Clean",
    "url": "/reviews/the-dirty-socks-come-clean/"
  },
  "next": {
    "title": "Patty’s Secret",
    "url": "/reviews/pattys-secret/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/view/"}><img src={"/media/2013/12/vfaz-cover.jpg"} alt={"View from a Zoo"} width={210} height={266} /></a>
      </figure>
      <p>{"I received this book as a review copy from "}<a href={"http://viewfromazoo.wordpress.com/"} target="_blank" rel="noopener noreferrer">{"the author"}</a>{". It is the story of a house cat that has a nice cushy life in a warm, comfy house. But she gets bored staring out the window at the world – she wants to experience the world. After sneaking out of the house and roaming the streets, she finds her way to the zoo. A lion trapped in a cage shares with her his secret to enduring the boredom. It is a nice educational and inspirational twist that I won’t spoil should you decide to read the book ("}<a href={"http://www.amazon.com/gp/product/1931308004/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1931308004&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{")."}</p>
      <p>{"The lion in the zoo is quite content. He mentions that he is bored and he has a trick to get past the boredom that actual lions in real zoos do not. This is a good conversation starter for what it must be like to be a lion in a zoo with nowhere to go and nothing new to experience. Just the same small cage day in and day out. It may also start a conversation about how bored house cats must be as well, which might be a more difficult conversation if you have an indoor house cat."}</p>
      <p>{"Ages 3-8."}</p>
    </div>
  );
}
