import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6020",
  "slug": "twist-and-ernest",
  "url": "/reviews/twist-and-ernest/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/09/14/twist-and-ernest/",
  "title": "Twist and Ernest",
  "publishedAt": "2011-09-14",
  "publishedLabel": "September 14th, 2011",
  "excerpt": "I recently received a copy of Twist and Ernest to review. I was immediately captivated by the illustrations and thoroughly enjoyed the story of the little donkey who is very earnest indeed. Ernest is a small, lonely…",
  "image": {
    "src": "/media/2011/09/twist-and-ernest-rgb.jpg",
    "alt": "Twist and Ernest",
    "width": 210,
    "height": 169
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
      "name": "Carol A. Camburn",
      "slug": "carol-a-camburn",
      "url": "/topics/carol-a-camburn/"
    },
    {
      "name": "Donkeys",
      "slug": "donkeys",
      "url": "/topics/donkeys/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Horses",
      "slug": "horses",
      "url": "/topics/horses/"
    },
    {
      "name": "Illustrations",
      "slug": "illustrations",
      "url": "/topics/illustrations/"
    },
    {
      "name": "Interspecies Friendship",
      "slug": "interspecies-friendship",
      "url": "/topics/interspecies-friendship/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Laura T. Barnes",
      "slug": "laura-t-barnes",
      "url": "/topics/laura-t-barnes/"
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
    "description": "I recently received a copy of Twist and Ernest to review. I was immediately captivated by the illustrations and thoroughly enjoyed the story of the little donkey who is very earnest indeed. Ernest is a small, lonely…",
    "image": "https://vegbooks.org/media/2011/09/twist-and-ernest-rgb.jpg"
  },
  "previous": {
    "title": "Lucky Pigs",
    "url": "/reviews/lucky-pigs/"
  },
  "next": {
    "title": "The Girl and the Elephant",
    "url": "/reviews/the-girl-and-the-elephant/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/09/twist-and-ernest-rgb.jpg"}><img src={"/media/2011/09/twist-and-ernest-rgb.jpg"} alt={"Twist and Ernest"} width={210} height={169} /></a>
      </figure>
      <p>{"I recently received a copy of "}<a href={"http://www.amazon.com/gp/product/0967468108/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0967468108"} target="_blank" rel="noopener noreferrer"><em>{"Twist and Ernest"}</em></a>{" to review. I was immediately captivated by the illustrations and thoroughly enjoyed the story of the little donkey who is very earnest indeed."}</p>
      <p>{"Ernest is a small, lonely donkey. Overjoyed when he gets a pasture mate in the form of Twist, a big, beautiful show horse, Ernest enthusiastically gives Twist a tour of his new home, happily pointing out all of the finer points, such as the pond, stream and beautiful green pasture. Unfortunately, Twist does not share Ernest’s enthusiasm about his new home, nor does he care to hang out with a scruffy little donkey."}</p>
      <p>{"Eventually, after a brief adjustment period, Twist begins to see things Ernest’s way and relaxes into both his new home and his new friendship with the little donkey. The two of them become best friends and live their days happily and with great affection for each other."}</p>
      <p>{"This is a sweet tale of friendship and love. That Twist eventually adjusts to Ernest’s energy and affection is a happy ending, though the plot glosses over some of the more complex social dances that humans (even small ones) often need to do in order to make new friends."}</p>
      <p>{"We enjoyed this book but parents, teachers and caregivers of children with social or pragmatic deficits will want to know that they may need to be ready to discuss the fact that Ernest initially misses some very clear social cues from Twist and the donkey is often depicted invading the horse’s personal space."}</p>
      <p>{"Ages 4 and up."}</p>
    </div>
  );
}
