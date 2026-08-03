import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/08/one-and-only-ivan-hc-c.jpg",
    "alt": "The One and Only Ivan",
    "href": "/media/2012/08/one-and-only-ivan-hc-c.jpg",
    "width": 213,
    "height": 300,
    "align": "right"
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "hello"
            ]
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "I am Ivan. I am a gorilla."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "It’s not as easy as it looks."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "So begins the spare, beautiful tale of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "https://www.youtube.com/watch?v=UtPdqV2crQ0&feature=player_embedded#!",
            "external": true,
            "children": [
              "The One and Only Ivan"
            ]
          }
        ]
      },
      ", a novel about a gorilla kept in a shopping mall exhibit, next to animals forced to perform in a circus."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s difficult to review complex books, particularly those geared to children, and I find myself struggling to put into words what this book made me feel. I nearly used the word “heartbreaking” to describe ",
      {
        "type": "emphasis",
        "children": [
          "Ivan"
        ]
      },
      ", as I frequently found tears streaming down my face, but I also laughed out loud and was thoroughly satisfied with the ending, so perhaps the better descriptor is “heart-mending.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What I find myself wanting to do is quote the book to you, so you’ll be moved by the language and will see how author ",
      {
        "type": "link",
        "href": "http://www.mrschureads.blogspot.com/2012/07/audio-clip-of-day-katherine-applegate.html",
        "external": true,
        "children": [
          "Katherine Applegate"
        ]
      },
      " manages to tell the story of a captive silverback gorilla from his perspective without anthropomorphizing him or debasing him. (I realize at this point in my review that we should come up with a variant on the word “dehumanize” that encompasses all the Great Apes — these are the kinds of thoughts that this book inspires.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Among the passages I would quote to you would be this one —"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Sadly, I cannot read, although I wish that I could. Reading stories would make a fine way to fill my empty hours."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "Once, however, I was able to enjoy a book left in my domain by one of my keepers."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "It tasted like termite."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "But I wouldn’t know where to begin, or most importantly, end, and I might violate copyright laws or mangle a book that really ought to be read in its entirety. So, right now, stop reading my review long enough to place a hold on this book at your local library or order it from your favorite bookstore (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0061992259/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0061992259&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") — trust me, you’re going to want to read this one yourself — and I’ll just highlight some aspects of this book that you should be aware of before reading it with your child."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "First, you ought to know that this book is fundamentally about keeping wild animals in captivity. It’s well-told and captivating, but some ugly truths are revealed in the story: that humans kill gorilla parents to get their babies for the ",
      {
        "type": "link",
        "href": "http://www.bornfreeusa.org/a9_wildlifetrade.php",
        "external": true,
        "children": [
          "pet trade"
        ]
      },
      "; that social animals are often kept in solitary conditions (hence the title ",
      {
        "type": "emphasis",
        "children": [
          "The One and Only Ivan"
        ]
      },
      "); and that ",
      {
        "type": "link",
        "href": "http://www.bornfreeusa.org/a1a6b1_bullhook.php",
        "external": true,
        "children": [
          "bullhooks"
        ]
      },
      " (which Ivan calls “claw-sticks”) and chains are used to abuse elephants so they will perform tricks."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Second, families concerned with animal rights should be aware that the ending involves placing Ivan and his elephant companion Ruby in a zoo. But there is no illusion that a zoo is better than the wild. Good zoos are described as being “wild cages,” where animals can roam and humans don’t hurt them. Ivan points out, “It’s not a perfect place. …I can see that. A perfect place would not need walls.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Finally, know that this book may leave your child (or you) struggling to understand what makes us human, given that we too are Great Apes, along with chimpanzees, bonobos, and orangutans, “all of us distant and distrustful cousins.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Over 500 words into this review, I still haven’t told you about the incredibly inspiring character Julia, or how Ivan stands up for someone more defenseless than himself, or the positive light in which animal rights activists are portrayed. You’re just going to have to read it yourself."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is geared to kids ages 9 to 12, but would be suitable read-aloud to children as young as 6 and (if I haven’t already made clear) is easily enjoyed by adults."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
