import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3930",
  "slug": "our-choice-young-readers-edition",
  "url": "/reviews/our-choice-young-readers-edition/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/12/our-choice-young-readers-edition/",
  "title": "Our Choice: Young Readers Edition",
  "publishedAt": "2011-01-12",
  "publishedLabel": "January 12th, 2011",
  "excerpt": "Working through complicated problems calls for complex discussions and Al Gore’s Our Choice: Young Readers Edition is rich with challenging topics and potential solutions based on the myriad of issues presented by…",
  "image": {
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "Our Choice: Young Readers Edition",
    "width": 210,
    "height": 314
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
      "name": "Al Gore",
      "slug": "al-gore",
      "url": "/topics/al-gore/"
    },
    {
      "name": "Alternative Energy",
      "slug": "alternative-energy",
      "url": "/topics/alternative-energy/"
    },
    {
      "name": "Climate Change",
      "slug": "climate-change",
      "url": "/topics/climate-change/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
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
      "name": "Global Warming",
      "slug": "global-warming",
      "url": "/topics/global-warming/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Solar Power",
      "slug": "solar-power",
      "url": "/topics/solar-power/"
    },
    {
      "name": "Wind Power",
      "slug": "wind-power",
      "url": "/topics/wind-power/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "Working through complicated problems calls for complex discussions and Al Gore’s Our Choice: Young Readers Edition is rich with challenging topics and potential solutions based on the myriad of issues presented by…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000000630071-x-small.jpg"
  },
  "previous": {
    "title": "Puppy School",
    "url": "/reviews/puppy-school/"
  },
  "next": {
    "title": "Of Thee I Sing",
    "url": "/reviews/of-thee-i-sing/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000000630071-x-small.jpg"}><img src={"/media/2010/08/i-stock-000000630071-x-small.jpg"} alt={"Our Choice: Young Readers Edition"} width={210} height={314} /></a>
      </figure>
      <p>{"Working through complicated problems calls for complex discussions and Al Gore’s "}<a href={"http://ourchoicethebook.com/youngreaders/"} target="_blank" rel="noopener noreferrer"><em>{"Our Choice: Young Readers Edition"}</em></a>{" is rich with challenging topics and potential solutions based on the myriad of issues presented by our changing climate. The bad news? The book is dense and busy. The good news? After describing specific challenges, each chapter presents concrete possibilities for positive change. The information is relevant and up-to-date, though of course not all of the solutions are without controversy. Ethanol, geothermal technology, population growth, coal use, solar and wind power and "}<a href={"http://en.wikipedia.org/wiki/Super_grid"} target="_blank" rel="noopener noreferrer">{"super grids"}</a>{" are just some of the subjects addressed in this book."}</p>
      <p>{"Citing cigarette smoking’s drastic decline in popularity as an example of how humans can change their entrenched habits, this book contains comprehensive information to guide both children and adults on our way, but more importantly, it gives us optimism for the future."}</p>
      <p>{"Appropriate for ages 8 and up, though it is possible that younger children may be interested in the information as well if presented in small bites."}</p>
    </div>
  );
}
