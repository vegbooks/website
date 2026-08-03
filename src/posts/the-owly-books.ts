import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/09/finalowly1cover-web-lg.jpg",
    "alt": "The Owly Books",
    "href": "/media/2011/09/finalowly1cover-web-lg.jpg",
    "width": 210,
    "height": 296,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I met Andy Runton, the author of the Owly books, at the San Diego Comic Convention in 2005. I had never heard of his books but they had an adorable owl on the cover so I couldn’t resist. They are largely wordless stories, the talk bubbles are filled with pictures and symbols like arrows, for example – this makes them awesome for beginning readers – and the messages were positive ones. Owly is a vegetarian owl with a sweet nature and a desire to be good and kind."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "An awesome fact from the ",
      {
        "type": "link",
        "href": "http://www.andyrunton.com/faq.html",
        "external": true,
        "children": [
          "FAQ page on Andy Runton’s site"
        ]
      },
      " is that the brushes used to create Owly and his friends are animal-friendly: “I don’t want to use any animal-based products in my life or in my work. For that reason, I only use synthetic brushes.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Totally something that should be on the bookshelves of veg parents. With that in mind, here’s a sneak peek of what to expect from each volume:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vol. 1: The Way Home & Bittersweet Summer – In the first part of the book Owly helps Wormy find his way back to his family, only for Wormy to realize that his home is now with his good friend Owly. The latter story features Owly and some adorable hummingbirds who must go south for the winter."
    ]
  },
  {
    "type": "image",
    "src": "/media/2011/09/owly-vol-2-just-a-little-blue-new-cover-lg.jpg",
    "alt": "",
    "href": "/media/2011/09/owly-vol-2-just-a-little-blue-new-cover-lg.jpg",
    "width": 209,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "Vol. 2: Just a Little Blue – This is my daughter’s favorite, Owly builds a home for some birds that at first don’t think he means them well. Eventually they realize that he is kind and does not want to hurt them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vol. 3: Flying Lessons – Owly befriends and learns about flying from a flying squirrel."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vol. 4: A Time to Be Brave – Owly overcomes his fears and makes friends with an opossum along the way."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vol. 5: Tiny Tales – A good starter book, despite being the 5th in the series. The stories are short and varied and there is even a “how to draw Owly” page. A budding artist would like this as it shows how the character started and progressed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Newly released is a hardcover, in color, picture book called ",
      {
        "type": "emphasis",
        "children": [
          "Owly & Wormy: Friends All Aflutter!"
        ]
      },
      " My daughter loves Owly and Wormy so I bought her this book for her 3rd birthday along with a plush toy to match. For the younger set, the hardcover picture book is a good starting point as the graphic novels are on the smaller side. Owly makes friends with some caterpillars who end up going “missing” only to return as butterflies. I think the most powerful element of the Owly series for young children is how much emotion they can understand from expressive illustrations. My daughter knows that Owly is sad or happy or scared, etc. from the looks on his face."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/s?ie=UTF8&keywords=owly&rh=n%3A283155%2Ck%3Aowly&page=1&_encoding=UTF8&tag=vegbooks-20&linkCode=ur2&camp=1789&creative=390957",
        "external": true,
        "children": [
          "These books"
        ]
      },
      " have it all. Vegetarian hero, cute characters, and they’ll introduce your children to the world of comic books and graphic novels. Comic books made a huge difference in my life and being able to pass that on to my kids is a wonderful gift."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Note: In honor of this review — our 500th on Vegbooks — we are hosting a contest. Your review could appear on Vegbooks, and you could win veg-friendly kids books. Click ",
              {
                "type": "link",
                "href": "/contributors/",
                "children": [
                  "here"
                ]
              },
              " for details!"
            ]
          }
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
