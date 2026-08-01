import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9009",
  "slug": "someones-sleepy",
  "url": "/reviews/someones-sleepy/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/07/25/someones-sleepy/",
  "title": "Someone’s Sleepy",
  "publishedAt": "2013-07-25",
  "publishedLabel": "July 25th, 2013",
  "excerpt": "The repetition throughout Someone’s Sleepyhas an almost hypnotic effect on children ready for bed. This calming, rhythmic book comes with a bedtime ritual embedded in the story; reading the story and drawing…",
  "image": {
    "src": "/media/2013/07/s-sleepy-cover.jpg",
    "alt": "s Sleepy cover",
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
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Dan Andreasen",
      "slug": "dan-andreasen",
      "url": "/topics/dan-andreasen/"
    },
    {
      "name": "Deborah Lee Rose",
      "slug": "deborah-lee-rose",
      "url": "/topics/deborah-lee-rose/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "The repetition throughout Someone’s Sleepyhas an almost hypnotic effect on children ready for bed. This calming, rhythmic book comes with a bedtime ritual embedded in the story; reading the story and drawing…",
    "image": "https://vegbooks.org/media/2013/07/s-sleepy-cover.jpg"
  },
  "previous": {
    "title": "Moon Bear",
    "url": "/reviews/moon-bear/"
  },
  "next": {
    "title": "Blink of an Eye",
    "url": "/reviews/blink/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/07/s-sleepy-cover.jpg"}><img src={"/media/2013/07/s-sleepy-cover.jpg"} alt={"s Sleepy cover"} width={210} height={210} /></a>
      </figure>
      <p>{"The repetition throughout "}<em><a href={"http://deborahleerose.com/books/someones-sleepy/"} target="_blank" rel="noopener noreferrer">{"Someone’s Sleepy"}</a></em>{"has an almost hypnotic effect on children ready for bed. This calming, rhythmic book comes with a bedtime ritual embedded in the story; reading the story and drawing attention to each sleepy hand and sleepy foot allows caregiver and child to create a tender tradition amidst the sometimes chaotic routines of a toddler day."}</p>
      <p>{"The sweet rhymes are simple enough for toddlers to recognize and even repeat, and the illustrations, with their friendly, big-headed main character, are sure to attract children from two years through five years old. In my family, we liked going through the story and recognizing each body part or item mentioned. In the tradition of "}<em>{"Goodnight Moon"}</em>{", the repetition of "}<em>{"sleepy"}</em>{", while attached to different items works like a pendulum lulling the listener (and sometimes the reader!) into a drowsy rest."}</p>
      <p>{"When a child is less ready to go to bed, the illustrations provide enough detail that a caregiver can discuss and point out dolls and toothbrushes, an adorable pet dog and fishbowls until a little one is ready to nestle down to sleep."}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2013/07/someones-sleepy-int-final-lores5.jpg"}><img src={"/media/2013/07/someones-sleepy-int-final-lores5.jpg"} alt={"SomeonesSleepy_INT_Final-lores5"} width={243} height={122} /></a>
      </figure>
      <p>{"Families with children highly attuned to responsible pet care may want to discuss the size of the fishbowl in the main character’s bedroom. Similar to an image in "}<em>{"The Cat and the Hat,"}</em>{" the bowl is far too small for the fish."}</p>
      <p>{"My four-year-old loved this book and wanted it read again and again. My six-year-old found it cute, but overly simple. After one reading, he was done."}</p>
      <p>{"Highly recommended for ages 2-5."}</p>
    </div>
  );
}
