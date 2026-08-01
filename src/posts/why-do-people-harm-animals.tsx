import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3213",
  "slug": "why-do-people-harm-animals",
  "url": "/reviews/why-do-people-harm-animals/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/09/why-do-people-harm-animals/",
  "title": "Why Do People Harm Animals?",
  "publishedAt": "2010-10-09",
  "publishedLabel": "October 9th, 2010",
  "excerpt": "Part of the “Exploring Tough Issues” series, Why Do People Harm Animals? is a great introductory look at animal rights issues, organizations striving to protect animals, and a few of the opposition’s arguments.…",
  "image": {
    "src": "/media/2010/10/9780739849620.jpg",
    "alt": "Why Do People Harm Animals?",
    "width": 200,
    "height": 256
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
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Chris Mason",
      "slug": "chris-mason",
      "url": "/topics/chris-mason/"
    },
    {
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Fishing",
      "slug": "fishing",
      "url": "/topics/fishing/"
    },
    {
      "name": "Hunting",
      "slug": "hunting",
      "url": "/topics/hunting/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Vivisection",
      "slug": "vivisection",
      "url": "/topics/vivisection/"
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
    "description": "Part of the “Exploring Tough Issues” series, Why Do People Harm Animals? is a great introductory look at animal rights issues, organizations striving to protect animals, and a few of the opposition’s arguments.…",
    "image": "https://vegbooks.org/media/2010/10/9780739849620.jpg"
  },
  "previous": {
    "title": "Zen Shorts",
    "url": "/reviews/zen-shorts/"
  },
  "next": {
    "title": "City Dog, Country Frog",
    "url": "/reviews/city-dog-country-frog/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/9780739849620.jpg"}><img src={"/media/2010/10/9780739849620.jpg"} alt={"Why Do People Harm Animals?"} width={200} height={256} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0750237198"} alt={""} width={1} height={1} />
      </figure>
      <p>{"Part of the “Exploring Tough Issues” series, "}<a href={"http://www.amazon.com/gp/product/0750237198?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0750237198"} target="_blank" rel="noopener noreferrer"><em>{"Why Do People Harm Animals?"}</em></a>{" is a great introductory look at animal rights issues, organizations striving to protect animals, and a few of the "}<a href={"http://www.humanesociety.org/issues/opposition/opposition.html"} target="_blank" rel="noopener noreferrer">{"opposition’s"}</a>{" arguments. Topics include animals used as companions, on farms, in circuses and other forms of entertainment, vivisection, and for hunting and fishing purposes. A chapter is also dedicated to exploring how people are able to act cruelly – intentionally or otherwise."}</p>
      <p>{"Dotted throughout the text are quotes and real life case studies concerning human-animal interactions, like that of the 2000 South African oil spill or illegal trading of exotic pets. Any burgeoning animal advocate should be well-versed in the arguments of both sides of the AR coin, enabling them to answer difficult questions from their peers, and this book will certainly aid in that pursuit."}</p>
      <p>{"FYI, my interest has been piqued (and yours may be too) by another title in the series: "}<a href={"http://www.amazon.com/Why-People-Vegetarian-Alison-Brownlie/dp/0750237139/ref=sr_1_1?ie=UTF8&s=books&qid=1286245455&sr=1-1"} target="_blank" rel="noopener noreferrer"><em>{"Why are People Vegetarian?"}</em></a></p>
      <p>{"Ages 9-12."}</p>
    </div>
  );
}
