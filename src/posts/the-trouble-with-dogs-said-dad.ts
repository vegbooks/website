import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/9780763649739.jpg",
    "alt": "The Trouble with Dogs, Said Dad",
    "href": "/media/2010/09/9780763649739.jpg",
    "width": 210,
    "height": 193,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I love this book! Featuring some nontraditional (read: tattooed and pierced) parents, compassionate and assertive kids, and cute dogs, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.education.wisc.edu/ccbc/books/detailBook.asp?idBooks=2339",
            "external": true,
            "children": [
              "The Trouble with Dogs, Said Dad"
            ]
          }
        ]
      },
      " is a fun read."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.theweeweb.co.uk/public/author_profile.php?id=172",
        "external": true,
        "children": [
          "Bob Graham"
        ]
      },
      " tells a story that’s familiar to anyone who’s loved and lived with dogs: the family has an exuberant pup who can sometimes be, well, a little much. They hire a dog trainer to help them out, but his “training” methods involve a choke chain and a lot of yelling. In the end, the family decides against these harsh ways, and let their excitable pup simply be who he is. Even the loudmouth trainer comes around to the pup’s charms."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The ending is a bit impractical — after all, in real life, dog behavior problems can cause significant damage or ",
      {
        "type": "link",
        "href": "http://www.tufts.edu/vet/behavior/abh.shtml",
        "external": true,
        "children": [
          "reflect genuine distress"
        ]
      },
      " — but still, there’s something lovely about Mr. Graham’s the message of care and respect. And the illustrations cannot be beat!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
