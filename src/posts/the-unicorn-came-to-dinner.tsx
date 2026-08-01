import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10970",
  "slug": "the-unicorn-came-to-dinner",
  "url": "/reviews/the-unicorn-came-to-dinner/",
  "legacyUrl": "https://vegbooks.org/index.php/2020/05/11/the-unicorn-came-to-dinner/",
  "title": "The Unicorn Came to Dinner",
  "publishedAt": "2020-05-11",
  "publishedLabel": "May 11th, 2020",
  "excerpt": "THE UNICORN CAME TO DINNER by Lauren DeStefano is a story about change and how one girl deals with it…for a while. Like many children who have emotions that feel too big or powerful to deal with, Elizabeth has found…",
  "image": {
    "src": "/media/2020/05/the-unicorn-came-to-dinner.jpg",
    "alt": "The Unicorn Came to Dinner",
    "width": 300,
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
      "name": "anxiety",
      "slug": "anxiety",
      "url": "/topics/anxiety/"
    },
    {
      "name": "change",
      "slug": "change",
      "url": "/topics/change/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "elementary readers",
      "slug": "elementary-readers",
      "url": "/topics/elementary-readers/"
    },
    {
      "name": "Gaia Cornwall",
      "slug": "gaia-cornwall",
      "url": "/topics/gaia-cornwall/"
    },
    {
      "name": "Lauren DeStefano",
      "slug": "lauren-destefano",
      "url": "/topics/lauren-destefano/"
    },
    {
      "name": "The Unicorn Came to Dinner",
      "slug": "the-unicorn-came-to-dinner",
      "url": "/topics/the-unicorn-came-to-dinner/"
    },
    {
      "name": "unicorns",
      "slug": "unicorns",
      "url": "/topics/unicorns/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "THE UNICORN CAME TO DINNER by Lauren DeStefano is a story about change and how one girl deals with it…for a while. Like many children who have emotions that feel too big or powerful to deal with, Elizabeth has found…",
    "image": "https://vegbooks.org/media/2020/05/the-unicorn-came-to-dinner.jpg"
  },
  "previous": {
    "title": "How To Speak Dog",
    "url": "/reviews/how-to-speak-dog/"
  },
  "next": {
    "title": "Llama Unleashes the Alpacalypse",
    "url": "/reviews/llama-unleashes-the-alpacalypse/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/media/2020/05/the-unicorn-came-to-dinner.jpg"}><img src={"/media/2020/05/the-unicorn-came-to-dinner.jpg"} alt={"The Unicorn Came to Dinner"} width={300} height={300} /></a>
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781250310408"} target="_blank" rel="noopener noreferrer">{"THE UNICORN CAME TO DINNER by Lauren DeStefano"}</a>{" is a story about change and how one girl deals with it…for a while. Like many children who have emotions that feel too big or powerful to deal with, Elizabeth has found a fantastical way to handle her feelings: She becomes something else! As the titular unicorn leaves behind a mess, is rude and grumpy to Elizabeth’s parents, and complains about having to eat carrots, the parents are patient and understanding. By playing along with Elizabeth as a unicorn, her parents walk the fine line of supporting and keeping basic expectations in tact. In the end, Elizabeth finds that she has the ability to adapt without becoming a unicorn."}</p>
      <p>{"Young readers and listeners will love the swirling, colorful unicorn mane and tail and caregivers will appreciate the exasperated but loving faces of Elizabeth’s parents, including a line that explains that “Mom closed her eyes and counted to five.” The collage-style illustrations, by Gaia Cornwall, suit the fantastical story with myriad patterns and strong pastel colors. This storybook will become a naptime and bedtime staple for children who love naughty but lovable unicorns."}</p>
    </div>
  );
}
