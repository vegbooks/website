import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10198",
  "slug": "i-am-abraham-lincoln-ordinary-people-change-the-world",
  "url": "/reviews/i-am-abraham-lincoln-ordinary-people-change-the-world/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/10/26/i-am-abraham-lincoln-ordinary-people-change-the-world/",
  "title": "I Am Abraham Lincoln (Ordinary People Change the World)",
  "publishedAt": "2015-10-26",
  "publishedLabel": "October 26th, 2015",
  "excerpt": "I’ve been interested in Brad Meltzer’s Ordinary People Change the World series since hearing about them on a local morning radio talk show. (Here’s a link; skip to the 5:47 mark.) Meltzer’s book series attempts to…",
  "image": {
    "src": "/media/2015/10/i-am-abe.jpg",
    "alt": "IAmAbe",
    "width": 210,
    "height": 210
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
      "name": "Abraham Lincoln",
      "slug": "abraham-lincoln",
      "url": "/topics/abraham-lincoln/"
    },
    {
      "name": "Biography",
      "slug": "biography",
      "url": "/topics/biography/"
    },
    {
      "name": "Brad Meltzer",
      "slug": "brad-meltzer",
      "url": "/topics/brad-meltzer/"
    },
    {
      "name": "Bullying",
      "slug": "bullying",
      "url": "/topics/bullying/"
    },
    {
      "name": "Christopher Eliopoulos",
      "slug": "christopher-eliopoulos",
      "url": "/topics/christopher-eliopoulos/"
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
      "name": "Kindness to Animals",
      "slug": "kindness-to-animals",
      "url": "/topics/kindness-to-animals/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
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
    "description": "I’ve been interested in Brad Meltzer’s Ordinary People Change the World series since hearing about them on a local morning radio talk show. (Here’s a link; skip to the 5:47 mark.) Meltzer’s book series attempts to…",
    "image": "https://vegbooks.org/media/2015/10/i-am-abe.jpg"
  },
  "previous": {
    "title": "Best Books for 6-Year-Old Vegan and Vegetarian Kids",
    "url": "/reviews/books-vegan-vegetarian-kids-age-6/"
  },
  "next": {
    "title": "I Am Yoga",
    "url": "/reviews/i-am-yoga/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/10/i-am-abe.jpg"} alt={"IAmAbe"} width={210} height={210} />
      </figure>
      <p>{"I’ve been interested in Brad Meltzer’s Ordinary People Change the World series since hearing about them on a local morning radio talk show. ("}<a href={"http://www.bing.com/videos/search?q=brad+meltzer+interview+elliot+in+the+morning&qpvt=brad+melzter+interview+elliot+in+the+morning&FORM=VDRE#view=detail&mid=9B025279B0C326255B7A9B025279B0C326255B7A"} target="_blank" rel="noopener noreferrer">{"Here’s a link"}</a>{"; skip to the 5:47 mark.)"}</p>
      <p>{"Meltzer’s book series attempts to humanize American heroes to make them relatable and interesting to children. So I was happy to stumble across "}<em>{"I Am Abraham Lincoln"}</em>{" while visiting the Ford’s Theatre Museum store with my six-year-old begging for me to buy her a souvenir."}</p>
      <p>{"This book is truly amazing. It’s not a focus on Abraham Lincoln as president, but more the early story of events in his life that built the great man that later became president. It touches on his experiences with bullying and injustices and on his love of books in ways that will inspire children in their daily lives."}</p>
      <p>{"The story of most interest for Vegbooks followers is a story about a ten year old Abraham Lincoln standing up for turtles being abused by a group of boys in his town. Abraham Lincoln’s love of animals is chronicled in "}<a href={"/reviews/abe-lincoln-loved-animals/"}><em>{"Abe Lincoln Loved Animals"}</em></a>{", which would be a great follow-up to "}<em>{"I Am Abraham Lincoln"}</em>{"."}</p>
    </div>
  );
}
