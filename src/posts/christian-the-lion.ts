import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/05/978-0-385-73856-9.jpg",
    "alt": "Christian the Lion",
    "href": "/media/2010/05/978-0-385-73856-9.jpg",
    "width": 193,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Undoubtedly you’ve seen the famous photos and ",
      {
        "type": "link",
        "href": "http://www.youtube.com/watch?v=btuxO-C2IzE",
        "external": true,
        "children": [
          "YouTube video"
        ]
      },
      " of long lost friends Anthony and John and their lion, Christian, reuniting and hugging in the African panorama to everyone’s surprise and joy (at the fact that Christian remembered the two after having been separated for some time). As a cub, Christian lived in a department store in the heart of London and was rescued by these two humans."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This children’s picture book serves as a scrapbook, memorializing Christian’s life in the store, the boys’ apartment, his trips around England (visits to radio studios, car rides) and his transition to better accommodations: a halfway house of sorts in England and finally a sanctuary in Africa. These last two locations were initiatives organized by Bill and Virginia Travers of the movie ",
      {
        "type": "link",
        "href": "http://www.bornfreeusa.org/d7_born_free_history.php",
        "external": true,
        "children": [
          "“Born Free”"
        ]
      },
      " (a must see for any animal advocate)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is cute enough and it does go to show young ones how strange (and ultimately wrong) it is to keep a wild animal in a domesticated setting. Of course, it also has its drawbacks. For one, Christian is overly anthropomorphized. Two, the authors call Africa a country. Worth checking out of the library though."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
