import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6177",
  "slug": "turk-and-runt",
  "url": "/reviews/turk-and-runt/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/11/05/turk-and-runt/",
  "title": "Turk and Runt",
  "publishedAt": "2011-11-05",
  "publishedLabel": "November 5th, 2011",
  "excerpt": "Wishbone Farm is a popular place come fall. Pumpkins abound in October. Apples are ripe for the picking. And in November, the public is on the hunt for the perfect turkey. But it seems that only Runt, the smallest…",
  "image": {
    "src": "/media/2011/10/turkand-runt-cover.jpg",
    "alt": "Turk and Runt",
    "width": 210,
    "height": 266
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Fall",
      "slug": "fall",
      "url": "/topics/fall/"
    },
    {
      "name": "Farmed Animals",
      "slug": "farmed-animals",
      "url": "/topics/farmed-animals/"
    },
    {
      "name": "Lisa Wheeler",
      "slug": "lisa-wheeler",
      "url": "/topics/lisa-wheeler/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    },
    {
      "name": "Thanksgiving Books for Vegetarian Kids",
      "slug": "thanksgiving-books-for-vegetarian-kids",
      "url": "/topics/thanksgiving-books-for-vegetarian-kids/"
    },
    {
      "name": "Turkeys",
      "slug": "turkeys",
      "url": "/topics/turkeys/"
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
    "description": "Wishbone Farm is a popular place come fall. Pumpkins abound in October. Apples are ripe for the picking. And in November, the public is on the hunt for the perfect turkey. But it seems that only Runt, the smallest…",
    "image": "https://vegbooks.org/media/2011/10/turkand-runt-cover.jpg"
  },
  "previous": {
    "title": "Mister Seahorse",
    "url": "/reviews/mister-seahorse/"
  },
  "next": {
    "title": "Happy Thanksliving!",
    "url": "/reviews/happy-thanksliving/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/10/turkand-runt-cover.jpg"}><img src={"/media/2011/10/turkand-runt-cover.jpg"} alt={"Turk and Runt"} width={210} height={266} /></a>
      </figure>
      <p>{"Wishbone Farm is a popular place come fall. Pumpkins abound in October. Apples are ripe for the picking. And in November, the public is on the hunt for the perfect turkey. But it seems that only Runt, the smallest turkey of his four-member family understands what that means. His brother Turk, agile and athletic, is highly sought after. Ballet instructor Madame Waddelle remarks, “Look at zee size of zose drumsticks…Zat is a beautiful bird!” His mother beams and father puffs with pride, acting on the assumption that Turk is being recruited for his graceful twirls and somersaults. Smart, reality-checked Runt knows better. He throws himself on the barnyard floor, flaps, flops, hisses, sputters, and runs Ms. Waddelle (who now thinks that the birds are crazed) off the premise. Several other humorous anecdotes that scare off would be turkey buyers are scattered throughout the text and reinforce the idea that turkeys do not want to be dinner."}</p>
      <p>{"Spared this Thanksgiving, Runt warns, “Come December, folks begin planning their holiday dinners.” He has a Grade A plan in store, however, and this time his family not only listens, but are in on the arrangement. Think snowmen disguises. Overall, this is a cute, funny, pro-veggie holiday tale."}</p>
      <p>{"Find story-inspired activities and one veggie recipe on author Lisa Wheeler’s "}<a href={"http://www.lisawheelerbooks.com/LW/activities_files/TurkAndRunt.pdf"} target="_blank" rel="noopener noreferrer">{"website"}</a>{"."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
