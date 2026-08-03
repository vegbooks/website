import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/s-forever-home-final-front-cover-art.jpg",
    "alt": "Pele’s Forever Home",
    "href": "/media/2011/12/s-forever-home-final-front-cover-art.jpg",
    "width": 210,
    "height": 181,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I love ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.butlerbooks.com/pelesforeverhome.html",
            "external": true,
            "children": [
              "Pele’s Forever Home"
            ]
          }
        ]
      },
      ", and the fact that it’s a true story about an important issue makes me love it even more. The story focuses on Pele, a greyhound who was born into the cruel world of dog racing, where animals are forced to run around tracks for the sake of human “entertainment.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Each night before bedtime, Pele and the other dogs dream of a better life— a life with a mom and dad and a place where they could “run and play and roam.” The other dogs get adopted one by one, leaving sad Pele behind. But his day finally comes when a nice couple adopts him! After many happy years, the couple decides to adopt another greyhound named Lucy, and together they both live peaceful and free in their loving home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’m always thrilled when I see a book on the market that not only portrays animals in a good light, but one that also shines a spotlight on an animal-abusing industry. This book does just that; it tackles the dog racing industry in a kid-appropriate way. The book is a tool that can serve as a starting point, and it is up to the parents to continue the conversation."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Dog Racing is a dirty profit-driven business in which the animals pay the price. When not on the racetrack, dogs spend virtually all of their time confined in small cages barely large enough for them to stand up or turn around. They’re trucked across the country on grueling road trips, forced to race in extreme weather conditions, suffer serious injuries and thousands are killed each year when they usefulness wears out and they are no longer profitable. It’s no wonder Pele was dreaming of a forever home!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The back of the book includes Pele’s bio, along with a beautiful full-page color photo of him. There is also information about ",
      {
        "type": "link",
        "href": "http://www.grey2kusa.org/",
        "external": true,
        "children": [
          "Grey2K USA"
        ]
      },
      " — a non-profit organization dedicated to ending the cruelty of dog racing. A percentage of the proceeds from this book will go to Grey2K USA, which is another great reason to go out and buy this book!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommend this book. Kids will love it because it’s about a sweet dog who finds happiness, and parents will love it because it’s a heartwarming story that addresses an important issue. It’s the definition of a happy ending! It’s one of those books on the shelf that you won’t mind reading over and over again to your kids."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
