import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "And Tango Makes Three",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 212,
    "height": 142,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Despite the unfortunate zoo setting (all the animals therein shown with happy smiles, of course), ",
      {
        "type": "emphasis",
        "children": [
          "And Tango Makes Three"
        ]
      },
      ", which is based on a true story, serves as touching celebration of love and of the rich diversity of families. Roy and Silo are two male penguins at the Central Park Zoo, who fall in love and become lifemates. They exhibit mating behaviors, just like the other penguin couples; they build a nest of stones, just like the others. The only thing different is that they can’t create a baby penguin together. One day when the penguin-keeper gives them an orphaned egg, they care for it until their very own baby hatches: Tango, the first penguin in the zoo to have two daddies. “Roy and Silo taught Tango how to sing for them when she was hungry. They fed her food from their beaks. They snuggled her in their nest at night.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "And Tango Makes Three"
        ]
      },
      ", with its irresistible, dedicated daddies and expressive watercolor illustrations, is a simple, beautiful story that, on its own, will be a favorite read-aloud. The underlying message of the diversity of families and easy acceptance of being “a little bit different” offers an excellent opportunity to discuss different kinds of families and same-sex couples in an age-appropriate way."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Note: ",
      {
        "type": "emphasis",
        "children": [
          "And Tango Makes Three"
        ]
      },
      " is an ",
      {
        "type": "link",
        "href": "http://www.ala.org/Template.cfm?Section=pressreleases&template=/contentmanagement/contentdisplay.cfm&ContentID=115431",
        "external": true,
        "children": [
          "ALA Notable Children’s Book (2006"
        ]
      },
      ") and ",
      {
        "type": "link",
        "href": "http://www.aspca.org/pressroom/press-releases/012306.html",
        "external": true,
        "children": [
          "Henry Bergh Children’s Book Award"
        ]
      },
      " winner."
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
