import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/06/one-dog-and-his-boy.jpg",
    "alt": "One Dog and His Boy",
    "href": "/media/2012/06/one-dog-and-his-boy.jpg",
    "width": 210,
    "height": 313,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Just how far will one boy go to keep the dog he’s always wanted? Pretty far."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/12351641-one-dog-and-his-boy",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "One Dog and His Boy"
            ]
          }
        ]
      },
      " is one of the sweetest, most tender-hearted novels for pre-teens I’ve come across. It centers on the soon-to-be-ten-year-old Hal Fenton whose only wish is to have a canine pal. His mother, Albina, is quite neurotic when it comes to having the latest fashions, home décor, and spic and span house. A dog simply would not fit in with their lifestyle, she reiterates. A busy businessman, Hal’s father is rarely at home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When his birthday rolls around and he’s given a number of failed gifts, Hal is finally taken to Easy Pets to choose a dog! Unbeknownst to Hal, Easy Pets is a rental agency run by a self-serving, greedy couple. The owners are convinced by their kindhearted hired hand, Kayley, that the new dog she brings in is the latest fancy breed, a Tottenham Terrier. Little did they know, the dog was a mutt from the streets. Having not been rented in a week’s time, the terrier is about to be sent to the shelter when…"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "There was the sound of a crate being pried open, and something small and white appeared in the doorway. For a moment, Fleck stood and looked about him. Then like a bullet from a gun he shot across the room and hurled himself at Hal. Almost at the same time, Hal dropped to his knees and held out his arms."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is just the beginning of such an adventuresome story, of such an incredible bond. After a weekend to remember with Fleck, come Monday, Hal finds his best friend gone. Hal and Kayley’s sister find themselves liberating Fleck and a number of the rental agency dogs and hightailing it to the sea, where Hal’s understanding, pro-dog grandparents reside. They come across circus performers, orphans, and a down-on-his-luck farmer, in addition to some sticky situations, on their way to the seaside."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A wonderful testament to the human-animal bond, a fortifying read for young animal lovers, and a book that subtly weaves animal protection themes into its pages. The circus mentioned had given up their wild animals and the rental agency is shut down and a rescue center opened in its place. Woo!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8+."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "This copy was provided for review purposes by Scholastic Press."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
