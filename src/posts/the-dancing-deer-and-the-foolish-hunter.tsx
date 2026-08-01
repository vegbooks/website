import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1863",
  "slug": "the-dancing-deer-and-the-foolish-hunter",
  "url": "/reviews/the-dancing-deer-and-the-foolish-hunter/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/01/the-dancing-deer-and-the-foolish-hunter/",
  "title": "The Dancing Deer and the Foolish Hunter",
  "publishedAt": "2010-06-01",
  "publishedLabel": "June 1st, 2010",
  "excerpt": "Based on the truisms that all life is interconnected and that we cannot artificially replicate nature, The Dancing Deer and the Foolish Hunter follows a hunter who discovers a deer dancing joyfully in the forest and…",
  "image": {
    "src": "/media/2010/06/dancingdeer.jpg",
    "alt": "The Dancing Deer and the Foolish Hunter",
    "width": 198,
    "height": 240
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
      "name": "Deer",
      "slug": "deer",
      "url": "/topics/deer/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Elisa Kleven",
      "slug": "elisa-kleven",
      "url": "/topics/elisa-kleven/"
    },
    {
      "name": "Hunting",
      "slug": "hunting",
      "url": "/topics/hunting/"
    },
    {
      "name": "Marsha Rakestraw",
      "slug": "marsha-rakestraw",
      "url": "/topics/marsha-rakestraw/"
    },
    {
      "name": "Nature Books",
      "slug": "nature-books",
      "url": "/topics/nature-books/"
    },
    {
      "name": "Respect for Nature",
      "slug": "respect-for-nature",
      "url": "/topics/respect-for-nature/"
    }
  ],
  "reviewer": {
    "name": "Marsha Rakestraw",
    "slug": "marsha-rakestraw",
    "url": "/contributors/marsha-rakestraw/",
    "aliases": [
      "MARSHA RAKESTRAW"
    ]
  },
  "seo": {
    "description": "Based on the truisms that all life is interconnected and that we cannot artificially replicate nature, The Dancing Deer and the Foolish Hunter follows a hunter who discovers a deer dancing joyfully in the forest and…",
    "image": "https://vegbooks.org/media/2010/06/dancingdeer.jpg"
  },
  "previous": {
    "title": "Mama, Is It Summer Yet?",
    "url": "/reviews/mama-is-it-summer-yet/"
  },
  "next": {
    "title": "Too Many Pears",
    "url": "/reviews/too-many-pears/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/dancingdeer.jpg"}><img src={"/media/2010/06/dancingdeer.jpg"} alt={"The Dancing Deer and the Foolish Hunter"} width={198} height={240} /></a>
      </figure>
      <p>{"Based on the truisms that all life is interconnected and that we cannot artificially replicate nature, "}<em><a href={"http://www.elisakleven.com/books.html"} target="_blank" rel="noopener noreferrer">{"The Dancing Deer and the Foolish Hunter"}</a></em>{" follows a hunter who discovers a deer dancing joyfully in the forest and kidnaps her to sell to the circus. When the deer refuses to dance without the singing birds, the hunter captures and cages two songbirds (after first trying to cajole the deer to dance to the squawking radio). When the birds can’t sing without the whistling of the trees, the hunter uproots some, and so on. At each obstacle, the hunter unsuccessfully tries to simulate the natural world (a glass of water with salt for the sea, frozen fish sticks for live fish, etc.), before snatching something else from its home. Eventually, the deer convinces the hunter to return all the plants, animals and elements that he abducted back to the land and sea with the promise that she’ll teach him to dance."}</p>
      <p>{"While the “web of life” message is a tad heavy, and the circus premise seems a bit contrived, the whimsical collage illustrations, the lively language choices, and the worthy message make for an engaging story that offers numerous opportunities for discussion (the interconnectedness of life, the exploitation of animals, the “replacement” of nature, peaceful versus more violent pastimes, etc.). Veg parents should note that the hunter wears a coonskin cap and carries a rifle."}</p>
      <p>{"Ages 5-9."}</p>
    </div>
  );
}
