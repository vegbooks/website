import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9480",
  "slug": "in-a-heartbeat",
  "url": "/reviews/in-a-heartbeat/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/02/01/in-a-heartbeat/",
  "title": "In a Heartbeat",
  "publishedAt": "2014-02-01",
  "publishedLabel": "February 1st, 2014",
  "excerpt": "I received an advance review copy of “In a Heartbeat” by Laura Doherty and have played it several times for my children (ages 3 and 5) since. Ms. Doherty’s voice is lovely and the accompaniment, though sparing, makes…",
  "image": {
    "src": "/media/2014/01/in-a-heartbeat-cover-art-72-dpi.jpg",
    "alt": "W139_LD_Heartbeat",
    "width": 210,
    "height": 181
  },
  "categories": [
    {
      "name": "Music",
      "slug": "music",
      "url": "/music/"
    }
  ],
  "tags": [
    {
      "name": "Caterpillars",
      "slug": "caterpillars",
      "url": "/topics/caterpillars/"
    },
    {
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Laura Doherty",
      "slug": "laura-doherty",
      "url": "/topics/laura-doherty/"
    },
    {
      "name": "Music",
      "slug": "music",
      "url": "/topics/music/"
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
    "description": "I received an advance review copy of “In a Heartbeat” by Laura Doherty and have played it several times for my children (ages 3 and 5) since. Ms. Doherty’s voice is lovely and the accompaniment, though sparing, makes…",
    "image": "https://vegbooks.org/media/2014/01/in-a-heartbeat-cover-art-72-dpi.jpg"
  },
  "previous": {
    "title": "How to Be a Cat",
    "url": "/reviews/how-to-be-a-cat/"
  },
  "next": {
    "title": "The Runaway Hug",
    "url": "/reviews/the-runaway-hug/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/in-a-heartbeat/"}><img src={"/media/2014/01/in-a-heartbeat-cover-art-72-dpi.jpg"} alt={"W139_LD_Heartbeat"} width={210} height={181} /></a>
      </figure>
      <p>{"I received an advance review copy of “In a Heartbeat” by Laura Doherty and have played it several times for my children (ages 3 and 5) since. Ms. Doherty’s voice is lovely and the accompaniment, though sparing, makes the lyrics take center stage which makes sense for children’s music. A side note about the packaging, each track has a cartoon-style drawing that corresponds with the song’s title, perfect for pre and early readers that want to indicate which song they’d like to hear next. For example, a dinosaur holding a saxophone is paired with the song “Jazzasaurus.”"}</p>
      <p>{"Here are the thirteen tracks as they’re listed on the back of the CD:"}</p>
      <figure class="content-image content-image--center">
        <a href={"/reviews/in-a-heartbeat/"}><img src={"/media/2014/01/in-a-heartbeat-back-cover-72-dpi.jpg"} alt={"W139_LD_Heartbeat"} width={402} height={387} /></a>
      </figure>
      <p>{"All are kid friendly with only a few lyrics that may be worth noting for vegetarian or vegan families. In the song “Breakfast Gives Me Energy” the foods referenced are bananas, blueberries, oatmeal, and yogurt. In “Paper Moon” a line in the chorus says “it’s a Barnum and Bailey world, just as phony as it can be, but it wouldn’t be make believe if you believed in me.” I think the reference is more allegorical but as Barnum and Bailey is a famous circus I thought I’d mention it (incidentally, per the album notes, the song is one of two that is not entirely by Ms. Doherty)."}</p>
      <p>{"The song “Woolly Woolly Bear” is about a caterpillar and it was surprising to me that a cocoon is involved in the transformation into a butterfly instead of a chrysalis (aside: Eric Carle, in The Very Hungry Caterpillar, actually "}<a href={"http://www.eric-carle.com/q-cocoon.html"} target="_blank" rel="noopener noreferrer">{"uses the term cocoon"}</a>{" as well)."}</p>
      <p>{"Standout tracks for our family include “I’m a Little Fish,” “Bicycle,” and “Heartbeat.” In “Heartbeat,” being able to feel a heart beat like a drum when dancing, running, exercising, swimming, etc. leads into loving someone. A sweet CD set for release around Valentine’s Day."}</p>
    </div>
  );
}
