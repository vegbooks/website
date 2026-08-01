import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5635",
  "slug": "chicken-said-cluck",
  "url": "/reviews/chicken-said-cluck/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/14/chicken-said-cluck/",
  "title": "Chicken Said Cluck",
  "publishedAt": "2011-07-14",
  "publishedLabel": "July 14th, 2011",
  "excerpt": "A plucky little My First I Can Read! book that helped ease my daughter into reading. The repetition, simple storyline, and large font all make it early reader-friendly. Earl and Pearl are two kids who start growing…",
  "image": {
    "src": "/media/2011/07/chicken-says-cluck-hc-c.jpg",
    "alt": "Chicken Said Cluck",
    "width": 210,
    "height": 313
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
      "name": "Autumn",
      "slug": "autumn",
      "url": "/topics/autumn/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Early Readers",
      "slug": "early-readers",
      "url": "/topics/early-readers/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Judy Ackerman Grant",
      "slug": "judy-ackerman-grant",
      "url": "/topics/judy-ackerman-grant/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Pumpkins",
      "slug": "pumpkins",
      "url": "/topics/pumpkins/"
    },
    {
      "name": "Sue Truesdell",
      "slug": "sue-truesdell",
      "url": "/topics/sue-truesdell/"
    },
    {
      "name": "Summer",
      "slug": "summer",
      "url": "/topics/summer/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "A plucky little My First I Can Read! book that helped ease my daughter into reading. The repetition, simple storyline, and large font all make it early reader-friendly. Earl and Pearl are two kids who start growing…",
    "image": "https://vegbooks.org/media/2011/07/chicken-says-cluck-hc-c.jpg"
  },
  "previous": {
    "title": "Mama’s Saris",
    "url": "/reviews/mamas-saris/"
  },
  "next": {
    "title": "Animals Charles Darwin Saw: An Around-the-World Adventure",
    "url": "/reviews/animals-charles-darwin-saw-an-around-the-world-adventure/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/chicken-says-cluck-hc-c.jpg"}><img src={"/media/2011/07/chicken-says-cluck-hc-c.jpg"} alt={"Chicken Said Cluck"} width={210} height={313} /></a>
      </figure>
      <p>{"A plucky little My First "}<a href={"http://www.icanread.com/"} target="_blank" rel="noopener noreferrer">{"I Can Read!"}</a>{" book that helped ease my daughter into reading. The repetition, simple storyline, and large font all make it early reader-friendly."}</p>
      <p>{"Earl and Pearl are two kids who start growing their own pumpkins. Chicken wants to help but continually gets shooed out of the garden until one day Chicken shows her skill and helps the kids save the pumpkins."}</p>
      <p>{"Sue Truesdell’s illustrations combined with Judy Ackerman Grant’s characterization Chicken had us hooked. Although the children treated Chicken like a pest, they never penned her up and in the end they cheered her natural skills and gave her gifts. Most pleasing to me was finding out this mostly realistic story about a chicken had nothing to do with eggs or farmers."}</p>
      <p>{"I picked up this story as we were beginning our summer garden but it would be season-appropriate for fall/ harvest/ Thanksgiving season."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
