import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/06/9781585368631.jpg",
    "alt": "9781585368631",
    "href": "/media/2013/06/9781585368631.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I may just be a softie but this board book (you can also purchase it as a hardcover) made me teary! I received a review copy from ",
      {
        "type": "link",
        "href": "http://sleepingbearpress.com//",
        "external": true,
        "children": [
          "Sleeping Bear Press"
        ]
      },
      ". (You’ll be seeing a number of reviews of their review copies from me in the future on Vegbooks.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The charming watercolor illustrations depict a baby bear being read to by different family members, each one hoping that the baby’s first word will be their name. An excerpt of my favorite iteration of the theme:"
    ]
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
              "When your brother played with you for the first time, he read you a book.",
              {
                "type": "lineBreak"
              },
              " He read about sand castles, bubbles, and how brothers are there forever.",
              {
                "type": "lineBreak"
              },
              " Then he said, “Say Brother. Say Brother.” He hoped Brother would be your first word."
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The prose is sweet and I think this would be a great bedtime book, my 2-1/2-year-old and 4-1/2-year-old enjoyed the twist at the end (spoiler alert) where the baby says his first word… “Book!” My daughter picked up the book and “read” it to her little brother right after I finished it – she was able to use the pictures to retell the story (it has been mentioned before on Vegbooks that even board books are great early reading tools). I think reading aloud is so important and each of the bears that read to the baby were fostering a love of reading. The story closes with the Daddy trying one more time to get the baby to say his name. With Father’s Day coming up, I think that if you’re looking for book for a new or expectant father this would be a fun choice. It actually ends with the baby’s first birthday so that is another great occasion to consider gifting ",
      {
        "type": "emphasis",
        "children": [
          "Say Daddy"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
