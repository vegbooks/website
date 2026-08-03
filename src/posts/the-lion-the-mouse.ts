import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/12/lionmouse11.jpg",
    "alt": "The Lion and the Mouse",
    "href": "/media/2009/12/lionmouse11.jpg",
    "width": 210,
    "height": 182,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.jerrypinkneystudio.com/frameset.html",
        "external": true,
        "children": [
          "Jerry Pinkney’s"
        ]
      },
      " new book is a visual treat, using stunning illustrations to retell Aesop’s fable. Using only the occasional sound, Mr. Pinkney’s storybook lends itself to an interpretation that supports and reinforces animal rights. The gist is this: the lion spares the mouse and the mouse frees the lion from a hunter’s net."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As the ",
      {
        "type": "link",
        "href": "http://www.nytimes.com/2009/11/08/books/review/Sutton-t.html",
        "external": true,
        "children": [
          "New York Times Book Review"
        ]
      },
      " aptly points out, Mr. Pinkney seems right at home drawing animals who are animals, “not humans in disguise.” Now if only we could be as kind to the mice and lions as this book depicts them being to each other!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8. For another perspective, check out the ",
      {
        "type": "link",
        "href": "http://www.schoollibraryjournal.com/blog/1790000379/post/190046819.html",
        "external": true,
        "children": [
          "School Library Journal"
        ]
      },
      " or ",
      {
        "type": "link",
        "href": "http://100scopenotes.wordpress.com/2009/09/09/toon-review-the-lion-the-mouse-by-jerry-pinkney/",
        "external": true,
        "children": [
          "Toon Review"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
