import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5328",
  "slug": "the-snail-and-the-whale",
  "url": "/reviews/the-snail-and-the-whale/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/06/15/the-snail-and-the-whale/",
  "title": "The Snail and the Whale",
  "publishedAt": "2011-06-15",
  "publishedLabel": "June 15th, 2011",
  "excerpt": "The Snail and the Whale was so entertaining that it helped my four-year-old and my friend’s active two-year-old stay seated and riveted during our lengthy lunch at a restaurant. Sure, I had to read between bites but…",
  "image": {
    "src": "/media/2011/06/the-snail-and-the-whale.jpg",
    "alt": "The Snail and the Whale",
    "width": 210,
    "height": 191
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
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Axel Scheffler",
      "slug": "axel-scheffler",
      "url": "/topics/axel-scheffler/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Invertebrate Animals",
      "slug": "invertebrate-animals",
      "url": "/topics/invertebrate-animals/"
    },
    {
      "name": "Julia Donaldson",
      "slug": "julia-donaldson",
      "url": "/topics/julia-donaldson/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Snails",
      "slug": "snails",
      "url": "/topics/snails/"
    },
    {
      "name": "Whales",
      "slug": "whales",
      "url": "/topics/whales/"
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
    "description": "The Snail and the Whale was so entertaining that it helped my four-year-old and my friend’s active two-year-old stay seated and riveted during our lengthy lunch at a restaurant. Sure, I had to read between bites but…",
    "image": "https://vegbooks.org/media/2011/06/the-snail-and-the-whale.jpg"
  },
  "previous": {
    "title": "What’s Your Sound, Hound the Hound?",
    "url": "/reviews/whats-your-sound-hound-the-hound/"
  },
  "next": {
    "title": "A Giraffe Goes to Paris",
    "url": "/reviews/a-giraffe-goes-to-paris/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/06/the-snail-and-the-whale.jpg"}><img src={"/media/2011/06/the-snail-and-the-whale.jpg"} alt={"The Snail and the Whale"} width={210} height={191} /></a>
      </figure>
      <p><em><a href={"http://annieandaunt.blogspot.com/2011/06/guest-blog-dynamite-duo.html"} target="_blank" rel="noopener noreferrer">{"The Snail and the Whale"}</a></em>{" was so entertaining that it helped my four-year-old and my friend’s active two-year-old stay seated and riveted during our lengthy lunch at a restaurant. Sure, I had to read between bites but the rhyming couplets were a succulent mouthful and the adorable illustrations were packed with delectable details that the kids just ate up."}</p>
      <p>{"A wander-lusting, spelling snail advertises for and boards the tail of a tour-guiding "}<a href={"http://animals.nationalgeographic.com/animals/mammals/humpback-whale/"} target="_blank" rel="noopener noreferrer">{"humpback whale"}</a>{" for a cruise around the world. They see the magnificent sights of the sky, sea, and land until the whale is pushed off course by speedboats and gets beached. Although “the snail felt helpless and terribly small,” she charges to the rescue in an unconventional manner."}</p>
      <p>{"I love the emphasis on the beauty of the natural world, the tasteful pro-environment message, and especially the emphasis that small or large, we can make a huge difference together. I highly recommend this sweet and savory “save the whale” adventure tale that is appetizing to both genders and palatable for adults as well as children."}</p>
      <p>{"Ages 3 and up."}</p>
    </div>
  );
}
