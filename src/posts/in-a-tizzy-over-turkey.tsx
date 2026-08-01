import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2014",
  "slug": "in-a-tizzy-over-turkey",
  "url": "/reviews/in-a-tizzy-over-turkey/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/18/in-a-tizzy-over-turkey/",
  "title": "In a Tizzy Over Turkey",
  "publishedAt": "2010-06-18",
  "publishedLabel": "June 18th, 2010",
  "excerpt": "Anyone who has been a vegetarian for at least a year has likely been exposed to the jokes and ridicule that come when other adults hear about the idea of a vegetarian Thanksgiving. Now, through In a Tizzy Over Turkey…",
  "image": {
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "In a Tizzy Over Turkey",
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
      "name": "Adam Beechen",
      "slug": "adam-beechen",
      "url": "/topics/adam-beechen/"
    },
    {
      "name": "Books to Avoid",
      "slug": "books-to-avoid",
      "url": "/topics/books-to-avoid/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Negative Messages About Vegetarianism",
      "slug": "negative-messages-about-vegetarianism",
      "url": "/topics/negative-messages-about-vegetarianism/"
    },
    {
      "name": "Thanksgiving",
      "slug": "thanksgiving",
      "url": "/topics/thanksgiving/"
    },
    {
      "name": "Turkeys",
      "slug": "turkeys",
      "url": "/topics/turkeys/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "Anyone who has been a vegetarian for at least a year has likely been exposed to the jokes and ridicule that come when other adults hear about the idea of a vegetarian Thanksgiving. Now, through In a Tizzy Over Turkey…",
    "image": "https://vegbooks.org/media/2010/06/boy-book-pic-from-istock1.jpg"
  },
  "previous": {
    "title": "Wright on Time, Books 1 & 2",
    "url": "/reviews/wright-on-time-books-1-2/"
  },
  "next": {
    "title": "The Gift of Nothing",
    "url": "/reviews/the-gift-of-nothing/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/boy-book-pic-from-istock1.jpg"}><img src={"/media/2010/06/boy-book-pic-from-istock1.jpg"} alt={"In a Tizzy Over Turkey"} width={210} height={139} /></a>
      </figure>
      <p>{"Anyone who has been a vegetarian for at least a year has likely been exposed to the jokes and ridicule that come when other adults hear about the idea of a vegetarian Thanksgiving. Now, through "}<em>{"In a Tizzy Over Turkey"}</em>{" by Adam Beechen, those same attitudes have been put into book form, aimed at children ages 5-7."}</p>
      <p>{"In this book, the author pokes fun of the idea of having a "}<a href={"/search/?q=vegetarian%20thanksgiving"}>{"vegetarian Thanksgiving"}</a>{". Timmy has his heart set on eating turkey for Thanksgiving, only to find out that his parents have opted for a vegetarian menu."}</p>
      <p>{"The story makes fun of the “tofurkey” or “turkey-flavored tofu” that is served, with Timmy refusing to eat it. They also refer to it as “spongy,” and say that it bounced on the floor when it came time to carve it. They even have the bowl of gravy sticking its tongue out at the thought of a vegetarian Thanksgiving."}</p>
      <p>{"This is one book that vegetarian parents will want to keep away from their children. In fact, it’s one that all parents should want their kids to avoid. The story is insensitive to the millions of people who opt for a more compassionate or vegetarian Thanksgiving each year."}</p>
    </div>
  );
}
