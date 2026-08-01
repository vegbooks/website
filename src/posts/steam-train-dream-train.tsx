import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8959",
  "slug": "steam-train-dream-train",
  "url": "/reviews/steam-train-dream-train/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/06/24/steam-train-dream-train/",
  "title": "Steam Train, Dream Train",
  "publishedAt": "2013-06-24",
  "publishedLabel": "June 24th, 2013",
  "excerpt": "“Don’t judge a book by its cover” is cliche for a reason and I wanted to be sure to share that the latest book from the team of author Sherri Duskey Rinker and illustrator Tom Lichtenheld (who wrote and illustrated…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Boy book pic",
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Bedtime",
      "slug": "bedtime",
      "url": "/topics/bedtime/"
    },
    {
      "name": "Fantasy",
      "slug": "fantasy",
      "url": "/topics/fantasy/"
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
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sherri Duskey Rinker",
      "slug": "sherri-duskey-rinker",
      "url": "/topics/sherri-duskey-rinker/"
    },
    {
      "name": "Tom Lichtenheld",
      "slug": "tom-lichtenheld",
      "url": "/topics/tom-lichtenheld/"
    },
    {
      "name": "Trains",
      "slug": "trains",
      "url": "/topics/trains/"
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
    "description": "“Don’t judge a book by its cover” is cliche for a reason and I wanted to be sure to share that the latest book from the team of author Sherri Duskey Rinker and illustrator Tom Lichtenheld (who wrote and illustrated…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Where to Sleep",
    "url": "/reviews/where-to-sleep/"
  },
  "next": {
    "title": "Jimmy the Joey: Two Perspectives",
    "url": "/reviews/jimmy-the-joey/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"Boy book pic"} width={210} height={139} /></a>
      </figure>
      <p>{"“Don’t judge a book by its cover” is cliche for a reason and I wanted to be sure to share that the latest book from the team of author Sherri Duskey Rinker and illustrator Tom Lichtenheld (who wrote and illustrated "}<em>{"Goodnight, Goodnight Construction Site"}</em>{", "}<a href={"http://ohmahdeehness.wordpress.com/2012/10/07/book-gift-ideas-for-two-year-olds/"} target="_blank" rel="noopener noreferrer">{"a favorite in our house"}</a>{") is not about a circus train as the cover would make you think. A train with a giraffe and monkey in the caboose on the cover made me uncertain but the book is beautifully done and pretty veg friendly, never fear."}</p>
      <p>{"In "}<em>{"Goodnight, Goodnight Construction Site"}</em>{", as construction related vehicles tuck in for the night the reader learns their names and in "}<em>{"Steam Train, Dream Train"}</em>{", as the train is loaded up for the night you learn the names of various train cars. You may know what a tender is but did you know what a well car, autorack, or reefer car carry? Animals are loading the train with things like dinosaurs, race cars, and ice cream and at the end (spoiler alert) you can see that the dream train is on a track on the floor of a small child’s bedroom."}</p>
      <p>{"This is one of those books where every design element is just right and the illustrations captivated my son and daughter. The restful prose and fantasy elements (polar bears loading ice cream sundaes into the reefer car, for example) make for another great bedtime book for kids of all ages."}</p>
    </div>
  );
}
