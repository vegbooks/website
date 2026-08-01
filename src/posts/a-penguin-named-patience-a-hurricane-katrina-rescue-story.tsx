import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10067",
  "slug": "a-penguin-named-patience-a-hurricane-katrina-rescue-story",
  "url": "/reviews/a-penguin-named-patience-a-hurricane-katrina-rescue-story/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/02/13/a-penguin-named-patience-a-hurricane-katrina-rescue-story/",
  "title": "A Penguin Named Patience: A Hurricane Katrina Rescue Story",
  "publishedAt": "2015-02-13",
  "publishedLabel": "February 13th, 2015",
  "excerpt": "I received A Penguin Named Patience from Sleeping Bear Press as a review copy. I’ve never seen a picture book that ties in with Hurricane Katrina and it must be a sign that I’m getting older when books are made to…",
  "image": {
    "src": "/media/2015/02/9781585368402-fc.jpg",
    "alt": "9781585368402_FC",
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
      "name": "Captive Wildlife",
      "slug": "captive-wildlife",
      "url": "/topics/captive-wildlife/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Hurricane Katrina",
      "slug": "hurricane-katrina",
      "url": "/topics/hurricane-katrina/"
    },
    {
      "name": "Lisa Anchin",
      "slug": "lisa-anchin",
      "url": "/topics/lisa-anchin/"
    },
    {
      "name": "Penguins",
      "slug": "penguins",
      "url": "/topics/penguins/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "Suzanne Lewis",
      "slug": "suzanne-lewis",
      "url": "/topics/suzanne-lewis/"
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
    "description": "I received A Penguin Named Patience from Sleeping Bear Press as a review copy. I’ve never seen a picture book that ties in with Hurricane Katrina and it must be a sign that I’m getting older when books are made to…",
    "image": "https://vegbooks.org/media/2015/02/9781585368402-fc.jpg"
  },
  "previous": {
    "title": "Martin & Mahalia: His Words, Her Song",
    "url": "/reviews/martin-mahalia-his-words-her-song/"
  },
  "next": {
    "title": "Cinderella (2015)",
    "url": "/reviews/cinderella-2015/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/02/9781585368402-fc.jpg"} alt={"9781585368402_FC"} width={210} height={210} />
      </figure>
      <p>{"I received "}<em>{"A Penguin Named Patience"}</em>{" from "}<a href={"http://sleepingbearpress.com//"} target="_blank" rel="noopener noreferrer">{"Sleeping Bear Press"}</a>{" as a review copy. I’ve never seen a picture book that ties in with Hurricane Katrina and it must be a sign that I’m getting older when books are made to explain events to children that may not have been alive at the time they actually happened (in this case, August 2005). Take away the reason the titular Patience the penguin and her compatriots were relocated from their home exhibit to one in Monterrey, California and the book still makes sense. Which is to say, though this is a book that has a basis in actual events, it isn’t meant to inform the reader about the Hurricane as much as share a vignette of evacuation and return."}</p>
      <p>{"The illustrations are charming and the story straight forward – penguins are flown across the country when it is no longer safe for them to stay at New Orleans’ Audubon Aquarium of the Americas. Later, the penguins are able to return. The book mentions the names and personalities of the penguins but while attributing feelings like confusion or happiness to the penguins would inspire empathy in the reader, it leaves unanswered the question of why the penguins’ home is presumed to be the Aquarium. I don’t think it is problematic for veg families as a snippet of the penguins’ lives and considering it is based on real life events, but I wanted to mention it nonetheless."}</p>
      <p>{"Ultimately, the thrust of the story is that Patience worries and waits and eventually is brought home. In the Author’s Note at the end of the book it states that Patience died in 2006, the year following the events in the book, at the age of 25 (while the average age for a female African penguin, per the note, is 15.1 years). I found the note an important addition to the story so I’d recommend the book for ages 6 and up so they can get the most out of the story behind the story."}</p>
    </div>
  );
}
