import type { PostMetadata } from '../content/types';

export const article = {
  "id": "808",
  "slug": "dumpster",
  "url": "/reviews/dumpster/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/02/17/dumpster/",
  "title": "The Dumpster Diver",
  "publishedAt": "2010-02-17",
  "publishedLabel": "February 17th, 2010",
  "excerpt": "I must admit that I’m a fan of dumpster diving, the act of venturing into dumpsters (or other similar venues) to salvage other peoples’ trash that I would consider treasure. Much of the furniture outfitting my…",
  "image": {
    "src": "/media/2010/02/dumpster.jpg",
    "alt": "The Dumpster Diver",
    "width": 218,
    "height": 253
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
      "name": "David Roberts",
      "slug": "david-roberts",
      "url": "/topics/david-roberts/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Janet S. Wong",
      "slug": "janet-s-wong",
      "url": "/topics/janet-s-wong/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "I must admit that I’m a fan of dumpster diving, the act of venturing into dumpsters (or other similar venues) to salvage other peoples’ trash that I would consider treasure. Much of the furniture outfitting my…",
    "image": "https://vegbooks.org/media/2010/02/dumpster.jpg"
  },
  "previous": {
    "title": "Ice Age 3: Dawn of the Dinosaurs (2009)",
    "url": "/reviews/ice-age-3/"
  },
  "next": {
    "title": "A Turkey for Thanksgiving",
    "url": "/reviews/a-turkey-for-thanksgiving/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/02/dumpster.jpg"}><img src={"/media/2010/02/dumpster.jpg"} alt={"The Dumpster Diver"} width={218} height={253} /></a>
      </figure>
      <p>{"I must admit that I’m a fan of "}<a href={"http://en.wikipedia.org/wiki/Dumpster_diving"} target="_blank" rel="noopener noreferrer">{"dumpster diving"}</a>{", the act of venturing into dumpsters (or other similar venues) to salvage other peoples’ trash that I would consider treasure. Much of the furniture outfitting my college apartment (in a shabby-chic-kind-of-way) was discovered roadside. So I when I found this title in an independent bookstore in Seattle, I was quite the excited one. In Janet S. Wong’s "}<em>{"The Dumpster Diver"}</em>{", a small clan of kids from an urban apartment building idolize their neighbor Steve, who is an electrician by trade, but scuba diver of the alley dumpsters come weekend (he really does sport scuba gear!). The kids make up the triumvirate known as the Diving Team and assist Steve in his explorations and reinvent the way items like lamps and blenders are used and create fantastical inventions."}</p>
      <p>{"While some creations border on the not-so-safe like the “paraskater,” a mobile contraption made of skis on wheels that harnesses air flow (and consequently propels the device) through employment of an umbrella, most are harmless. Steve does wind up in a DIY made wheelchair at the end of the tale because the dumpster’s contents cave-in beneath him. This is a good book not only to discuss general safety, but also the subjects of environmentalism, recycling and developing a sense of community with one’s neighbors."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
