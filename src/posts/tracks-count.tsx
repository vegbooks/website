import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9935",
  "slug": "tracks-count",
  "url": "/reviews/tracks-count/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/11/03/tracks-count/",
  "title": "Tracks Count",
  "publishedAt": "2014-11-03",
  "publishedLabel": "November 3rd, 2014",
  "excerpt": "I’ve been reviewing for Vegbooks for over three years so I’ve seen a fair share of standard books – ABC books (All the Asleep Animals, Click, Clack, ABC,and Letters of the West) and song books (Jo MacDonald Had a…",
  "image": {
    "src": "/media/2014/11/tracks-review-vegbooks.jpg",
    "alt": "Tracks-Review-Vegbooks",
    "width": 480,
    "height": 479
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
      "name": "Alexander Petersen",
      "slug": "alexander-petersen",
      "url": "/topics/alexander-petersen/"
    },
    {
      "name": "Animal Tracks",
      "slug": "animal-tracks",
      "url": "/topics/animal-tracks/"
    },
    {
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Counting",
      "slug": "counting",
      "url": "/topics/counting/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Nature",
      "slug": "nature",
      "url": "/topics/nature/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Steve Engel",
      "slug": "steve-engel",
      "url": "/topics/steve-engel/"
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
    "description": "I’ve been reviewing for Vegbooks for over three years so I’ve seen a fair share of standard books – ABC books (All the Asleep Animals, Click, Clack, ABC,and Letters of the West) and song books (Jo MacDonald Had a…",
    "image": "https://vegbooks.org/media/2014/11/tracks-review-vegbooks.jpg"
  },
  "previous": {
    "title": "Forest Fire Mystery",
    "url": "/reviews/forest-fire-mystery/"
  },
  "next": {
    "title": "Book of Life (2014)",
    "url": "/reviews/book-of-life-2014/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"I’ve been reviewing for Vegbooks for over three years so I’ve seen a fair share of standard books – ABC books ("}<a href={"/reviews/all-the-asleep-animals/"}><em>{"All the Asleep Animals"}</em></a>{", "}<em><a href={"/reviews/click-clack-abc/"}>{"Click, Clack, ABC"}</a>{","}</em>{"and "}<a href={"/reviews/letters-of-the-west-an-abc-book-of-the-many-plants-animals-and-other-curious-features-of-the-west/"}><em>{"Letters of the West"}</em></a>{") and song books ("}<a href={"/reviews/jo-macdonald-had-a-garden/"}><em>{"Jo MacDonald Had a Garden"}</em></a>{", "}<em><a href={"/reviews/over-in-the-jungle-a-rainforest-rhyme/"}>{"Over in the Jungle"}</a>{","}</em>{"and "}<a href={"/reviews/over-in-the-forest/"}><em>{"Over in the Forest"}</em></a>{"), but this is the first dedicated counting book (though not the first I’ve reviewed to feature animal tracks)."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2014/11/tracks-review-vegbooks.jpg"} alt={"Tracks-Review-Vegbooks"} width={480} height={479} />
      </figure>
      <p><em>{"Tracks Count"}</em>{" depicts animals, their tracks, and a short line of explanatory text. The illustrations are all done in a sepia tone. Each animal is in the wild except for the corresponding animal/track for the number one. The horse’s hoof is accompanied with text indicating the horse is in the corral. Later numbers include multiple animals to reach the requisite number of toes needed, for example, the number eight features the track of a tapir and a coatimundi. The tapir has three toes, the coatimundi has five. The book wraps up with facts about each animal featured and information about the book’s author, a nature program supervisor at a wetland preserve and the illustrator who teaches children with Art4Life."}</p>
      <p>{"Geared a little older than a typical counting book, the accurate illustrations of tracks were an invitation for my kids to wonder what their own tracks would look like. Great science read from Craigmore Creations’ “Little Naturalist” line."}</p>
      <p><em>{"Review copy from Craigmore Creations"}</em></p>
    </div>
  );
}
