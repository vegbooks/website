import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/05/9780316129473.jpg",
    "alt": "Forget-Me-Nots: Poems to Learn by Heart",
    "href": "/media/2012/05/9780316129473.jpg",
    "width": 210,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We’ve been really enjoying our review copy of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.hachettebookgroup.com/kids_books_9780316129473.htm",
            "external": true,
            "children": [
              "Forget-Me-Nots: Poems to Learn by Heart"
            ]
          }
        ]
      },
      ". Full of lovely illustrations by Michael Emberly, the poems are organized into eleven categories and are all selected by former Children’s Poet Laureate ",
      {
        "type": "link",
        "href": "http://www.maryannhoberman.com/biography.html",
        "external": true,
        "children": [
          "Mary Ann Hoberman"
        ]
      },
      "with a mind towards memorization. My 3-1/2 year old daughter and I have already sat with this book for hours. She points at the pictures and asks for the poems that relate to them and we ponder together what each one is trying to say. I especially like that there are illustrations on every page."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I loved seeing some of my favorites writers represented, like Edna St. Vincent Millay, ",
      {
        "type": "link",
        "href": "http://www.just-pooh.com/milne.html",
        "external": true,
        "children": [
          "A. A. Milne"
        ]
      },
      ", and J.R. R. Tolkien. The only downside, and I think this is sometimes unavoidable where you have so many poems directed at young people, is that there are a number of poems that veg families will want to skip. The “Delicious Dishes” category is largely about meat, including poems about cooking fish that are crying out. Other poems that you may want be ready to discuss include one about a boy taking a salamander out of the woods in a coffee can and bringing him to school where he “died very quietly during spelling.” Odd how many things geared for children depict cruelty casually and with presumed acceptance but the great thing about poetry is that it can get you thinking and talking."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are wonderful poems and illustrations of animals in the book and I especially enjoyed the more thoughtful selections in the sections about happiness and time. I even learned something new to me, that St. Francis (of San Francisco fame) is considered the patron saint of animals. I’ll happily let you know if any of your favorite writers or themes are featured in this book – just let me know in the comments!"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
