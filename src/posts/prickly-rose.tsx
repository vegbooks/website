import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9692",
  "slug": "prickly-rose",
  "url": "/reviews/prickly-rose/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/05/15/prickly-rose/",
  "title": "Prickly Rose",
  "publishedAt": "2014-05-15",
  "publishedLabel": "May 15th, 2014",
  "excerpt": "For any child who has compared herself to an older sibling or cousin and felt letdown, there is Prickly Rose. As a follow-up to Sitka Rose, a tall-tale about an adventurous young woman in rhyming verse, Prickly…",
  "image": {
    "src": "/media/2014/05/prickly-rose.jpg",
    "alt": "PricklyRose",
    "width": 210,
    "height": 162
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Judy Love",
      "slug": "judy-love",
      "url": "/topics/judy-love/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Shelley Gill",
      "slug": "shelley-gill",
      "url": "/topics/shelley-gill/"
    },
    {
      "name": "Tall Tales",
      "slug": "tall-tales",
      "url": "/topics/tall-tales/"
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
    "description": "For any child who has compared herself to an older sibling or cousin and felt letdown, there is Prickly Rose. As a follow-up to Sitka Rose, a tall-tale about an adventurous young woman in rhyming verse, Prickly…",
    "image": "https://vegbooks.org/media/2014/05/prickly-rose.jpg"
  },
  "previous": {
    "title": "Frankenweenie (2012)",
    "url": "/reviews/frankenweenie-2012/"
  },
  "next": {
    "title": "Peep and the Big Wide World",
    "url": "/reviews/peep-and-the-big-wide-world/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/prickly-rose/"}><img src={"/media/2014/05/prickly-rose.jpg"} alt={"PricklyRose"} width={210} height={162} /></a>
      </figure>
      <p>{"For any child who has compared herself to an older sibling or cousin and felt letdown, there is "}<em>{"Prickly Rose"}</em>{". As a follow-up to "}<em>{"Sitka Rose"}</em>{", a tall-tale about an adventurous young woman in rhyming verse, "}<em>{"Prickly Rose,"}</em>{"by Shelley Gill, picks up from the perspective of the previous heroine’s younger sister. The younger sister catches the moon, jumps mountain peaks, and enlists orcas to help her travel in a search for her older sister. By the end of the story, both sisters learn to appreciate sisterhood and each other."}</p>
      <p>{"The joyful, lyrical rhymes will entertain children and entice their imaginations to create their own fantastical adventures. The diction evokes a younger protagonist. For example: “Nighttime tracking stunk without the moon as guide, so Prickly yanked it closer and formed Alaska’s tides.” The lines are fun, a bit silly, and easily relatable for elementary-aged children."}</p>
      <p>{"Picking up on the lively language, Judy Love’s illustrations show both human and animal characters as animated and fun-loving. The porcupine is especially adorable, but it’s the images of the sisters reuniting and enjoying each other’s company at the end that evoke true happiness. Prickly Rose is a great introduction to the tradition of tall tales for younger readers."}</p>
      <p>{"Recommended for ages 4-7."}</p>
      <p><em>{"The publisher sent a copy of "}<a href={"http://www.charlesbridge.com/productdetails.cfm?PC=5823"} target="_blank" rel="noopener noreferrer">{"this book"}</a>{"for review."}</em></p>
    </div>
  );
}
