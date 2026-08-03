import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/puppy-who-wanteda-boy-hc-c.jpg",
    "alt": "The Puppy Who Wanted a Boy",
    "href": "/media/2010/06/puppy-who-wanteda-boy-hc-c.jpg",
    "width": 235,
    "height": 314,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Jane Thayer and Lisa McCue’s picture book ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.librarything.com/work/73392",
            "external": true,
            "children": [
              "The Puppy Who Wanted a Boy"
            ]
          }
        ]
      },
      "is a tribute to the love between dogs and their boys."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All Petey, the puppy-protagonist of the book, wants for Christmas is a boy — but his mother discovers there are no boys to be found. She suggests that Petey ask other dogs if they’d be willing to give him their boys. Unsurprisingly, Petey can’t find a single dog who will part with the boy who loves him. Just when hope is nearly lost, Petey stumbles upon an orphanage, with a single new boy sitting out front. The woman who runs the orphanage says Petey can spend the night and they’ll see in the morning if his mother will let him stay. Petey just knows that his mother will say yes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will get a kick out of Ms. Thayer’s conception of how dogs might regard us — as belonging to them! — and parents will enjoy the ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/334583.The_Puppy_Who_Wanted_a_Boy",
        "external": true,
        "children": [
          "sweet storyline"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
