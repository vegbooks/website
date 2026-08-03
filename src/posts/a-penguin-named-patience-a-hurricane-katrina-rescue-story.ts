import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2015/02/9781585368402-fc.jpg",
    "alt": "9781585368402_FC",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received ",
      {
        "type": "emphasis",
        "children": [
          "A Penguin Named Patience"
        ]
      },
      " from ",
      {
        "type": "link",
        "href": "http://sleepingbearpress.com//",
        "external": true,
        "children": [
          "Sleeping Bear Press"
        ]
      },
      " as a review copy. I’ve never seen a picture book that ties in with Hurricane Katrina and it must be a sign that I’m getting older when books are made to explain events to children that may not have been alive at the time they actually happened (in this case, August 2005). Take away the reason the titular Patience the penguin and her compatriots were relocated from their home exhibit to one in Monterrey, California and the book still makes sense. Which is to say, though this is a book that has a basis in actual events, it isn’t meant to inform the reader about the Hurricane as much as share a vignette of evacuation and return."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are charming and the story straight forward – penguins are flown across the country when it is no longer safe for them to stay at New Orleans’ Audubon Aquarium of the Americas. Later, the penguins are able to return. The book mentions the names and personalities of the penguins but while attributing feelings like confusion or happiness to the penguins would inspire empathy in the reader, it leaves unanswered the question of why the penguins’ home is presumed to be the Aquarium. I don’t think it is problematic for veg families as a snippet of the penguins’ lives and considering it is based on real life events, but I wanted to mention it nonetheless."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ultimately, the thrust of the story is that Patience worries and waits and eventually is brought home. In the Author’s Note at the end of the book it states that Patience died in 2006, the year following the events in the book, at the age of 25 (while the average age for a female African penguin, per the note, is 15.1 years). I found the note an important addition to the story so I’d recommend the book for ages 6 and up so they can get the most out of the story behind the story."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
