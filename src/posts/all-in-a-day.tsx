import type { PostMetadata } from '../content/types';

export const article = {
  "id": "185",
  "slug": "all-in-a-day",
  "url": "/reviews/all-in-a-day/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/14/all-in-a-day/",
  "title": "All In A Day",
  "publishedAt": "2009-11-14",
  "publishedLabel": "November 14th, 2009",
  "excerpt": "I have admired the beautiful work of artist Nikki McClure for many years, so I was excited to get my hands on a book she had illustrated with her gorgeous, original style of paper cutting. When we got it, I found…",
  "image": {
    "src": "/media/2009/11/allinaday11.jpg",
    "alt": "AllinaDay",
    "width": 174,
    "height": 170
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
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Cynthia Rylant",
      "slug": "cynthia-rylant",
      "url": "/topics/cynthia-rylant/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Natural Living",
      "slug": "natural-living",
      "url": "/topics/natural-living/"
    },
    {
      "name": "Nikki McClure",
      "slug": "nikki-mcclure",
      "url": "/topics/nikki-mcclure/"
    },
    {
      "name": "Paper Cutting",
      "slug": "paper-cutting",
      "url": "/topics/paper-cutting/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "I have admired the beautiful work of artist Nikki McClure for many years, so I was excited to get my hands on a book she had illustrated with her gorgeous, original style of paper cutting. When we got it, I found…",
    "image": "https://vegbooks.org/media/2009/11/allinaday11.jpg"
  },
  "previous": {
    "title": "Horton Hears a Who! (2008)",
    "url": "/reviews/horton-hears-a-who-movie/"
  },
  "next": {
    "title": "The Magic Finger",
    "url": "/reviews/the-magic-finger/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2009/11/allinaday11.jpg"} alt={"AllinaDay"} width={174} height={170} />
      </figure>
      <p>{"I have admired the beautiful work of artist "}<a href={"http://www.nikkimcclure.com/"} target="_blank" rel="noopener noreferrer">{"Nikki McClure"}</a>{" for many years, so I was excited to get my hands on a book she had illustrated with her gorgeous, original style of paper cutting. When we got it, I found that not only were the illustrations delightful, but the content was welcome as well. In "}<em><a href={"http://www.powells.com/biblio/1-9780810983212-0"} target="_blank" rel="noopener noreferrer">{"All In A Day"}</a></em>{", McClure has teamed up with the prolific, award-winning author "}<a href={"http://en.wikipedia.org/wiki/Cynthia_Rylant"} target="_blank" rel="noopener noreferrer">{"Cynthia Rylant"}</a>{", the author of one of our family’s favorite series, "}<a href={"http://www.powells.com/s?header=Search+Form&kw=mr+putter+and+tabby"} target="_blank" rel="noopener noreferrer">{"Mr. Putter and Tabby"}</a>{"."}</p>
      <p><em>{"All In A Day"}</em>{"‘s simple but lovely story traces the rhymths of an unrushed country day– celebration, surprise, chores, disappointment, delight, adventure and life with family and community."}</p>
      <p>{"McClure’s illustrations convey the loving bond between a boy and a white chicken by showing them side by side — experiencing life and enjoying their time together. They are depicted in a garden, in a rainstorm, sharing grain and even lying on their backs with the papa, looking up at the sky. (I especially love this page because it seems to convey an acceptance of the chicken as a larger part of the family as well as an openness about the family’s adults.)"}</p>
      <p>{"Eggs are shown on many of the pages with the chicken, though there is never any intention around the egg. Even when one of egg cracks and the boy appears upset (disappointment and beginning anew!), my take from the context of the illustrations is that he is more upset for the chicken than for any other reason."}</p>
      <p>{"A hallmark of McClure’s style, there are marvelous botanical and domestic details sprinkled throughout the illustrations such as a curious squirrel, leaves, beautiful trees– she has a way with the birch tree– shovels, feathers, wild birds, hats and laundry accessories. This book was an especially serendipitous find for my son, who loves gardening, mushrooms and fluffy dandelions, which are subject matters rarely combined in one volume of children’s literature."}</p>
      <p>{"This sweet, peaceful story is a wonderful, gentle reminder to enjoy our days and all that they hold while (literally!) illustrating inherent respect for non-humans and appreciation for their companionship. I enthusiastically recommend this book as a bedtime read, but its lovely at any time for the preschool and kindergarten set. Older children and adults may be interested in having a look at unusual artistry of the papercut illustrations and "}<a href={"http://portland.readinglocal.com/2009/10/20/interview-childrens-authorillustrator-nikki-mcclure/"} target="_blank" rel="noopener noreferrer">{"learning the story behind this art form and artist."}</a></p>
      <p>{"A little Googling has revealed the McClure has written and illustrated a book called "}<em>{"The Great Chicken Escape"}</em>{". I look forward to reading it and reviewing it!"}</p>
    </div>
  );
}
