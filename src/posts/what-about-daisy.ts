import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/book-cover.jpg",
    "alt": "What about Daisy?",
    "href": "/media/2011/06/book-cover.jpg",
    "width": 210,
    "height": 168,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Like many Vegbooks readers, Maryan Faresh is a caring and compassionate individual; she’s a children’s advocate and an animal advocate, and the niche she’s carved out for herself in kid lit melds these two areas of concerns and the special needs they may be living with. Faresh boldly took the initiative to self-publish ",
      {
        "type": "link",
        "href": "http://www.whataboutdaisy.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "What about Daisy?"
            ]
          }
        ]
      },
      ", a story inspired by her own deaf and blind pup, that can be used to teach sensitivity, tolerance, (self-) acceptance, empathy, character, friendship, and guardianship."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ms. Didi, also a canine, operates Rescue Ranch, an adoption facility in which she finds “forever homes” for the puppies. Until they are adopted, the gangly group is groomed, fed, disciplined, and encouraged to take naps and later to play. Throughout the book, and especially at the beginning, readers will wonder about the one dog who is always accompanied by two fairies. What is it about Daisy? What makes her so special? We discover that she is deaf and blind and that the fairies, Bella and Beva, are her guides. They accompany Ms. Didi on her venture to find Daisy her forever home with what needs to be a very special family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Many of the families they encounter are not sympathetic nor are they kind, but along the way readers will appreciate a great cast of characters (many living with special needs too), especially Louie, a three-legged cat. Louie is well-connected and knows of a great store owner who may be able to help. I won’t spoil the ending, although you can probably surmise that it’s a good one."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For her first self-published work, Faresh has accomplished what many have only dreamed of, and she’s done it well. She understands that to get little ones involved in the story’s telling, repeating phrases are key. Kids can chime in with “…what about Daisy?” throughout the narrative. And the artistically-detailed illustrations of Gail Suzanne Weismann are rich enough that they alone can provide the substance for a pre-reader to use in narrating the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Proceeds benefit special needs animal and children’s organizations."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "P.S. – Check out Daisy’s archive of videos on",
      {
        "type": "link",
        "href": "http://www.youtube.com/watch?v=gdhCSuriB2U",
        "external": true,
        "children": [
          "YouTube"
        ]
      },
      "!"
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
