import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6120",
  "slug": "unos-garden",
  "url": "/reviews/unos-garden/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/09/30/unos-garden/",
  "title": "Uno’s Garden",
  "publishedAt": "2011-09-30",
  "publishedLabel": "September 30th, 2011",
  "excerpt": "With a story reminiscent of Dr. Seuss’s The Lorax and Bill Peet’s The Wump World, Uno’s Garden features the vivid illustrations of Graeme Base (Animalia) and a story of how plants, animals and humans can either live…",
  "image": {
    "src": "/media/2011/10/unos-garden.jpg",
    "alt": "Uno’s Garden",
    "width": 210,
    "height": 225
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
      "name": "Andrea Zollman",
      "slug": "andrea-zollman",
      "url": "/topics/andrea-zollman/"
    },
    {
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Graeme Base",
      "slug": "graeme-base",
      "url": "/topics/graeme-base/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Urban Sprawl",
      "slug": "urban-sprawl",
      "url": "/topics/urban-sprawl/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    }
  ],
  "reviewer": {
    "name": "Andrea Zollman",
    "slug": "andrea-zollman",
    "url": "/contributors/andrea-zollman/",
    "aliases": [
      "ANDREA ZOLLMAN"
    ]
  },
  "seo": {
    "description": "With a story reminiscent of Dr. Seuss’s The Lorax and Bill Peet’s The Wump World, Uno’s Garden features the vivid illustrations of Graeme Base (Animalia) and a story of how plants, animals and humans can either live…",
    "image": "https://vegbooks.org/media/2011/10/unos-garden.jpg"
  },
  "previous": {
    "title": "The Owly Books",
    "url": "/reviews/the-owly-books/"
  },
  "next": {
    "title": "You Will Be My Friend",
    "url": "/reviews/you-will-be-my-friend/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/10/unos-garden.jpg"}><img src={"/media/2011/10/unos-garden.jpg"} alt={"Uno’s Garden"} width={210} height={225} /></a>
      </figure>
      <p>{"With a story reminiscent of Dr. Seuss’s "}<em>{"The Lorax"}</em>{" and Bill Peet’s "}<em>{"The Wump World, Uno’s Garden"}</em>{" features the vivid illustrations of Graeme Base ("}<em><a href={"/reviews/animalia/"}>{"Animalia"}</a></em>{") and a story of how plants, animals and humans can either live in harmony or not, depending on the choices those humans make."}</p>
      <p>{"While hiking one day, elf-like Uno discovers a forest, where he decides to build his home. The forest is filled with animals from Base’s imagination: winged “moopaloops;” bunny-faced “puddlebuts;” and a “snortlepig.” It is a wondrous forest, and other people join Uno. Soon the settlement grows into a village. While the number of buildings and people increase, the number of animals and plants decrease. The village becomes a town, and tourists descend upon it. Yet, “Uno kept working in his garden.” A train, spewing smoke and ash into the air, whizzes around the now polluted, sprawling city. Smokestacks, resembling long bottlenecks, release smoke into the air. Only a few animals remain, including two “pricklebacks,” green, snail-like animals with lumpy conical shells on their backs."}</p>
      <p>{"Eventually, the citizens of this crowded, polluted city abandon it: all except Uno, who tends his garden in an alley surrounded by towering, empty buildings. Uno’s children and grandchildren record the resurgence of plants and animals and build structures that blend into the forest rather than destroy it. At the book’s end, a fold-out page reveals a forest teeming with life and a city that is in perfect balance with it."}</p>
      <p>{"Throughout the book, Base notes at the top of each two-page spread how many animals and plants survive in comparison to the number of buildings that populate the forest. This book provides younger children with an introduction to the ideas of conservation and sustainability, and they and their parents will appreciate the story’s simplicity as well as the rich illustrations that accompany it."}</p>
      <p>{"Ages 4 to 8."}</p>
    </div>
  );
}
