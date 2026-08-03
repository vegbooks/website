import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/05/coyle-do-superheroes.jpg",
    "alt": "Do Super Heroes Have Teddy Bears?",
    "href": "/media/2012/05/coyle-do-superheroes.jpg",
    "width": 210,
    "height": 180,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My son and daughter dove right into the review copy of ",
      {
        "type": "link",
        "href": "http://www.publishersweekly.com/978-1-58979-693-5",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Do Super Heroes Have Teddy Bears?"
            ]
          }
        ]
      },
      " when it arrived in the mail and it was a hit with them! A little boy and his sister both play super hero in this charming book by ",
      {
        "type": "link",
        "href": "http://www.carmelacoyle.com/",
        "external": true,
        "children": [
          "Carmela LaVigna Coyle"
        ]
      },
      " and illustrated by Mike Gordon. I wasn’t sure (based on the title) if there would be a conflict about having a bear but it is just one component of the question and answer format within."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some of the questions include:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Do super heroes make capes with blankies and string?",
          {
            "type": "lineBreak"
          },
          " We can turn blankies into most anything."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "Are heroes always brave and daring?",
          {
            "type": "lineBreak"
          },
          " We’re brave and bold and kind and caring."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "Is there still enough time to save the day?",
          {
            "type": "lineBreak"
          },
          " I’m sure you will in your very own way."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations speak volumes in each scene. For example, on the pages about saving the day, our little super heroes are shown recycling, turning off a dripping spigot, and even the little dog is adding to the compost pile from his food dish (though I’m not sure that is the best fodder for compost). The final message of the book is to be your own hero. I especially like that the little boy is looking at his father and imagining that he is a super dad and that his room is decorated not just with caped super hero posters but a firefighter poster. There are even stickers to decorate in the back that can act as hero emblems."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Two notes for veg families: the little boy runs away from eating peas and carrots at dinner and you can see the family is eating chicken. Also, he accidentally breaks a fish bowl but his sister saves the fish in a water glass and the fish is shown safely in a new bowl on another page. We enjoyed this book, especially all the imaginative games the brother and sister play, like putting boxes and tape together to make a spaceship. With summer coming, it is nice to remember that some of the best days for children are filled with outdoor and imaginary play."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "I used to play super hero when I was little (and maybe even as a teen)…did you?"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
