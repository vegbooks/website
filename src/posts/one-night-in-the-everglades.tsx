import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7749",
  "slug": "one-night-in-the-everglades",
  "url": "/reviews/one-night-in-the-everglades/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/06/21/one-night-in-the-everglades/",
  "title": "One Night in the Everglades",
  "publishedAt": "2012-06-21",
  "publishedLabel": "June 21st, 2012",
  "excerpt": "Aimed at ages 8 and up, One Night in the Everglades is in interesting combination of picture book and environmental science text. There are beautiful illustrations to accompany the story of a night in the Florida…",
  "image": {
    "src": "/media/2012/06/everglades-cover.jpg",
    "alt": "One Night in the Everglades",
    "width": 210,
    "height": 198
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
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Everglades",
      "slug": "everglades",
      "url": "/topics/everglades/"
    },
    {
      "name": "Florida",
      "slug": "florida",
      "url": "/topics/florida/"
    },
    {
      "name": "Frogs",
      "slug": "frogs",
      "url": "/topics/frogs/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Joyce Mihran Turley",
      "slug": "joyce-mihran-turley",
      "url": "/topics/joyce-mihran-turley/"
    },
    {
      "name": "Laurel Larsen",
      "slug": "laurel-larsen",
      "url": "/topics/laurel-larsen/"
    },
    {
      "name": "Nonfiction",
      "slug": "nonfiction",
      "url": "/topics/nonfiction/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Science",
      "slug": "science",
      "url": "/topics/science/"
    },
    {
      "name": "Science Books",
      "slug": "science-books",
      "url": "/topics/science-books/"
    },
    {
      "name": "Spanish",
      "slug": "spanish",
      "url": "/topics/spanish/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    }
  ],
  "reviewer": {
    "name": "Homa Woodrum",
    "slug": "homa-woodrum",
    "url": "/contributors/homa-woodrum/",
    "aliases": [
      "HOMA WOODRUM"
    ]
  },
  "seo": {
    "description": "Aimed at ages 8 and up, One Night in the Everglades is in interesting combination of picture book and environmental science text. There are beautiful illustrations to accompany the story of a night in the Florida…",
    "image": "https://vegbooks.org/media/2012/06/everglades-cover.jpg"
  },
  "previous": {
    "title": "Stink City",
    "url": "/reviews/stink-city/"
  },
  "next": {
    "title": "When Anju Loved Being an Elephant",
    "url": "/reviews/anju/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/06/everglades-cover.jpg"}><img src={"/media/2012/06/everglades-cover.jpg"} alt={"One Night in the Everglades"} width={210} height={198} /></a>
      </figure>
      <p>{"Aimed at ages 8 and up, "}<em><a href={"http://www.nationalparkstraveler.com/review/2012/fireside-read-one-night-everglades9991"} target="_blank" rel="noopener noreferrer">{"One Night in the Everglades"}</a></em>{" is in interesting combination of picture book and environmental science text. There are beautiful illustrations to accompany the story of a night in the Florida Everglades, an area teeming with life, much of which is endangered. The first third of the book details some of the plants and animals of the area and then leads into the author’s night spent researching and taking samples to determine the health of the ecosystem and what could be done to save it."}</p>
      <p>{"My daughter is not in the target age range but she did enjoy the illustrations. The text is supplemented by sidebars with information about new terms used in the book, such as floc, which is made up of decaying plant material. A new plant (to me) was the "}<em>{"Utricularia,"}</em>{"a carnivorous plant that traps zooplankton. Another portion of the book of note for veg families comes when Laurel and Dan, the scientists in the book, are happened upon by a “frog gigger,” someone that catches frogs for consumption in restaurants. The book, in a matter of fact way, describes what a frog gigger does and shares that the gigger is glad for conservation efforts because “[h]is way of life, and that of his friends and family, depends on the Everglades having healthy plants and animals and lots of clean water.” No mention is made of whether this is a form of exploiting the area but the advocacy component of the book is fairly restrained so this approach is in keeping with that established tone."}</p>
      <p>{"Tips at the end of the book suggest turning the water off when brushing your teeth, taking quick showers as opposed to baths, fixing leaks, and recycling to preserve the natural treasure of the Everglades. If the child in your life is interested in the work that scientists do in the field, I think this would be a neat book to check out but as usual be ready to discuss some of the issues raised. I especially enjoyed the children’s illustrations of scenes from the story that are part of the book’s design."}</p>
      <p>{"Also available in a Spanish language edition."}</p>
    </div>
  );
}
