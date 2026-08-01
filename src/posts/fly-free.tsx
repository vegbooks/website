import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5781",
  "slug": "fly-free",
  "url": "/reviews/fly-free/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/21/fly-free/",
  "title": "Fly Free!",
  "publishedAt": "2011-08-21",
  "publishedLabel": "August 21st, 2011",
  "excerpt": "This book is an excellent introduction to the Buddhist concepts of karma and satsarma. Set in Vietnam, the story begins and ends with a young girl named Mai, who longs to set sparrows at a nearby temple free from…",
  "image": {
    "src": "/media/2011/08/fly-free-8550.jpg",
    "alt": "Fly Free!",
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
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Buddhism",
      "slug": "buddhism",
      "url": "/topics/buddhism/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eujin Kim Neilan",
      "slug": "eujin-kim-neilan",
      "url": "/topics/eujin-kim-neilan/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Kindness to Animals",
      "slug": "kindness-to-animals",
      "url": "/topics/kindness-to-animals/"
    },
    {
      "name": "Roseanne Thong",
      "slug": "roseanne-thong",
      "url": "/topics/roseanne-thong/"
    },
    {
      "name": "Sparrows",
      "slug": "sparrows",
      "url": "/topics/sparrows/"
    },
    {
      "name": "Vietnam",
      "slug": "vietnam",
      "url": "/topics/vietnam/"
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
    "description": "This book is an excellent introduction to the Buddhist concepts of karma and satsarma. Set in Vietnam, the story begins and ends with a young girl named Mai, who longs to set sparrows at a nearby temple free from…",
    "image": "https://vegbooks.org/media/2011/08/fly-free-8550.jpg"
  },
  "previous": {
    "title": "The Case of the Vanishing Golden Frogs",
    "url": "/reviews/the-case-of-the-vanishing-golden-frogs-a-scientific-mystery/"
  },
  "next": {
    "title": "The Substitute Creacher",
    "url": "/reviews/the-substitute-creacher/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/fly-free-8550.jpg"}><img src={"/media/2011/08/fly-free-8550.jpg"} alt={"Fly Free!"} width={210} height={210} /></a>
      </figure>
      <p>{"This book is an excellent introduction to the Buddhist concepts of karma and satsarma. Set in Vietnam, the story begins and ends with a young girl named Mai, who longs to set sparrows at a nearby temple free from their cages. The cost to do so is more than Mai’s family can afford, but she helps the vendor feed them. The story notes that in Buddhism, it is considered a good deed to set animals free."}</p>
      <p>{"Another girl named Thu is visiting the temple at the same time as Mai. When Thu exits the temple, Mai invites Thu to help her feed the sparrows, setting in motion a circle of kindness toward others without desire for personal benefit– what we now sometimes refer to in our culture as paying it forward. Thu helps a girl on the roadside, and in turn the girl helps an ox cart driver, who later helps a baker…until the good deeds come back to Mai, and a grateful man pays the bird vendor to set the temple sparrows free. The vendor allows Mai to set them free, and the story closes with the young girl reiterating the phrase echoed by all the characters throughout the book: when you do a good deed, it comes back to you."}</p>
      <p>{"This is a handsomely illustrated tale about practicing kindness toward other creatures. This story’s message is an important one. Caregivers should know that there are depictions of animals being used in different ways (including the caged sparrows)."}</p>
      <p>{"Ages 5 and up."}</p>
    </div>
  );
}
