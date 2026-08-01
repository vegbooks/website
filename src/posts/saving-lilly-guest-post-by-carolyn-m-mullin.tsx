import type { PostMetadata } from '../content/types';

export const article = {
  "id": "730",
  "slug": "saving-lilly-guest-post-by-carolyn-m-mullin",
  "url": "/reviews/saving-lilly-guest-post-by-carolyn-m-mullin/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/01/28/saving-lilly-guest-post-by-carolyn-m-mullin/",
  "title": "Saving Lilly",
  "publishedAt": "2010-01-28",
  "publishedLabel": "January 28th, 2010",
  "excerpt": "I had appointments lined up early the next morning and knew better than to stay up ‘til 1 a.m. reading this next book, but I couldn’t help myself. Saving Lilly by Peg Kehret (a fellow vegetarian) is an absolute…",
  "image": {
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Saving Lilly",
    "width": 210,
    "height": 278
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
      "name": "ASPCA",
      "slug": "aspca",
      "url": "/topics/aspca/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
    },
    {
      "name": "Fund for Animals",
      "slug": "fund-for-animals",
      "url": "/topics/fund-for-animals/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Peg Kehret",
      "slug": "peg-kehret",
      "url": "/topics/peg-kehret/"
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
    "description": "I had appointments lined up early the next morning and knew better than to stay up ‘til 1 a.m. reading this next book, but I couldn’t help myself. Saving Lilly by Peg Kehret (a fellow vegetarian) is an absolute…",
    "image": "https://vegbooks.org/media/2010/10/girl-reading.jpg"
  },
  "previous": {
    "title": "Vegetable Friends",
    "url": "/reviews/vegetable-friends-guest-post-by-jacqueline-bodnar/"
  },
  "next": {
    "title": "Breakfast in the Rainforest",
    "url": "/reviews/breakfast/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/girl-reading.jpg"}><img src={"/media/2010/10/girl-reading.jpg"} alt={"Saving Lilly"} width={210} height={278} /></a>
      </figure>
      <p>{"I had appointments lined up early the next morning and knew better than to stay up ‘til 1 a.m. reading this next book, but I couldn’t help myself. "}<em>{"Saving Lilly"}</em>{" by "}<a href={"http://www.pegkehret.com/index.html"} target="_blank" rel="noopener noreferrer">{"Peg Kehret"}</a>{" (a fellow vegetarian) is an absolute page-turner about two sixth grade friends, Erin and David, who discover the sad truth about animals in circuses. During a research project for their gifted class, they learn how animals are mistreated during training and lead terribly depressing lives. Much of their information for the report came from the Fund for Animals and the ASPCA (great plugs, Peg!)."}</p>
      <p>{"The timing couldn’t be better for this report as the kids were scheduled to go on a “special” field trip to the Glitter Tent Circus with their homeroom teacher, Mrs. Dawson. Long story short, the kids find themselves in quite a predicament. Mrs. Dawson is determined to relive her happy childhood memories of going to the circus with her grandfather, despite Erin and David’s attempts to show her the astonishing number of animal welfare violations the circus had been cited for. The dynamic duo tries to educate fellow students on the inherent cruelty of using animals for entertainment and encourage them to boycott the field trip, but constantly run up against Mrs. Dawson. Erin and David are a testament to what passion and determination can achieve in the midst of adversity."}</p>
      <p>{"They garner the attention of the media, the school principal and the community at large and help rescue the circus’ lone elephant, Lilly, who is in dire need of medical attention. In the end, the pair inspires and organizes their class to fundraise $8,000 to purchase Lilly and save her from a game park fate (where a trophy hunter would end her life prematurely) and send her to the peaceful pastures of an elephant sanctuary that happened to be located in "}<a href={"http://www.elephants.com/"} target="_blank" rel="noopener noreferrer">{"Tennessee"}</a>{"."}</p>
      <p><em>{"Saving Lilly"}</em>{"is wonderful read that I highly recommend to inspire young animal lovers. You may want to have some tissues on hand as the book elicited a few tears for me from time to time."}</p>
      <p>{"Ages 9-12."}</p>
    </div>
  );
}
