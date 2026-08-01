import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8240",
  "slug": "were-sailing-to-galapagos",
  "url": "/reviews/were-sailing-to-galapagos/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/09/30/were-sailing-to-galapagos/",
  "title": "We’re Sailing to Galapagos",
  "publishedAt": "2012-09-30",
  "publishedLabel": "September 30th, 2012",
  "excerpt": "We’re Sailing to Galapagos by Laurie Krebs (illustrated by Grazia Restelli) explores some of the unique creatures living on the Galapagos Islands. The author steps us through a week-long visit to the Pacific where we…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "We’re Sailing to Galapagos",
    "width": 210,
    "height": 139
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
      "name": "Charles Darwin",
      "slug": "charles-darwin",
      "url": "/topics/charles-darwin/"
    },
    {
      "name": "Crabs",
      "slug": "crabs",
      "url": "/topics/crabs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Grazia Restelli",
      "slug": "grazia-restelli",
      "url": "/topics/grazia-restelli/"
    },
    {
      "name": "Heather Clark",
      "slug": "heather-clark",
      "url": "/topics/heather-clark/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Laurie Krebs",
      "slug": "laurie-krebs",
      "url": "/topics/laurie-krebs/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    },
    {
      "name": "Pacific Ocean",
      "slug": "pacific-ocean",
      "url": "/topics/pacific-ocean/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Tortoises",
      "slug": "tortoises",
      "url": "/topics/tortoises/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
    }
  ],
  "reviewer": {
    "name": "Heather Clark",
    "slug": "heather-clark",
    "url": "/contributors/heather-clark/",
    "aliases": [
      "HEATHER CLARK"
    ]
  },
  "seo": {
    "description": "We’re Sailing to Galapagos by Laurie Krebs (illustrated by Grazia Restelli) explores some of the unique creatures living on the Galapagos Islands. The author steps us through a week-long visit to the Pacific where we…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Pigmares: Porcine Poems of the Silver Screen",
    "url": "/reviews/pigmares-porcine-poems-of-the-silver-screen/"
  },
  "next": {
    "title": "Apple",
    "url": "/reviews/apple/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"We’re Sailing to Galapagos"} width={210} height={139} /></a>
      </figure>
      <p><em>{"We’re Sailing to Galapagos"}</em>{" by Laurie Krebs (illustrated by Grazia Restelli) explores some of the unique creatures living on the "}<a href={"http://www.galapagos.org/"} target="_blank" rel="noopener noreferrer">{"Galapagos Islands"}</a>{"."}</p>
      <p>{"The author steps us through a week-long visit to the Pacific where we join the inhabitants of a small red sailboat as they experience a new creature every day."}</p>
      <p>{"Each set of pages announces the day of the week, introduces the animal, and discusses their distinct physical characteristics and mannerisms using clever rhymes and bright illustrations. Chorus repetition pulls the reader through the book with the refrain, “We’re sailing to Galapagos. I wonder who we’ll see.”"}</p>
      <p>{"The rare animals discussed will likely be unfamiliar to most young readers, and include albatrosses, giant tortoises, lava crabs, and blue-foot boobies, among others. The pictures are mostly collage style, somewhat similar to those found in Eric Carle books such as the popular "}<em>{"Very Hungry Caterpillar"}</em>{"."}</p>
      <p>{"There is no discussion of evolution, environmentalism or other deep issues to be found within the story text; it’s just a happy book accompanied by some fascinating facts and great illustrations."}</p>
      <p>{"This colorful voyage is designed for kids preschool to grade 3. End notes go into further depth about the Galapagos, Charles Darwin, and some additional animals that were not included in the story."}</p>
    </div>
  );
}
