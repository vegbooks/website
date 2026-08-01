import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5286",
  "slug": "operation-redwood",
  "url": "/reviews/operation-redwood/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/26/operation-redwood/",
  "title": "Operation Redwood",
  "publishedAt": "2011-05-26",
  "publishedLabel": "May 26th, 2011",
  "excerpt": "Operation Redwood is a delightful, fast-paced and absorbing novel about twelve-year old Julian Carter-Li. Julian’s complicated family situation finds him living with his uncle, head of giant investment company, IPX,…",
  "image": {
    "src": "/media/2011/05/operation-redwood.jpg",
    "alt": "Operation Redwood",
    "width": 210,
    "height": 317
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
      "name": "Early Adult",
      "slug": "early-adult",
      "url": "/topics/early-adult/"
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
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Environmental Law",
      "slug": "environmental-law",
      "url": "/topics/environmental-law/"
    },
    {
      "name": "Forest",
      "slug": "forest",
      "url": "/topics/forest/"
    },
    {
      "name": "Old Growth Forest",
      "slug": "old-growth-forest",
      "url": "/topics/old-growth-forest/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "S. Terrell French",
      "slug": "s-terrell-french",
      "url": "/topics/s-terrell-french/"
    },
    {
      "name": "Trees",
      "slug": "trees",
      "url": "/topics/trees/"
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
    "description": "Operation Redwood is a delightful, fast-paced and absorbing novel about twelve-year old Julian Carter-Li. Julian’s complicated family situation finds him living with his uncle, head of giant investment company, IPX,…",
    "image": "https://vegbooks.org/media/2011/05/operation-redwood.jpg"
  },
  "previous": {
    "title": "The Curse of Akkad: Climate Upheavals that Rocked Human History",
    "url": "/reviews/the-curse-of-akkad-climate-upheavals-that-rocked-human-history/"
  },
  "next": {
    "title": "Necks Out for Adventure!",
    "url": "/reviews/necks-out-for-adventure/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/operation-redwood.jpg"}><img src={"/media/2011/05/operation-redwood.jpg"} alt={"Operation Redwood"} width={210} height={317} /></a>
      </figure>
      <p><em><a href={"http://www.powells.com/biblio?isbn=0810983540"} target="_blank" rel="noopener noreferrer">{"Operation Redwood"}</a></em>{" is a delightful, fast-paced and absorbing novel about twelve-year old Julian Carter-Li. Julian’s complicated family situation finds him living with his uncle, head of giant investment company, IPX, and his uncle’s family in San Francisco."}</p>
      <p>{"One day, Julian reads an email not meant for his eyes, and an entire chain of events is set into motion. Julian and his young friends work together to attempt to save a grove of old-growth redwood trees in northern California from being clear cut. Since the land is part of IPX’s portfolio, Julian’s actions have a direct connection to his uncle and his work. Along the way, we meet many colorful and compelling characters, including Julian’s friends Danny and Robin (co-conspirators in the complex secret plan to save the redwoods), his strong-willed grandmothers, Julian’s young cousin and various members of Robin’s family."}</p>
      <p>{"Author S. Terrell French is an environmental attorney as well as a mother and "}<em>{"Operation Redwood"}</em>{" is clearly a product of both of these experiences. The politics, personalities, policies and laws surrounding "}<a href={"http://www.wildcalifornia.org/action-issues/programs/industrial-forestry-reform/how-a-timber-harvest-plan-works/"} target="_blank" rel="noopener noreferrer">{"timber harvest plans"}</a>{" are complicated and confusing (to say nothing of frustrating), but Ms. French has distilled them all into a very readable and enjoyable story. In Julian, Danny and Robin, she has created characters who are age-appropriate but also very smart and savvy; that they are portrayed as such intelligent, problem-solving kids is very appealing. Adults who are interested in the book will see some very obvious parallels to the "}<a href={"http://www.msnbc.msn.com/id/26858224/"} target="_blank" rel="noopener noreferrer">{"Headwaters/Pacific Lumber/Maxxam imbroglio"}</a>{" in the plot and in fact the book features a very informative author’s note about the history and events that have transpired in Humbolt County, CA."}</p>
      <p>{"This book is very highly recommended for ages 9-14, although the story is so well written that older teens and adults will enjoy it as well."}</p>
    </div>
  );
}
