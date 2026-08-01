import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3231",
  "slug": "true-green-kids",
  "url": "/reviews/true-green-kids/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/12/true-green-kids/",
  "title": "True Green Kids",
  "publishedAt": "2010-10-12",
  "publishedLabel": "October 12th, 2010",
  "excerpt": "I’m truly impressed by the inspired actions and activities Kim McKay and Jenny Bonnin challenge youngsters to incorporate into their daily lives in True Green Kids. Running the gamut from “in your room” to “on…",
  "image": {
    "src": "/media/2010/08/i-stock-000000630071-x-small.jpg",
    "alt": "True Green Kids",
    "width": 210,
    "height": 315
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
      "name": "Green Living",
      "slug": "green-living",
      "url": "/topics/green-living/"
    },
    {
      "name": "Jenny Bonnin",
      "slug": "jenny-bonnin",
      "url": "/topics/jenny-bonnin/"
    },
    {
      "name": "Kim McKay",
      "slug": "kim-mckay",
      "url": "/topics/kim-mckay/"
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
    "description": "I’m truly impressed by the inspired actions and activities Kim McKay and Jenny Bonnin challenge youngsters to incorporate into their daily lives in True Green Kids. Running the gamut from “in your room” to “on…",
    "image": "https://vegbooks.org/media/2010/08/i-stock-000000630071-x-small.jpg"
  },
  "previous": {
    "title": "Zen Ties",
    "url": "/reviews/zen-ties/"
  },
  "next": {
    "title": "Benji Bean Sprout Doesn’t Eat Meat",
    "url": "/reviews/benji-beansprout/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/i-stock-000000630071-x-small.jpg"}><img src={"/media/2010/08/i-stock-000000630071-x-small.jpg"} alt={"True Green Kids"} width={210} height={315} /></a>
      </figure>
      <p>{"I’m truly impressed by the inspired actions and activities Kim McKay and Jenny Bonnin challenge youngsters to incorporate into their daily lives in "}<a href={"http://www.betruegreen.com/PageBlue.aspx?element=79&category=1"} target="_blank" rel="noopener noreferrer"><em>{"True Green Kids"}</em></a>{". Running the gamut from “in your room” to “on vacation,” this National Geographic publication motivates readers and their families to consider their green footprint in every aspect of their lives – all with the pizzazz of energetic script, lively photography and whimsical graphic design work."}</p>
      <p>{"While the basics such as paper recycling, gardening at home, and shorter showers are covered, dozens of other suggestions brim with ingenuity and initiative-taking encouragement. Within the pet section, kids are challenged to walk their dogs to not only keep them fit, but to pick up litter along route. "}<em>{"True Green Kids"}</em>{" further proposes that youngsters use alternatives to plastic baggies for their pooch’s poop, such as a worm compost system. Additionally, the book is very solid on water and energy conservation tactics as well as creative re-use and re-purpose ideas. And I love that the on-line references it provides are so varied, reflecting a number of different agencies and organizations."}</p>
      <p>{"This is a great reference guide to keep in the home and get kids revved up for environmental stewardship. With one exception, veg parents will have their values reinforced throughout the text as it does promote eating local, organic, produce-laden diets. The one exception is #77, “hold the tuna,” which goes on to say that “fish is an important part of a healthy diet…whether you go fishing or buy fish from a store, make sure you don’t eat species that are under threat.”"}</p>
      <p>{"Ages 9-12."}</p>
    </div>
  );
}
