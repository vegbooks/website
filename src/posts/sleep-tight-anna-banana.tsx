import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9590",
  "slug": "sleep-tight-anna-banana",
  "url": "/reviews/sleep-tight-anna-banana/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/03/20/sleep-tight-anna-banana/",
  "title": "Sleep Tight, Anna Banana",
  "publishedAt": "2014-03-20",
  "publishedLabel": "March 20th, 2014",
  "excerpt": "Written in the present tense with a graphic novel style, Sleep Tight, Anna Banana by Dominique Roques and illustrated by Alexis Dormal is the first picture book from publisher First Second Books and the first of a…",
  "image": {
    "src": "/media/2014/03/anna.jpg",
    "alt": "Anna",
    "width": 210,
    "height": 156
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
      "name": "Alexis Dormal",
      "slug": "alexis-dormal",
      "url": "/topics/alexis-dormal/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Dominique Roques",
      "slug": "dominique-roques",
      "url": "/topics/dominique-roques/"
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
      "name": "Mark Siegel",
      "slug": "mark-siegel",
      "url": "/topics/mark-siegel/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "Written in the present tense with a graphic novel style, Sleep Tight, Anna Banana by Dominique Roques and illustrated by Alexis Dormal is the first picture book from publisher First Second Books and the first of a…",
    "image": "https://vegbooks.org/media/2014/03/anna.jpg"
  },
  "previous": {
    "title": "Catching the Wild Waiyuuzee",
    "url": "/reviews/catching-the-wild-waiyuuzee/"
  },
  "next": {
    "title": "I Love You Just Enough",
    "url": "/reviews/i-love-you-just-enough/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/sleep-tight-anna-banana/"}><img src={"/media/2014/03/anna.jpg"} alt={"Anna"} width={210} height={156} /></a>
      </figure>
      <p>{"Written in the present tense with a graphic novel style, "}<em>{"Sleep Tight, Anna Banana"}</em>{" by Dominique Roques and illustrated by Alexis Dormal is the first picture book from publisher First Second Books and the first of a planned series of books featuring Anna Banana."}</p>
      <p>{"Anna is a little girl that wants to stay up reading late and night even though her stuffed animals want to go to sleep. She won’t even let them scoot away to get some rest, preferring them next to her while she leaves the lights on to read. But when Anna wants to go to sleep the animals figure turnabout is fair play. An apology from Anna is all it takes to get everyone on the same sleep schedule."}</p>
      <p>{"This book is very straightforward and sweet. I love the idea of a little one staying up late to read instead of fighting bedtime for some other reason. I know I used to pretend to go to bed only to try to finish books by flashlight under the covers as a kid. Granted, my parents enforced a 7:30 pm bedtime for us even up to high school so my rule breaking was to be expected, but I digress. There should be no issues in this book for veg families as the animals are plush ones given life by Anna’s imagination. This appealed more to my three-and-a-half-year-old son than my five-and-a-half-year-old daughter but both had fun with the lively illustrations and playful story."}</p>
      <p><em>{"All ages."}</em></p>
      <p><em>{"Advance reader edition provided by the publisher, First Second Books. Detailed images can be found "}<a href={"http://www.firstsecondbooks.com/books/new-book-sleep-tight-anna-banana/"} target="_blank" rel="noopener noreferrer">{"here"}</a>{"."}</em><em>{"Interior images "}<a href={"http://us.macmillan.com/sleeptightannabanana/AlexisDormal"} target="_blank" rel="noopener noreferrer">{"here"}</a>{"."}</em></p>
    </div>
  );
}
