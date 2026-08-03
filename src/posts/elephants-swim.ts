import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/0395934893-lres.jpg",
    "alt": "Elephants Swim",
    "href": "/media/2010/08/0395934893-lres.jpg",
    "width": 219,
    "height": 188,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://books.google.com/books?id=VhOo9HDkPwUC&printsec=frontcover&dq=Linda+Capus+Riley&source=bl&ots=tftSQItLO_&sig=Yo6s8J8YywdDMNmQnUTB9t2FahI&hl=en&ei=6AMdTPGJGcGclgeGrMCuDQ&sa=X&oi=book_result&ct=result&resnum=8&ved=0CDgQ6AEwBw#v=onepage&q&f=false",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Elephants Swim"
            ]
          }
        ]
      },
      " by Linda Capus Riley and Steve Jenkins is a perfect theme for the summer heat. Lovely animals created from paper collage span most of the pages as single rhyming sentences describe each animal’s distinctive swimming style. A great way for kids to explore biology and adults may even learn something new about different animals. Elephants to armadillos, wild cats to sea creatures, the last image asks about human swimmers to help a child reflect on his or her own abilities in the water. The final pages list all the animals and share more detail about each animal’s water habits."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ms. Riley does a great job touching on the variety of animals without giving too many details for a child to handle. The rhyme will help the reader remember the information easier. ",
      {
        "type": "link",
        "href": "http://www.stevejenkinsbooks.com/",
        "external": true,
        "children": [
          "Mr. Jenkins"
        ]
      },
      "fills two pages with a large collage of each animal, keeping the imagery as clean, simple, and lovely as the sentences. A great book for learning about animals as well as for summer!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
