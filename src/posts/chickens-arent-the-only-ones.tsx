import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5766",
  "slug": "chickens-arent-the-only-ones",
  "url": "/reviews/chickens-arent-the-only-ones/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/18/chickens-arent-the-only-ones/",
  "title": "Chickens Aren’t the Only Ones",
  "publishedAt": "2011-08-18",
  "publishedLabel": "August 18th, 2011",
  "excerpt": "Chickens Aren’t the Only Ones doesn’t start off on a promising note for vegans because the first few pages are dedicated to the traditional notion that chickens lay eggs to be bought, eaten (boiled or fried) or dyed.…",
  "image": {
    "src": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "alt": "Chickens Aren’t the Only Ones",
    "width": 210,
    "height": 288
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
      "name": "Amphibians",
      "slug": "amphibians",
      "url": "/topics/amphibians/"
    },
    {
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Dinosaurs",
      "slug": "dinosaurs",
      "url": "/topics/dinosaurs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fish",
      "slug": "fish",
      "url": "/topics/fish/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Reptiles",
      "slug": "reptiles",
      "url": "/topics/reptiles/"
    },
    {
      "name": "Ruth Heller",
      "slug": "ruth-heller",
      "url": "/topics/ruth-heller/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "Chickens Aren’t the Only Ones doesn’t start off on a promising note for vegans because the first few pages are dedicated to the traditional notion that chickens lay eggs to be bought, eaten (boiled or fried) or dyed.…",
    "image": "https://vegbooks.org/media/2011/07/i-stock-000009594887-x-small.jpg"
  },
  "previous": {
    "title": "Old Abe, Eagle Hero",
    "url": "/reviews/old-abe-war-hero/"
  },
  "next": {
    "title": "How to Train Your Dragon (2010)",
    "url": "/reviews/how-to-train-your-dragon/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/i-stock-000009594887-x-small.jpg"}><img src={"/media/2011/07/i-stock-000009594887-x-small.jpg"} alt={"Chickens Aren’t the Only Ones"} width={210} height={288} /></a>
      </figure>
      <p><em><a href={"http://www.amazon.com/gp/product/0698117786/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0698117786"} target="_blank" rel="noopener noreferrer">{"Chickens Aren’t the Only Ones"}</a></em>{" doesn’t start off on a promising note for vegans because the first few pages are dedicated to the traditional notion that chickens lay eggs to be bought, eaten (boiled or fried) or dyed. However, this book unfolds into a beautifully illustrated tour through the world of "}<a href={"http://www.thefreedictionary.com/oviparous"} target="_blank" rel="noopener noreferrer">{"oviparous"}</a>{" beings. Birds, reptiles, amphibians, fish and even dinosaurs abound!"}</p>
      <p>{"Author and illustrator Ruth Heller’s bright illustrations make the book a treat to browse through, and her smart prose anticipates that her audience is comprised of bright, interested children. Adults may also learn something new about the egg-layers amongst us!"}</p>
      <p>{"Ages 6 and up."}</p>
    </div>
  );
}
