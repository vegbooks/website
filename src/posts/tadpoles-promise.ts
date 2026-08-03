import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/s-promise-cover.jpg",
    "alt": "Tadpole’s Promise",
    "href": "/media/2011/04/s-promise-cover.jpg",
    "width": 210,
    "height": 166,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This book would make a fantastic gift for a dear friend going through a particularly hard breakup. But as a kids’ book? I’m skeptical. What I do know is that vegan and vegetarian kids are unlikely to enjoy the way this one ends."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Like Lane Smith’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/its-a-book/",
            "children": [
              "It’s a Book"
            ]
          }
        ]
      },
      ", this picture book from author Jeanne Willis and illustrator Tony Ross inspires strong feelings in people. Its critics (count me as one) contend that it’s not really suitable for children, going so far as to call ",
      {
        "type": "link",
        "href": "http://www.publishersweekly.com/978-0-689-86524-4",
        "external": true,
        "children": [
          "a turn in the plot “sadistic"
        ]
      },
      ",” but ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/669839.Tadpole_s_Promise_Bccb_Blue_Ribbon_Picture_Book_Awards",
        "external": true,
        "children": [
          "its defenders"
        ]
      },
      " tell us to, well, just lighten up. Let me tell you the gist of the plot, so you can decide which side you’re likely to be on."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A tadpole and caterpillar fall in love, and promise never to change. So when the tadpole begins growing legs and eventually turns into a frog, the caterpillar shuns him, claiming he has broken her heart. Then — you guessed it — the caterpillar undergoes her own metamorphosis and decides to forgive him. The new butterfly approaches the frog to ask after her lost love, and he “leap[s] up and swallow[s] her in one great gulp.” The book ends with the tadpole-turned-frog pining after the creature he has unknowingly just eaten."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Don’t get me wrong. It’s not the animal-eating ",
      {
        "type": "emphasis",
        "children": [
          "per se"
        ]
      },
      " that gets me. On several occasions, I’ve defended the ",
      {
        "type": "link",
        "href": "/reviews/family-pack/",
        "children": [
          "portrayal of predators in children’s books"
        ]
      },
      ". The humor in this book lies in the anthropomorphism of animals, and as an adult, I can see how it’s funny to poke fun at that by reminding the reader that in the real world, frogs eat butterflies. It’s just that I don’t think most kids of a herbivorous persuasion would really appreciate this particular joke, nor do I think they really deserve to be as jaded about love as Willis seems to be."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In my book, this one’s just for adults."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
