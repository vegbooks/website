import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1758",
  "slug": "duck-on-a-bike",
  "url": "/reviews/duck-on-a-bike/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/10/duck-on-a-bike/",
  "title": "Duck on a Bike",
  "publishedAt": "2010-05-10",
  "publishedLabel": "May 10th, 2010",
  "excerpt": "As Duck demonstrates his bicycle riding skills to each of the other animals, we hear their critical opinions of a duck riding a bike. Then an opportunity arises that gives all the other animals access to wheels as…",
  "image": {
    "src": "/media/2010/05/duck-on-a-bike-cover.jpg",
    "alt": "Duck on a Bike",
    "width": 215,
    "height": 277
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
      "name": "David Shannon",
      "slug": "david-shannon",
      "url": "/topics/david-shannon/"
    },
    {
      "name": "Ducks",
      "slug": "ducks",
      "url": "/topics/ducks/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fear",
      "slug": "fear",
      "url": "/topics/fear/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Imagination",
      "slug": "imagination",
      "url": "/topics/imagination/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "As Duck demonstrates his bicycle riding skills to each of the other animals, we hear their critical opinions of a duck riding a bike. Then an opportunity arises that gives all the other animals access to wheels as…",
    "image": "https://vegbooks.org/media/2010/05/duck-on-a-bike-cover.jpg"
  },
  "previous": {
    "title": "Just Like Mama",
    "url": "/reviews/just-like-mama/"
  },
  "next": {
    "title": "Big Bear Hug",
    "url": "/reviews/big-bear-hug/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/duck-on-a-bike-cover.jpg"}><img src={"/media/2010/05/duck-on-a-bike-cover.jpg"} alt={"Duck on a Bike"} width={215} height={277} /></a>
      </figure>
      <p>{"As Duck demonstrates his bicycle riding skills to each of the other animals, we hear their critical opinions of a duck riding a bike. Then an opportunity arises that gives all the other animals access to wheels as well and none can resist!"}</p>
      <p>{"Just thinking of a duck (or any other animal) on a bike is funny and David Shannon adds hilarious illustrations that tell as much of the story as the words do. "}<a href={"http://www.spaghettibookclub.org/title.php?grade=&title=Duck%20on%20a%20Bike"} target="_blank" rel="noopener noreferrer">{"This humorous tale"}</a>{" is entertaining but also keeps that sparkle alive that animals can do anything we can do (ever see "}<a href={"http://video.google.com/videoplay?docid=-3690837501045591479#"} target="_blank" rel="noopener noreferrer">{"that video of the dog riding a bike"}</a>{" or "}<a href={"http://www.skateboardingbulldog.com/"} target="_blank" rel="noopener noreferrer">{"Tyson, the skateboarding bulldog"}</a>{"?) and anything is possible. I also like the subtle message regarding negativity and how it may be rooted in envy or jealousy. Giving the other animals the same opportunity erases the negativity. Duck is a leader and a risk-taker and makes a funny but fine feathered hero."}</p>
      <p>{"My daughter and I have read this one numerous times and it never gets old."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
