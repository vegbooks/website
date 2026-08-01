import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10149",
  "slug": "little-robot",
  "url": "/reviews/little-robot/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/09/28/little-robot/",
  "title": "Little Robot",
  "publishedAt": "2015-09-28",
  "publishedLabel": "September 28th, 2015",
  "excerpt": "When I received a publisher’s review copy of Ben Hatke’s hardcover graphic novel Little Robot, it was first on the list to read that night at bedtime with my almost 5- and 7-year-olds. The artwork is beautiful, much…",
  "image": {
    "src": "/media/2015/09/9781626720800.jpg",
    "alt": "9781626720800",
    "width": 484,
    "height": 573
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
      "name": "Ben Hatke",
      "slug": "ben-hatke",
      "url": "/topics/ben-hatke/"
    },
    {
      "name": "Friendship",
      "slug": "friendship",
      "url": "/topics/friendship/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Graphic Novels",
      "slug": "graphic-novels",
      "url": "/topics/graphic-novels/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Robots",
      "slug": "robots",
      "url": "/topics/robots/"
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
    "description": "When I received a publisher’s review copy of Ben Hatke’s hardcover graphic novel Little Robot, it was first on the list to read that night at bedtime with my almost 5- and 7-year-olds. The artwork is beautiful, much…",
    "image": "https://vegbooks.org/media/2015/09/9781626720800.jpg"
  },
  "previous": {
    "title": "Fable Comics",
    "url": "/reviews/fable-comics/"
  },
  "next": {
    "title": "Alice in Wonderland: Down the Rabbit Hole",
    "url": "/reviews/alice-in-wonderland-down-the-rabbit-hole/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <p>{"When I received a "}<a href={"http://us.macmillan.com/books/9781626720800"} target="_blank" rel="noopener noreferrer">{"publisher’s"}</a>{" review copy of Ben Hatke’s hardcover graphic novel "}<em>{"Little Robot"}</em>{", it was first on the list to read that night at bedtime with my almost 5- and 7-year-olds. The artwork is beautiful, much like Hatke’s last book, "}<em><a href={"/reviews/julia/"}>{"Julia’s House for Lost Creatures"}</a>{","}</em>{" but the style of storytelling is more reminiscent of Andy Runton’s "}<a href={"/reviews/the-owly-books/"}><em>{"Owly"}</em>{" series"}</a>{" because the words are sparse and the pictures tell the story."}</p>
      <figure class="content-image content-image--center">
        <img src={"/media/2015/09/9781626720800.jpg"} alt={"9781626720800"} width={484} height={573} />
      </figure>
      <p>{"Having a boy and a girl in the home makes me rejoice when books aren’t specifically gendered — the emotions are universal and a little girl befriending a lost robot resonated with both my kids. Enough is left to their imagination as well — the protagonist is nameless but she waits until other kids have gone to school (is she skipping school? is she too young to attend school? – the reader is left to decide) before having her adventures. One day she opens a box containing a lost robot (Unit 00012), while she is learning to interact with the robot a much larger robot comes to recover the missing unit. A kitty cat does get “eaten” by the larger robot but it is just how he picks up his quarry and the cat is rescued unharmed later on."}</p>
      <p>{"One moment in the story that gives pause is when the little girl locks Unit 00012 up so she can try to make him some friends. Even if her intent is good, she has deprived her friend of his own choice to go away in search of those like him so we were able to discuss as we read whether or not it was a kind choice to make. Even the large recovery robot is ultimately turned to a good path and friendship prevails."}</p>
      <p>{"Highly recommended for ages 2 and up."}</p>
    </div>
  );
}
