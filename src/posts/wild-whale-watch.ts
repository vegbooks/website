import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "My five-year-old loves all things Magic School Bus — the TV show, the picture books, the chapter books, the science kits — all of it. And I have to say that I’m right there with her. The Magic School Bus series teaches science to five-year-olds in a fun and engaging way."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/01/wild-whale-watch-cover.jpg",
    "alt": "WildWhaleWatch_cover",
    "width": 436,
    "height": 634,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "It’s a story about elementary kids whose teacher, voiced by Lily Tomlin, is a bit eccentric and loves science. She has a school bus that is magical that she uses to take the kids on amazing adventures to learn about science, such a trip into space to learn how stars form. There is usually a little peril to keep things interesting and to promote problem solving skills. The stories are funny, interesting, and informative. I myself learn things I didn’t know when I read these stories to my daughter. I also love the brilliant teacher as a female science role model for kids to emulate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Magic School Bus Chapter Book #3 The Wild Whale Watch"
        ]
      },
      " (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0439109906/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0439109906&linkCode=as2&tag=vegbooks-20&linkId=32SD65VSFYCWC3KD",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is my favorite in the series so far. Whales have always been my favorite animal and this book manages to even teach me things about whales that I didn’t know. But the best part is towards the end if the book when the class discusses dwindling whale populations and that some countries still hunt whales for food. The class decides to participate in an adopt-a-whale program. At the end of the book there is information on how we can adopt whales for ourselves which my daughter immediately wanted to do. It’s a great book for any animal lover or lover of science."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
