import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6808",
  "slug": "the-it-doesnt-matter-suit",
  "url": "/reviews/the-it-doesnt-matter-suit/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/01/18/the-it-doesnt-matter-suit/",
  "title": "The It-Doesn’t-Matter Suit",
  "publishedAt": "2012-01-18",
  "publishedLabel": "January 18th, 2012",
  "excerpt": "The other day, my 6-year-old was slumped over Sylvia Plath, moping. Before you assume she’s terribly precocious or that I’m semi-negligent in giving my child depressing books, however, let me direct you to a recent…",
  "image": {
    "src": "/media/2012/01/doesntmatter2.jpg",
    "alt": "The It-Doesn’t-Matter Suit",
    "width": 210,
    "height": 315
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
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
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
      "name": "Fishing",
      "slug": "fishing",
      "url": "/topics/fishing/"
    },
    {
      "name": "Hunting",
      "slug": "hunting",
      "url": "/topics/hunting/"
    },
    {
      "name": "Sylvia Plath",
      "slug": "sylvia-plath",
      "url": "/topics/sylvia-plath/"
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
    "description": "The other day, my 6-year-old was slumped over Sylvia Plath, moping. Before you assume she’s terribly precocious or that I’m semi-negligent in giving my child depressing books, however, let me direct you to a recent…",
    "image": "https://vegbooks.org/media/2012/01/doesntmatter2.jpg"
  },
  "previous": {
    "title": "All Kinds of Kisses",
    "url": "/reviews/all-kinds-of-kisses/"
  },
  "next": {
    "title": "Born to Be Wild (2012)",
    "url": "/reviews/born-to-be-wild/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/01/doesntmatter2.jpg"}><img src={"/media/2012/01/doesntmatter2.jpg"} alt={"The It-Doesn’t-Matter Suit"} width={210} height={315} /></a>
      </figure>
      <p>{"The other day, my 6-year-old was slumped over Sylvia Plath, moping. Before you assume she’s terribly precocious or that I’m semi-negligent in giving my child depressing books, however, let me direct you to a recent article on Brain Pickings about "}<a href={"http://www.brainpickings.org/index.php/2011/07/25/childrens-books-by-adult-authors-2/"} target="_blank" rel="noopener noreferrer">{"obscure children’s books by famous “adult” lit authors"}</a>{"."}</p>
      <p>{"It’s true, Sylvia Plath wrote a children’s book. (I could have sworn Plath’s book was on Brain Pickings’ list — it’s not. Apparently, the list just inspired me to dig deeper. Of course, none of this explains my kiddo’s moping either, but that’s neither here nor there, so back to the book.)"}</p>
      <p>{"Plath penned "}<em>{"The It-Doesn’t-Matter Suit"}</em>{", a strange tale about a boy who lives in an alpine village and longs for a suit. One day, his family receives a package with the name of the addressee obscured, and so when they open it to discover that it contains … drumroll, please … a suit, the father and each of the boys tries it on, from largest to littlest. The suit is dismissed by one person after the other, each of whom worries about whether its color (mustard-yellow) and texture (woolly) are appropriate for the activity he enjoys most, from skiing and bicycling to hunting and fishing. Finally, our protagonist tries on the suit, and it’s perfect. He wears it around the village, and he is able to accomplish each of the activities that the previous wearers had in mind — plus, to his delight, all the dogs and cats follow him around."}</p>
      <p>{"If your family is vegetarian or vegan for ethical reasons, I’m sure your ears already pricked up at the mention of hunting and fishing. The book does depict a gun, a boy hooking a fish, and a fox being led out of the forest with a leash (?!). Each family will have to decide whether the depiction of these activities, which ranges from matter-of-fact to bizarre, is appropriate for them."}</p>
      <p>{"This quirky book is geared to kids ages 5 to 8."}</p>
    </div>
  );
}
