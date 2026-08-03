import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/i-dont-want-a-cool-cat-final.jpg",
    "alt": "I Don’t Want a Cool Cat",
    "href": "/media/2010/10/i-dont-want-a-cool-cat-final.jpg",
    "width": 210,
    "height": 228,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In our house we love cats, and playing Cat Adoption Center is a favorite activity in our home, so I was happy to get a chance to review ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/2-9780316036740-1",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "I Don’t Want a Cool Cat!"
            ]
          }
        ]
      },
      " — a silly, fun read. With its clever, simple rhymes and bright illustrations of all different types of domestic cats (and a tiger), the story has broad appeal."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As the young girl describes what kinds of cats she doesn’t want – all falling into general categories of fancy, naughty or needy – kids can giggle along with the funny, rhyming descriptions of each kitty (my son particularly enjoys the slinky, dinky, twinky cat, who appears to be modeled on the ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Sphynx_(cat)",
        "external": true,
        "children": [
          "sphinx"
        ]
      },
      " cat). In the end, our girl gets just what she wanted – her favorite kind, which just happens to be the kind of kitty we all love."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kiddos with cat friends will enjoy recognizing a number of feline traits throughout the book, and there are a number of opportunities to slip in some discussions about various issues pertaining to cat companions if a grown-up is so inclined (i.e. why a tiger isn’t a good choice). A cool read for kitty lovers ages 3 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
