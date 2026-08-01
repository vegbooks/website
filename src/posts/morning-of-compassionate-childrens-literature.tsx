import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3313",
  "slug": "morning-of-compassionate-childrens-literature",
  "url": "/reviews/morning-of-compassionate-childrens-literature/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/16/morning-of-compassionate-childrens-literature/",
  "title": "Morning of Compassionate Children’s Literature",
  "publishedAt": "2010-10-16",
  "publishedLabel": "October 16th, 2010",
  "excerpt": "If you are in the NYC area this Sunday, October 17, don’t miss A Morning of Compassionate Children’s Literature with Farm Sanctuary, hosted by The Community Bookstore in Park Slope. Maya Gottfried will read and sign…",
  "image": {
    "src": "/media/2010/06/978-0-375-86118-5.jpg",
    "alt": "Morning of Compassionate Children’s Literature",
    "width": 210,
    "height": 272
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
      "name": "Deborah Underwood",
      "slug": "deborah-underwood",
      "url": "/topics/deborah-underwood/"
    },
    {
      "name": "Events",
      "slug": "events",
      "url": "/topics/events/"
    },
    {
      "name": "Maya Gottfried",
      "slug": "maya-gottfried",
      "url": "/topics/maya-gottfried/"
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
    "description": "If you are in the NYC area this Sunday, October 17, don’t miss A Morning of Compassionate Children’s Literature with Farm Sanctuary, hosted by The Community Bookstore in Park Slope. Maya Gottfried will read and sign…",
    "image": "https://vegbooks.org/media/2010/06/978-0-375-86118-5.jpg"
  },
  "previous": {
    "title": "Keeping Water Clean",
    "url": "/reviews/keeping-water-clean/"
  },
  "next": {
    "title": "The Barefoot Book of Earth Tales",
    "url": "/reviews/the-barefoot-book-of-earth-tales/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/978-0-375-86118-5.jpg"}><img src={"/media/2010/06/978-0-375-86118-5.jpg"} alt={"Morning of Compassionate Children’s Literature"} width={210} height={272} /></a>
      </figure>
      <p>{"If you are in the NYC area this Sunday, October 17, don’t miss A Morning of Compassionate Children’s Literature with Farm Sanctuary, hosted by The Community Bookstore in Park Slope."}</p>
      <p>{"Maya Gottfried will read and sign her book, "}<em>{"Our Farm"}</em>{" (see our Vegbooks review of "}<em>{"Our Farm"}</em>{" "}<a href={"/reviews/our-farm/"}>{"here"}</a>{"), and there will also be a reading of "}<em>{"Granny Gomez and Jigsaw"}</em>{" by Deborah Underwood ("}<a href={"/reviews/granny-gomez-and-jigsaw/"}>{"here"}</a>{" is our review of "}<em>{"Granny Gomez and Jigsaw"}</em>{")."}</p>
      <p>{"Details:"}</p>
      <p>{"Sunday, October 17th, 11 AM"}</p>
      <p>{"A Morning of Compassionate Children’s Literature with Farm Sanctuary"}</p>
      <p>{"The Community Bookstore is at 143 7th Ave in Brooklyn. Click "}<a href={"http://communitybookstore.net/information/?page_id=36"} target="_blank" rel="noopener noreferrer">{"here"}</a>{" for directions!"}</p>
    </div>
  );
}
