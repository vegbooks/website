import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2018/11/wild-orca.jpg",
    "alt": "Wild Orca: The Oldest, Wisest Whale in the World",
    "width": 300,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://us.macmillan.com/books/9781250110695",
        "external": true,
        "children": [
          "WILD ORCA"
        ]
      },
      " is a beautiful picture book filled with anticipation, drama, and a surprising amount of orca information. Told through the perspective of Mia, a young girl who awaits a familiar pod’s arrival. The pod, led by an ancient orca called Granny, hasn’t been seen for many seasons, and Mia is concerned that something is wrong. This trepidation sets up the tension in the story even as the bustle of preparation for the pod’s arrival builds."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Author Brenda Peterson has skillfully intertwined the touching story of Mia’s love for the pod and hope to see them with scientific methods of researching orcas. It feels natural when details about Mia and the San Juan islands drift into information about human-made dangers orcas face and dropping hydrophones into the oceans to listen to orca songs. Peterson tells the story while maintaining the voice of a young girl with emphasis on sounds, inner thoughts, and child-like wonder."
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "On Lime Kiln Point, Mia wonders: ",
          {
            "type": "emphasis",
            "children": [
              "Is another orca stranded? Is Granny dead?"
            ]
          },
          "No whale whistles. Just the ",
          {
            "type": "emphasis",
            "children": [
              "shoosh"
            ]
          },
          "of waves and the ",
          {
            "type": "emphasis",
            "children": [
              "clank-clank"
            ]
          },
          "of a ferryboat."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The paintings for Wild Orca are stunning. Illustrator Wendell Minor captures both the orca world and the human world with beauty and movement. The underwater and diving orca scenes are especially impressive. And the detail and storytelling images on land help readers picture the setting. I especially appreciated the image of Mia and the community singing and drumming as they await the orca pod. The joyful scenes of orcas splashing in the ocean are contrasted with the anxious work of islanders protecting a stranded whale until high tide. Minor ensures the emotion comes through while maintaining a realistic lens on the events."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Wild Orca is a children’s book that adults will also both enjoy and learn from. Its ability to be entertaining, informative, beautiful and inspiring ensures it will be read again and again. Billed as a tribute to Granny, a beloved orca who lived to be 105 years old, the book includes an endnote that adds detail about Granny, her pod and descendants, and a call to action for those moved by the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended for ages 4-8 and beyond."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
