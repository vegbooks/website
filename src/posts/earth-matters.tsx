import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2664",
  "slug": "earth-matters",
  "url": "/reviews/earth-matters/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/25/earth-matters/",
  "title": "Earth Matters",
  "publishedAt": "2010-07-25",
  "publishedLabel": "July 25th, 2010",
  "excerpt": "What’s probably most impressive about this publication is the way in which it was manufactured- as green as can feasibly be. Shunning a dust jacket, using vegetable ink, and printing on paper derived from…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Earth Matters",
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "David de Rothschild",
      "slug": "david-de-rothschild",
      "url": "/topics/david-de-rothschild/"
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
      "name": "Green Publishing",
      "slug": "green-publishing",
      "url": "/topics/green-publishing/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
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
    "description": "What’s probably most impressive about this publication is the way in which it was manufactured- as green as can feasibly be. Shunning a dust jacket, using vegetable ink, and printing on paper derived from…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Diary of a Spider",
    "url": "/reviews/diary-of-a-spider/"
  },
  "next": {
    "title": "Llama Llama Misses Mama",
    "url": "/reviews/llama-llama-misses-mama/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"Earth Matters"} width={210} height={139} /></a>
      </figure>
      <p>{"What’s probably most impressive about this publication is the way in which it was manufactured- as green as can feasibly be. Shunning a dust jacket, using vegetable ink, and printing on paper derived from “responsibly managed forests,” its publisher, the monolith "}<a href={"http://us.dk.com/static/cs/us/11/features/madewithcare/homepage.html"} target="_blank" rel="noopener noreferrer">{"DK"}</a>{", implements the most ethical and environmental processes it can source."}</p>
      <p>{"The content isn’t all that bad either. Eco adventurist, David de Rothschild, is the consulting editor, among several other contributors. Shy of being a true encyclopedia, this informative, fact and photo-filled 256-page science book introduces readers to Earth’s biomes (polar regions to temperate forests), their reactions to climate change and human influence, and how kids can help better the serious plight facing flora and fauna. Kudos are due for covering, however briefly, the subjects of factory farming, genetically-modified crops, and fair trade coffee and chocolate. Not once is vegetarianism mentioned, however, and sustainably-sourced, local fish and meat is found on several shopping lists in the “Making a Difference” pages. Also of importance are some of the misinformed statements. One that’s quite troubling (p. 28) indicates where carbon dioxide comes from. The book claims: agriculture (4%), transportation (22%), buildings (31%), and industry (40%). Anyone who’s read the famous 2006 UN Report knows that "}<a href={"http://www.goveg.com/environment-globalwarming.asp"} target="_blank" rel="noopener noreferrer">{"the meat industry produces more greenhouse gases than all the SUVs, cars, trucks, planes, and ships in the world combined"}</a>{"."}</p>
      <p>{"On a side note, you might be interested in "}<a href={"http://www.theplastiki.com/"} target="_blank" rel="noopener noreferrer">{"de Rothschild’s other effort"}</a>{" — a sea voyage from San Francisco to Sydney, aboard a catamaran made from 12,000 plastic bottles that will traverse the Great Pacific Garbage Patch, “huge, floating clouds of plastic trash caught in a swirling vortex of ocean currents.”"}</p>
      <p>{"Ages 9-12."}</p>
    </div>
  );
}
