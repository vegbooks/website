import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3187",
  "slug": "i-dont-want-a-cool-cat",
  "url": "/reviews/i-dont-want-a-cool-cat/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/07/i-dont-want-a-cool-cat/",
  "title": "I Don’t Want a Cool Cat",
  "publishedAt": "2010-10-07",
  "publishedLabel": "October 7th, 2010",
  "excerpt": "In our house we love cats, and playing Cat Adoption Center is a favorite activity in our home, so I was happy to get a chance to review I Don’t Want a Cool Cat! — a silly, fun read. With its clever, simple rhymes and…",
  "image": {
    "src": "/media/2010/10/i-dont-want-a-cool-cat-final.jpg",
    "alt": "I Don’t Want a Cool Cat",
    "width": 210,
    "height": 228
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Emma Dodd",
      "slug": "emma-dodd",
      "url": "/topics/emma-dodd/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Rhyming Books",
      "slug": "rhyming-books",
      "url": "/topics/rhyming-books/"
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
    "description": "In our house we love cats, and playing Cat Adoption Center is a favorite activity in our home, so I was happy to get a chance to review I Don’t Want a Cool Cat! — a silly, fun read. With its clever, simple rhymes and…",
    "image": "https://vegbooks.org/media/2010/10/i-dont-want-a-cool-cat-final.jpg"
  },
  "previous": {
    "title": "Once I Was A Cardboard Box… but Now I’m a Book About Polar Bears!",
    "url": "/reviews/once-i-was-a-cardboard-box-but-now-im-a-book-about-polar-bears/"
  },
  "next": {
    "title": "Zen Shorts",
    "url": "/reviews/zen-shorts/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/i-dont-want-a-cool-cat-final.jpg"}><img src={"/media/2010/10/i-dont-want-a-cool-cat-final.jpg"} alt={"I Don’t Want a Cool Cat"} width={210} height={228} /></a>
      </figure>
      <p>{"In our house we love cats, and playing Cat Adoption Center is a favorite activity in our home, so I was happy to get a chance to review "}<a href={"http://www.powells.com/biblio/2-9780316036740-1"} target="_blank" rel="noopener noreferrer"><em>{"I Don’t Want a Cool Cat!"}</em></a>{" — a silly, fun read. With its clever, simple rhymes and bright illustrations of all different types of domestic cats (and a tiger), the story has broad appeal."}</p>
      <p>{"As the young girl describes what kinds of cats she doesn’t want – all falling into general categories of fancy, naughty or needy – kids can giggle along with the funny, rhyming descriptions of each kitty (my son particularly enjoys the slinky, dinky, twinky cat, who appears to be modeled on the "}<a href={"http://en.wikipedia.org/wiki/Sphynx_(cat)"} target="_blank" rel="noopener noreferrer">{"sphinx"}</a>{" cat). In the end, our girl gets just what she wanted – her favorite kind, which just happens to be the kind of kitty we all love."}</p>
      <p>{"Kiddos with cat friends will enjoy recognizing a number of feline traits throughout the book, and there are a number of opportunities to slip in some discussions about various issues pertaining to cat companions if a grown-up is so inclined (i.e. why a tiger isn’t a good choice). A cool read for kitty lovers ages 3 and up."}</p>
    </div>
  );
}
