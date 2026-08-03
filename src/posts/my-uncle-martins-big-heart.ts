import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/my-uncle-martin.jpg",
    "alt": "My Uncle Martin’s Big Heart",
    "href": "/media/2010/08/my-uncle-martin.jpg",
    "width": 210,
    "height": 275,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Angela Farris Watkins recounts her childhood memories of the Rev. Martin Luther King Jr. in the forthcoming book, ",
      {
        "type": "emphasis",
        "children": [
          "My Uncle Martin’s Big Heart"
        ]
      },
      ". Her recollections are warm and personal, and give children an opportunity to understand what motivated one of the most successful social justice movements of the 20th century. ",
      {
        "type": "link",
        "href": "http://www.ericvelasquez.com/",
        "external": true,
        "children": [
          "Eric Velasquez’s"
        ]
      },
      " portrait-like illustrations help underscore the importance of the subjects of this book, both Dr. King and the cause he led."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As the title of her book suggests, Dr. Watkins finds that what made her uncle so special from her perspective is what also motivated his politics: his love. Readers are left asking themselves: How can we bring about Dr. King’s view of a world of equality today? How does our love — for our families, our communities, ",
      {
        "type": "link",
        "href": "http://www.usatoday.com/news/nation/2008-01-27-animal-activists_N.htm",
        "external": true,
        "children": [
          "animals"
        ]
      },
      ", or the environment — motivate our actions?"
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
