import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5752",
  "slug": "whooo-loves-you",
  "url": "/reviews/whooo-loves-you/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/07/whooo-loves-you/",
  "title": "Whooo Loves You?",
  "publishedAt": "2011-08-07",
  "publishedLabel": "August 7th, 2011",
  "excerpt": "I read this lift a flap board book (a review copy from the publisher) to both my 1 year old and my 3 year old. My 1 year old was interested in pulling at the flaps which, sadly, are a structural weak point in a book…",
  "image": {
    "src": "/media/2011/08/whooo-loves-you.jpg",
    "alt": "Whooo Loves You?",
    "width": 210,
    "height": 210
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Baby Book",
      "slug": "baby-book",
      "url": "/topics/baby-book/"
    },
    {
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Cows",
      "slug": "cows",
      "url": "/topics/cows/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Love",
      "slug": "love",
      "url": "/topics/love/"
    },
    {
      "name": "Owls",
      "slug": "owls",
      "url": "/topics/owls/"
    },
    {
      "name": "Sandra Magsamen",
      "slug": "sandra-magsamen",
      "url": "/topics/sandra-magsamen/"
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
    "description": "I read this lift a flap board book (a review copy from the publisher) to both my 1 year old and my 3 year old. My 1 year old was interested in pulling at the flaps which, sadly, are a structural weak point in a book…",
    "image": "https://vegbooks.org/media/2011/08/whooo-loves-you.jpg"
  },
  "previous": {
    "title": "The Story of Doctor Dolittle",
    "url": "/reviews/the-story-of-doctor-doolitte/"
  },
  "next": {
    "title": "Eat Your Peas",
    "url": "/reviews/eat-your-peas/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/whooo-loves-you.jpg"}><img src={"/media/2011/08/whooo-loves-you.jpg"} alt={"Whooo Loves You?"} width={210} height={210} /></a>
      </figure>
      <p>{"I read this lift a flap board book (a review copy from the publisher) to both my 1 year old and my 3 year old. My 1 year old was interested in pulling at the flaps which, sadly, are a structural weak point in a book with otherwise sturdy pages (which is the case with most lift-the-flap books in the hands of babies, I’ve found). My 3 year old loved the word play and had me read it several times to her before “reading” it to her brother by herself."}</p>
      <p>{"Each two page spread features animals making varied statements of love. The birds sing about “tweethearts,” a cow says “I moo you,” an owl says “owl always love you,” and puppies say “we ruff you.” At the end of the book the reader says “I love you, I love you” to a child. The artwork is bright and, in what I presume is the artist’s signature style (we already own another book of hers, "}<em><a href={"http://www.goodreads.com/book/show/5870188-peek-a-boo-i-love-you"}>{"Peek-a-Boo, I Love You!"}</a></em>{"), the animals are all depicted with hidden hearts (for example, the cow’s spots are heart-shaped)."}</p>
      <p>{"A cheerful read aloud for ages as old as 3."}</p>
    </div>
  );
}
