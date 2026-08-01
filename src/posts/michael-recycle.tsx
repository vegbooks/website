import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3088",
  "slug": "michael-recycle",
  "url": "/reviews/michael-recycle/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/21/michael-recycle/",
  "title": "Michael Recycle",
  "publishedAt": "2010-09-21",
  "publishedLabel": "September 21st, 2010",
  "excerpt": "“…And then something happened that none could explain. It wasn’t a bird and it wasn’t a plane. A green-caped crusader soared through the air, with a colander hat on top of his hair.” As so we’re introduced to the…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Michael Recycle",
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
      "name": "Alexandra Colombo",
      "slug": "alexandra-colombo",
      "url": "/topics/alexandra-colombo/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Ellie Bethel",
      "slug": "ellie-bethel",
      "url": "/topics/ellie-bethel/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Litter",
      "slug": "litter",
      "url": "/topics/litter/"
    },
    {
      "name": "Pollution",
      "slug": "pollution",
      "url": "/topics/pollution/"
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
    "description": "“…And then something happened that none could explain. It wasn’t a bird and it wasn’t a plane. A green-caped crusader soared through the air, with a colander hat on top of his hair.” As so we’re introduced to the…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Wilfrid Gordon McDonald Partridge",
    "url": "/reviews/wilfrid-gordon-mcdonald-partridge/"
  },
  "next": {
    "title": "The Perfect Pet",
    "url": "/reviews/the-perfect-pet/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"Michael Recycle"} width={210} height={139} /></a>
      </figure>
      <p>{"“…And then something happened that none could explain. It wasn’t a bird and it wasn’t a plane. A green-caped crusader soared through the air, with a colander hat on top of his hair.”"}</p>
      <p>{"As so we’re introduced to the Captain Planet-like hero, "}<a href={"http://www.michaelrecycle.co.uk/"} target="_blank" rel="noopener noreferrer">{"Michael Recycle"}</a>{", who is in the midst of warning the lazy citizens of Abberdoo-Rimey about their brown rivers, surmounting trash piles and the looming threat of 50-foot bugs that will surely take over the town if they don’t shape up and start greening their act."}</p>
      <p>{"I wish all humans were as quick to heed the sage advice of us environmental folk as the Abberdoo-Rimians. After initiating a “Be Greener Campaign”, their town gleams and glitters, nothing is wasted, and nobody litters. The story is told and illustrated (thanks to artist Alexandra Colombo) in the same spirit as Dr. Seuss… and who doesn’t enjoy a quick read with Theodore Geisel?"}</p>
      <p>{"Two thumbs up for "}<em>{"Michael Recycle"}</em>{" and its humorous green tips, like…."}</p>
      <ul>
        <li>{"Quick and Clean! Take shorter showers — unless you’re really, really smelly."}</li>
        <li>{"Don’t litter! Make sure your trash ends up where it belongs – in a trash can, or in the back of your closet."}</li>
      </ul>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
