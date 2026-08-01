import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6139",
  "slug": "miss-spiders-tea-party",
  "url": "/reviews/miss-spiders-tea-party/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/10/10/miss-spiders-tea-party/",
  "title": "Miss Spider’s Tea Party",
  "publishedAt": "2011-10-10",
  "publishedLabel": "October 10th, 2011",
  "excerpt": "Miss Spider wants to have a tea party. She sets a beautiful table and waits for someone to fly by. She invites ladybugs, ants, bees, and other insects that fly by, but none of them “would dare to share a tea with…",
  "image": {
    "src": "/media/2011/10/miss-spider-tea-party.jpg",
    "alt": "Miss Spider’s Tea Party",
    "width": 210,
    "height": 160
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
      "name": "David Kirk",
      "slug": "david-kirk",
      "url": "/topics/david-kirk/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Insects",
      "slug": "insects",
      "url": "/topics/insects/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Portrayal of Vegetarians in Books",
      "slug": "portrayal-of-vegetarians-in-books",
      "url": "/topics/portrayal-of-vegetarians-in-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Spiders",
      "slug": "spiders",
      "url": "/topics/spiders/"
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
    "description": "Miss Spider wants to have a tea party. She sets a beautiful table and waits for someone to fly by. She invites ladybugs, ants, bees, and other insects that fly by, but none of them “would dare to share a tea with…",
    "image": "https://vegbooks.org/media/2011/10/miss-spider-tea-party.jpg"
  },
  "previous": {
    "title": "A Home for Dakota",
    "url": "/reviews/a-home-for-dakota/"
  },
  "next": {
    "title": "Animal Aha!",
    "url": "/reviews/animal-aha/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/10/miss-spider-tea-party.jpg"}><img src={"/media/2011/10/miss-spider-tea-party.jpg"} alt={"Miss Spider’s Tea Party"} width={210} height={160} /></a>
      </figure>
      <p>{"Miss Spider wants to have a tea party. She sets a beautiful table and waits for someone to fly by. She invites ladybugs, ants, bees, and other insects that fly by, but none of them “would dare to share a tea with anyone so spidery.” None of the bugs will have tea with her because they are afraid she is going to eat them, but all she wants is to have a nice tea with friends. After she rescues a rain-drenched moth, unable to fly until he dries out, word spreads of Miss Spider’s friendly intentions. Eleven insects finally join Miss Spider for tea. “Her friends were glad to watch her feast upon the floral centerpiece. It was a great relief to see she ate just flowers and drank just tea.”"}</p>
      <p>{"Though it is never explicitly stated, Miss Spider is a vegetarian spider. We bought "}<a href={"http://www.amazon.com/gp/product/0439918170/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0439918170"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{" because my wife loves tea, but we were pleased to discover the strong vegetarian message. Written as a cute poem, the lyrical text holds the interest of even the youngest readers (my daughter received this a Halloween present when she was just one year old). The pictures are just beautiful (the colorful bugs, Miss Spider’s big sad eyes, the beautiful tea service). There is a counting element (one spider, two lady bugs) incorporated so well into the text that it almost goes unnoticed. It just adds another layer to this charming book. My daughter (now two) loves this book and so do I. It’s a joy to read and a joy to look at. I strongly recommend this book."}</p>
      <p>{"Ages 1 and up."}</p>
    </div>
  );
}
