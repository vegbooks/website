import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7111",
  "slug": "old-macdonald",
  "url": "/reviews/old-macdonald/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/03/12/old-macdonald/",
  "title": "Old MacDonald Has No Farm … ee-i-anymore",
  "publishedAt": "2012-03-12",
  "publishedLabel": "March 12th, 2012",
  "excerpt": "It’s probably inevitable that a book on factory farming will elicit strong reactions from vegetarian and vegan families, and no doubt some people will have a quarrel with Old MacDonald Has No Farm … ee-i-anymore.The…",
  "image": {
    "src": "/media/2012/03/old-mac-donald.jpg",
    "alt": "Old MacDonald Has No Farm … ee-i-anymore",
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
      "name": "Animals as Food",
      "slug": "animals-as-food",
      "url": "/topics/animals-as-food/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Cows",
      "slug": "cows",
      "url": "/topics/cows/"
    },
    {
      "name": "Depictions of Animals",
      "slug": "depictions-of-animals",
      "url": "/topics/depictions-of-animals/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "factory farming",
      "slug": "factory-farming",
      "url": "/topics/factory-farming/"
    },
    {
      "name": "Farm",
      "slug": "farm",
      "url": "/topics/farm/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Kathy Coughlin",
      "slug": "kathy-coughlin",
      "url": "/topics/kathy-coughlin/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "It’s probably inevitable that a book on factory farming will elicit strong reactions from vegetarian and vegan families, and no doubt some people will have a quarrel with Old MacDonald Has No Farm … ee-i-anymore.The…",
    "image": "https://vegbooks.org/media/2012/03/old-mac-donald.jpg"
  },
  "previous": {
    "title": "Riding in My Car",
    "url": "/reviews/riding-in-my-car/"
  },
  "next": {
    "title": "Kali’s Song",
    "url": "/reviews/kalis-song/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/03/old-mac-donald.jpg"}><img src={"/media/2012/03/old-mac-donald.jpg"} alt={"Old MacDonald Has No Farm … ee-i-anymore"} width={210} height={260} /></a>
      </figure>
      <p>{"It’s probably inevitable that a book on factory farming will elicit strong reactions from vegetarian and vegan families, and no doubt some people will have a quarrel with "}<em><a href={"http://superiorletterpress.com/?111520"} target="_blank" rel="noopener noreferrer">{"Old MacDonald Has No Farm … ee-i-anymore"}</a>{"."}</em>{"The premise of this book is that industrialized animal agriculture has driven Old MacDonald out of business, and that life would be better if we returned to traditional forms of farming, where animal husbandry played a significant role. The book seeks to expose children to the realities of factory farming by comparing it to the "}<a href={"/reviews/all-kinds-of-kisses/"}>{"idyllic farms"}</a>{" normally featured in children’s literature. (The book does state frankly that some of MacDonald’s animals “would someday become food for people who ate meat.”)"}</p>
      <p>{"For those who say that this approach doesn’t go far enough because it presents traditional farms as a desirable alternative to industrialized animal operations, I sympathize. I’m the kind of vegan who can’t imagine of any set of circumstances involving an animal that would make me want to eat meat. And I certainly don’t consume meat from “happy cows,” because, as Jonathan Safran Foer points out in "}<em><a href={"http://www.goodreads.com/book/show/6604712-eating-animals"} target="_blank" rel="noopener noreferrer">{"Eating Animals"}</a></em>{", there’s no such thing as humane slaughter and all sentient beings struggle against death."}</p>
      <p>{"Still, I can’t pick a bone with the contention that small-scale animal agriculture is more humane than the "}<a href={"http://en.wikipedia.org/wiki/Industrial_agriculture_(animals)"} target="_blank" rel="noopener noreferrer">{"cramped, inhuman conditions"}</a>{" of the facilities that “grow” that the vast majority of cows, pigs, and chickens in this country. And I wholeheartedly agree with author Kathy Coughlin that female pigs should not be held in "}<a href={"http://www.farmsanctuary.org/issues/factoryfarming/pork/gestationcrates.html"} target="_blank" rel="noopener noreferrer">{"gestation crates"}</a>{" and female cows should not be repeatedly impregnated."}</p>
      <p>{"The book’s strength is in making these ideas accessible to children. When I first read this book to myself, I wondered how my daughter, who had previously shied away from Ruby Roth’s "}<em><a href={"/reviews/thats-why-we-dont-eat-animals-guest-post-by-carolyn-m-mullin/"}>{"That’s Why We Don’t Eat Animals"}</a></em>{", would react. The accuracy of the pen-and-ink illustrations may be startling to some children who have never before seen the conditions that the book depicts. I sat down with my kiddo and told her that I wanted to know what she thought of the book, and that I recognized it might make her uncomfortable. Still, she took to the book surprisingly well, asking thoughtful questions as we went along. I’m not sure this is a book we’ll read all the time — the subject matter is unpleasant, no matter how you slice it — but I’m glad we got a chance to read it together."}</p>
      <p>{"Oh, and for those concerned, my daughter told me unprompted that while she thought the small farm was better than the others, she "}<em>{"still"}</em>{"wouldn’t eat MacDonald’s animals."}</p>
      <p>{"Ages 6 to 9."}</p>
    </div>
  );
}
