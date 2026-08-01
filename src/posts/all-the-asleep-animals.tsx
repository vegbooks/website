import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8292",
  "slug": "all-the-asleep-animals",
  "url": "/reviews/all-the-asleep-animals/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/10/16/all-the-asleep-animals/",
  "title": "All the Awake Animals",
  "publishedAt": "2012-10-16",
  "publishedLabel": "October 16th, 2012",
  "excerpt": "I received a review copy of All the Awake Animals (by Crescent Dragonwagon and illustrated by David McPhail) at just the right time. We have been trying to convince our two-year-old that sleep is not something he…",
  "image": {
    "src": "/media/2012/10/9780316070454.jpg",
    "alt": "All the Awake Animals",
    "width": 210,
    "height": 209
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
      "name": "Alliteration",
      "slug": "alliteration",
      "url": "/topics/alliteration/"
    },
    {
      "name": "Alphabet",
      "slug": "alphabet",
      "url": "/topics/alphabet/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Crescent Dragonwagon",
      "slug": "crescent-dragonwagon",
      "url": "/topics/crescent-dragonwagon/"
    },
    {
      "name": "David McPhail",
      "slug": "david-mcphail",
      "url": "/topics/david-mcphail/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sleep",
      "slug": "sleep",
      "url": "/topics/sleep/"
    }
  ],
  "reviewer": {
    "name": "Homa Woodrum",
    "slug": "homa-woodrum",
    "url": "/contributors/homa-woodrum/",
    "aliases": [
      "HOMA WOODRUM"
    ]
  },
  "seo": {
    "description": "I received a review copy of All the Awake Animals (by Crescent Dragonwagon and illustrated by David McPhail) at just the right time. We have been trying to convince our two-year-old that sleep is not something he…",
    "image": "https://vegbooks.org/media/2012/10/9780316070454.jpg"
  },
  "previous": {
    "title": "Minny’s Dream",
    "url": "/reviews/minnys-dream/"
  },
  "next": {
    "title": "The Peace Book",
    "url": "/reviews/the-peace-book/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/10/9780316070454.jpg"}><img src={"/media/2012/10/9780316070454.jpg"} alt={"All the Awake Animals"} width={210} height={209} /></a>
      </figure>
      <p>{"I received a review copy of "}<em>{"All the Awake Animals"}</em>{" (by "}<a href={"http://dragonwagon.com/"} target="_blank" rel="noopener noreferrer">{"Crescent Dragonwagon"}</a>{" and illustrated by David McPhail) at just the right time. We have been trying to convince our two-year-old that sleep is not something he should fight and the theme of the book, that animals curl up and go to sleep the same ways we do, was a neat approach. The illustrations are engaging and restful, with each sleeping animal also reflecting a letter of the alphabet illustrated in script on each page. For my two-year-old this made the book a little long for him but my four-year-old’s attention stayed constant through the whole book. The only downside to the beautiful scripted letters was that some were confusing. My daughter thought the “I” in “Ibex” was the same letter as the “J” for “Jaguar” and even to my eyes they look almost identical."}</p>
      <p>{"The book uses a lot of alliteration within the alphabetical theme, so “Nightingale naps in a nest near the ground” and “Rabbit relaxes into restful repose, dreaming of ripe red radishes.” As a result, there are some great vocabulary words that will potentially be new to younger readers. I think that the book is a beautifully done bedtime alphabet book for the preschool and up set."}</p>
    </div>
  );
}
