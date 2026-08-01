import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8300",
  "slug": "three-year-olds",
  "url": "/reviews/three-year-olds/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/10/25/three-year-olds/",
  "title": "Top Picks for Three-Year-Olds (And Happy Birthday to Us!)",
  "publishedAt": "2012-10-25",
  "publishedLabel": "October 25th, 2012",
  "excerpt": "By JESSICA ALMY Vegbooks is three today! You’ve read our lists of the best books for one-year-olds and two-year-olds, and we’re keeping the tradition by celebrating our birthday with recommendations for…",
  "image": {
    "src": "/media/2012/03/mercy-watson-to-the-rescue.jpg",
    "alt": "Top Picks for Three-Year-Olds (And Happy Birthday to Us!)",
    "width": 210,
    "height": 270
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
      "name": "Best Books for Vegetarian Kids",
      "slug": "best-books-for-vegetarian-kids",
      "url": "/topics/best-books-for-vegetarian-kids/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
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
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
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
    "description": "By JESSICA ALMY Vegbooks is three today! You’ve read our lists of the best books for one-year-olds and two-year-olds, and we’re keeping the tradition by celebrating our birthday with recommendations for…",
    "image": "https://vegbooks.org/media/2012/03/mercy-watson-to-the-rescue.jpg"
  },
  "previous": {
    "title": "The Peace Book",
    "url": "/reviews/the-peace-book/"
  },
  "next": {
    "title": "I Say, You Say Animal Sounds and I Say, You Say Opposites!",
    "url": "/reviews/i-say-you-say-animal-sounds-and-i-say-you-say-opposites/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/03/mercy-watson-to-the-rescue.jpg"}><img src={"/media/2012/03/mercy-watson-to-the-rescue.jpg"} alt={"Top Picks for Three-Year-Olds (And Happy Birthday to Us!)"} width={210} height={270} /></a>
      </figure>
      <p><strong>{"By "}<a href={"/about/"}>{"JESSICA ALMY"}</a></strong></p>
      <p>{"Vegbooks is three today! You’ve read our lists of "}<a href={"/reviews/happy-birthday-baby/"} target="_blank" rel="noopener noreferrer">{"the best books for one-year-olds"}</a>{" and "}<a href={"/reviews/our-baby-turns-two/"}>{"two-year-olds"}</a>{", and we’re keeping the tradition by celebrating our birthday with recommendations for three-year-old kids."}</p>
      <p><strong>{"Homa Woodrum"}</strong>{" — whose children are two and four — recommends "}<a href={"/reviews/mercy-watson-to-the-rescue/"}><em>{"Mercy Watson to the Rescue"}</em></a>{", "}<a href={"/reviews/houndsley-and-catina/"}><em>{"Houndsley and Catina"}</em></a>{", and the "}<a href={"/reviews/the-owly-books/"}><em>{"Owly"}</em></a>{" series."}</p>
      <p>{"For those into ebooks, "}<strong>{"Jane Cowles"}</strong>{"suggests "}<a href={"/reviews/the-wiener-dog-magnet/"}><em>{"The Wiener Dog Magnet"}</em></a>{"."}</p>
      <p><strong>{"Robyn Moore"}</strong>{" picks "}<a href={"/reviews/the-peace-book/"}><em>{"The Peace Book"}</em></a>{" from favorite author Todd Parr. Among Parr’s other wonderful books are "}<a href={"/reviews/the-thankful-book/"}><em>{"The Thankful Book"}</em></a>{", "}<a href={"/reviews/the-earth-book-two-perspectives/"}><em>{"The Earth Book"}</em></a>{",and "}<a href={"/reviews/the-im-not-scared-book/"}><em>{"The I’m Not Scared Book"}</em></a>{"."}</p>
      <p>{"Looking for some music to accompany your reading, or an excuse for an impromptu dance party? "}<strong>{"Jennifer Gannett"}</strong>{" recommends “"}<a href={"/reviews/only-one-ocean/"}>{"Only One Ocean"}</a>{"” by the Banana Slug String Band. They use big words in their songs, she says, but the tunes are so fun and catchy that it’s sure to be favorite, even among little ones."}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2009/11/cinder1.jpg"}><img src={"/media/2009/11/cinder1.jpg"} alt={""} width={210} height={217} /></a>
      </figure>
      <p>{"As for me, I have to think back to the early days of Vegbooks, when my daughter (turning seven this month!) was still three. Those first books that inspired me to launch Vegbooks — "}<a href={"/reviews/the-cinder-eyed-cats/"}><em>{"The Cinder-Eyed Cats"}</em></a>{" and "}<a href={"/reviews/olivia/"}><em>{"Olivia"}</em></a>{" — remain favorites."}</p>
      <p>{"What did we miss? Tell us in the comments!"}</p>
    </div>
  );
}
