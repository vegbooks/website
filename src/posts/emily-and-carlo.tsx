import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6935",
  "slug": "emily-and-carlo",
  "url": "/reviews/emily-and-carlo/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/02/10/emily-and-carlo/",
  "title": "Emily and Carlo",
  "publishedAt": "2012-02-10",
  "publishedLabel": "February 10th, 2012",
  "excerpt": "Once upon a time, Newfoundlands were a very popular canine companion to keep, or so it seems. Emily Dickinson, one of America’s most beloved poets, joined the ranks of Newfoundland lovers when she was bestowed a…",
  "image": {
    "src": "/media/2012/02/emily-carlo-72.jpg",
    "alt": "Emily and Carlo",
    "width": 210,
    "height": 260
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Marty Rhodes Figley",
      "slug": "marty-rhodes-figley",
      "url": "/topics/marty-rhodes-figley/"
    },
    {
      "name": "Massachusetts",
      "slug": "massachusetts",
      "url": "/topics/massachusetts/"
    },
    {
      "name": "Poetry",
      "slug": "poetry",
      "url": "/topics/poetry/"
    },
    {
      "name": "Poets",
      "slug": "poets",
      "url": "/topics/poets/"
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
    "description": "Once upon a time, Newfoundlands were a very popular canine companion to keep, or so it seems. Emily Dickinson, one of America’s most beloved poets, joined the ranks of Newfoundland lovers when she was bestowed a…",
    "image": "https://vegbooks.org/media/2012/02/emily-carlo-72.jpg"
  },
  "previous": {
    "title": "How Chipmunk Got His Stripes",
    "url": "/reviews/how-chipmunk-got-his-stripes/"
  },
  "next": {
    "title": "Who’s in a Family?",
    "url": "/reviews/whos-in-a-family/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/02/emily-carlo-72.jpg"}><img src={"/media/2012/02/emily-carlo-72.jpg"} alt={"Emily and Carlo"} width={210} height={260} /></a>
      </figure>
      <p>{"Once upon a time, Newfoundlands were a very popular canine companion to keep, or "}<a href={"/reviews/dog-of-discovery-a-newfoundlands-adventures-with-lewis-and-clark/"}>{"so it seems"}</a>{". Emily Dickinson, one of America’s most beloved poets, joined the ranks of Newfoundland lovers when she was bestowed a little pup in her lonely youth by her father. The "}<a href={"http://www.emilydickinsonmuseum.org/carlo"} target="_blank" rel="noopener noreferrer">{"Emily Dickinson Museum"}</a>{" believes her new friend was meant to keep her company on the long walks she traversed through the Amherst fields and woods."}</p>
      <p>{"Author "}<a href={"http://martyrhodesfigley.com/"} target="_blank" rel="noopener noreferrer">{"Marty Rhodes Figley"}</a>{" was able to get a firsthand perspective of sorts in researching the subject matter for “Emily and Carlo”. She studied the American icon in college and interned at Emily’s homestead, the Evergreens, for a semester, imagining what a typical day in the life of the two would look like. As the pages turn, you’ll discover a tranquil, happy life: Carlo enjoying Emily’s heart-shaped cakes, Carlo playing with the children in the extended family, and the two of them seeking out frogs in a nearby pond. But what really hits home is the wonderful bond the two of them had and shared for sixteen years."}</p>
      <p>{"The text is a symbiotic blend of narration and Emily’s writings, which give the reader a glimmer of the yesteryear’s slower pace and literary stylings. Here’s one poetic example from the book where Emily is speaking about her “mute confederate” or “shaggy ally” –"}</p>
      <blockquote>
        <p><em>{"The Dog is the noblest work of Art…"}<br />{" His mistress’s rights he doth defend –"}</em></p>
      </blockquote>
      <p>{"It might go without saying, but this would be a great text for an adult to read with a child. Had I been in the book’s target demographic, I know I would’ve needed a bit of help in translating/understanding some of Emily’s poetry. Overall, “Emily and Carlo” is a sweet escape from 21st century living and a unique way to approach the work and life of Emily Dickinson."}</p>
      <p>{"Ages 5 to 8."}</p>
    </div>
  );
}
