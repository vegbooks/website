import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1153",
  "slug": "martha-speaks",
  "url": "/reviews/martha-speaks/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/01/martha-speaks/",
  "title": "Martha Speaks",
  "publishedAt": "2010-03-01",
  "publishedLabel": "March 1st, 2010",
  "excerpt": "What would your dog say if he or she could talk human? Like the main canine character in Martha Speaks by Susan Meddaugh, your pup would probably have endless commentary on favorite foods and on life before becoming…",
  "image": {
    "src": "/media/2010/02/martha-speaks.jpg",
    "alt": "Martha Speaks",
    "width": 218,
    "height": 272
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
      "name": "animal intelligence",
      "slug": "animal-intelligence",
      "url": "/topics/animal-intelligence/"
    },
    {
      "name": "Animal Sentience",
      "slug": "animal-sentience",
      "url": "/topics/animal-sentience/"
    },
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
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Susan Meddaugh",
      "slug": "susan-meddaugh",
      "url": "/topics/susan-meddaugh/"
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
    "description": "What would your dog say if he or she could talk human? Like the main canine character in Martha Speaks by Susan Meddaugh, your pup would probably have endless commentary on favorite foods and on life before becoming…",
    "image": "https://vegbooks.org/media/2010/02/martha-speaks.jpg"
  },
  "previous": {
    "title": "Madagascar (2005)",
    "url": "/reviews/madagascar/"
  },
  "next": {
    "title": "Wag!",
    "url": "/reviews/wag/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/02/martha-speaks.jpg"}><img src={"/media/2010/02/martha-speaks.jpg"} alt={"Martha Speaks"} width={218} height={272} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0395729521"} alt={""} width={1} height={1} />
      </figure>
      <p>{"What would your dog say if he or she could talk human? Like the main canine character in "}<em><a href={"http://www.amazon.com/gp/product/0395729521?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0395729521"} target="_blank" rel="noopener noreferrer">{"Martha Speaks"}</a></em>{" by Susan Meddaugh, your pup would probably have endless commentary on favorite foods and on life before becoming a member of your household.  She may even indulge you with some answers to long harbored questions – “Why do you drink from the toilet?” “Do dogs dream?”"}</p>
      <p>{"After devouring a bowl of alphabet soup, Martha dog is endowed with the power of speech and does all of the above. Her family is enthralled and amused by this newfound talent at first, but Martha soon overwhelms her family with secret phone orders for BBQ and nonstop chitchat. (Martha is not a veggie dog, but had her family talked to her about factory farming, I’m sure she would’ve opted for "}<a href={"http://www.v-dogfood.com/"} target="_blank" rel="noopener noreferrer">{"V-Dog"}</a>{" instead.) After being yelled at to “shut up,” Martha recoils into isolation and sadness. But all ends well at the conclusion of the tale when Martha pulls off a "}<em><a href={"http://www.amazon.com/Walter-Farting-Dog-William-Kotzwinkle/dp/1583940537"} target="_blank" rel="noopener noreferrer">{"Walter the Farting Dog"}</a></em>{"-like feat of bravery and heroism."}</p>
      <p>{"Sincere, comical and insightful, "}<em>{"Martha Speaks"}</em>{" helps kids decipher the fine line between saying just enough and too much. Also a great read for highlighting and appreciating animal sentience and intelligence. There is now a "}<a href={"http://pbskids.org/martha/parentsteachers/program/index.html"} target="_blank" rel="noopener noreferrer">{"PBS TV show"}</a>{" (check out the website for interactive activities) based on the Martha Speaks book series."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
