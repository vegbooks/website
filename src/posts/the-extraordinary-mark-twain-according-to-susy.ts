import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/twain-hi-res-cover.jpg",
    "alt": "The Extraordinary Mark Twain (According To Susy)",
    "href": "/media/2011/06/twain-hi-res-cover.jpg",
    "width": 210,
    "height": 295,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I have a very big soft spot for Mark Twain, born Samuel Langhorne Clemens (1835 – 1910). His literary works are touchingly raw and honest, and he himself was a unique character with a great affinity for animals, particularly cats. For the 100th anniversary of Mark Twain’s death in 2010, PETA presented the ",
      {
        "type": "link",
        "href": "http://www.marktwainmuseum.org/",
        "external": true,
        "children": [
          "Mark Twain Boyhood Home & Museum"
        ]
      },
      " with a $5,000 exhibit sponsorship and a plaque commemorating his love of animals and disdain of vivisection (animal testing). On the subject, Twain stated:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“I believe I am not interested to know whether Vivisection produces results that are profitable to the human race or doesn’t. To know that the results are profitable to the race would not remove my hostility to it. The pains which it inflicts upon unconsenting animals is the basis of my enmity towards it, and it is to me sufficient justification of the enmity without looking further.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Susy, Twain’s daughter, dedicated a fair amount of words to her dad’s animal-loving nature in the secret biography she undertook about her father; at least that’s what the reader gleans in author Barbara Kerley’s selective re-telling in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://store.scholastic.com/webapp/wcs/stores/servlet/ProductDisplay_null_41632_-1_10052_10051",
            "external": true,
            "children": [
              "The Extraordinary Mark Twain"
            ]
          }
        ]
      },
      ". In the book, there are two narratives: (1) Kerley’s presentation of Susy’s journey in writing her biography and (2) selected entries from Susy’s journal/biography which are scattered throughout the text and printed in old script – spelling errors and all – showing the true nature of her father’s life, work and personality. Susy’s entries are included in the text as mini pages, a fun and different visual and literary element."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Extraordinary Mark Twain"
        ]
      },
      " serves two purposes. One is, of course, to show a different side of Mark Twain – “the funny, serious, absentminded, cat-loving, billiard-playing, philosophical Papa.” The other is to show what makes a good biography and biographer: “Susy observed Papa carefully – how he stopped whatever he was doing, just to confer with a cat…”And on his daughter’s project, Twain remarked, “This is a frank biographer and an honest one; she uses no sandpaper on me.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "An intriguing read for any Mark Twain fan or student needing inspiration to write a biography. Illustrator Edwin Fotheringham’s fanciful Victorian drawings are icing on this literary cake."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
