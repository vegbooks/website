import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7394",
  "slug": "struffel",
  "url": "/reviews/struffel/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/04/25/struffel/",
  "title": "Struffel",
  "publishedAt": "2012-04-25",
  "publishedLabel": "April 25th, 2012",
  "excerpt": "Struffel is a cute book for toddlers. It includes two short stories in one; both focus on Struffel the bear. The first story is about Struffel enjoying the springtime, which makes it a perfect book to read to kids in…",
  "image": {
    "src": "/media/2012/04/struffel-the-bear.jpg",
    "alt": "Struffel",
    "width": 210,
    "height": 199
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
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Growing Up",
      "slug": "growing-up",
      "url": "/topics/growing-up/"
    },
    {
      "name": "Lowell Hildebrandt",
      "slug": "lowell-hildebrandt",
      "url": "/topics/lowell-hildebrandt/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Spring",
      "slug": "spring",
      "url": "/topics/spring/"
    },
    {
      "name": "Susan M. Maithya",
      "slug": "susan-m-maithya",
      "url": "/topics/susan-m-maithya/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "Struffel is a cute book for toddlers. It includes two short stories in one; both focus on Struffel the bear. The first story is about Struffel enjoying the springtime, which makes it a perfect book to read to kids in…",
    "image": "https://vegbooks.org/media/2012/04/struffel-the-bear.jpg"
  },
  "previous": {
    "title": "Momo Come Home",
    "url": "/reviews/momo-come-home/"
  },
  "next": {
    "title": "If All the Animals Came Inside",
    "url": "/reviews/if-all-the-animals-came-inside/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/04/struffel-the-bear.jpg"}><img src={"/media/2012/04/struffel-the-bear.jpg"} alt={"Struffel"} width={210} height={199} /></a>
      </figure>
      <p><em><a href={"http://struffelseries.authorsxpress.com/"} target="_blank" rel="noopener noreferrer">{"Struffel"}</a></em>{" is a cute book for toddlers. It includes two short stories in one; both focus on Struffel the bear. The first story is about Struffel enjoying the springtime, which makes it a perfect book to read to kids in the spring months. Struffel walks in the garden, watches flowers bloom, plays ball, chases butterflies, and plays with his animal friends who just like him, are happy that spring has arrived! After reading this book, parents can encourage kids to share some of their favorite springtime activities."}</p>
      <p>{"The second story is about Struffel and his new bed. One day Struffel realizes that he is too big for his bed, so he asks his Mom for a new bed. While he is at school she surprises him and buys him a new bed. He loves it, and from that day on, he sleeps soundly in his new bed. This is a good story for kids who are also transitioning from their baby cribs into “big boy or girl” beds. Both of these stories are very simple, and would be best suited for very young kids."}</p>
      <p>{"Ages 1 to 5."}</p>
    </div>
  );
}
