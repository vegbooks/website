import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2487",
  "slug": "whose-garden-is-it",
  "url": "/reviews/whose-garden-is-it/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/05/whose-garden-is-it/",
  "title": "Whose Garden Is It?",
  "publishedAt": "2010-07-05",
  "publishedLabel": "July 5th, 2010",
  "excerpt": "As someone who believes that at the very least animals deserve rights equal to, say, corporations, I’m disturbed that our legal system treats them as property. So when I read Mary Ann Hoberman’s Whose Garden Is It?,…",
  "image": {
    "src": "/media/2010/07/garden.jpg",
    "alt": "Whose Garden Is It?",
    "width": 215,
    "height": 233
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
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Garden",
      "slug": "garden",
      "url": "/topics/garden/"
    },
    {
      "name": "Gardening",
      "slug": "gardening",
      "url": "/topics/gardening/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Insects",
      "slug": "insects",
      "url": "/topics/insects/"
    },
    {
      "name": "Jane Dyer",
      "slug": "jane-dyer",
      "url": "/topics/jane-dyer/"
    },
    {
      "name": "Mary Ann Hoberman",
      "slug": "mary-ann-hoberman",
      "url": "/topics/mary-ann-hoberman/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Rabbits",
      "slug": "rabbits",
      "url": "/topics/rabbits/"
    },
    {
      "name": "Urban Wildlife",
      "slug": "urban-wildlife",
      "url": "/topics/urban-wildlife/"
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
    "description": "As someone who believes that at the very least animals deserve rights equal to, say, corporations, I’m disturbed that our legal system treats them as property. So when I read Mary Ann Hoberman’s Whose Garden Is It?,…",
    "image": "https://vegbooks.org/media/2010/07/garden.jpg"
  },
  "previous": {
    "title": "Meow Ruff",
    "url": "/reviews/meow-ruff/"
  },
  "next": {
    "title": "Flush",
    "url": "/reviews/flush/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/07/garden.jpg"} alt={"Whose Garden Is It?"} width={215} height={233} />
      </figure>
      <p>{"As someone who believes that at the very least "}<a href={"http://animals.change.org/blog/view/legal_rights_for_animals_the_debate"} target="_blank" rel="noopener noreferrer">{"animals deserve rights"}</a>{" equal to, say, "}<a href={"http://challengeoppression.com/2010/01/25/on-corporate-personhood-and-animal-rights/"} target="_blank" rel="noopener noreferrer">{"corporations"}</a>{", I’m disturbed that our legal system treats them as property. So when I read Mary Ann Hoberman’s "}<em><a href={"http://www.maryannhoberman.com/books/whoseGardenIsIt.html"} target="_blank" rel="noopener noreferrer">{"Whose Garden Is It?"}</a></em>{", I was delighted to see that she tackled a complex issue like ownership in a way that is both eco- and animal-friendly and accessible to small children."}</p>
      <p>{"Ms. Hoberman’s thoughtful text, accompanied by "}<a href={"http://www.rmichelson.com/Artist_Pages/DyerJane/Jane%20Dyer%20Prints.html"} target="_blank" rel="noopener noreferrer">{"Jane Dyer’s"}</a>{" whimsical illustrations, gives voice to the different interests who claim a suburban garden as their own: the gardener, the wildlife, the plants, the soil, the seed, and the sun. At the end, the reader is left with no definitive answer to the question, “Whose Garden Is It?” Instead, we’re all left to wonder what’s really ours, and what it’s like to live in a community of beings."}</p>
      <p>{"Teachers might enjoy learning that the story is also available in "}<a href={"http://www.schoollibraryjournal.com/article/CA6445419.html"} target="_blank" rel="noopener noreferrer">{"DVD format"}</a>{"."}</p>
      <p>{"Ages 4 to 8."}</p>
    </div>
  );
}
