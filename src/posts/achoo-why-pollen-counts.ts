import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "We received ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.arbordalepublishing.com/bookpage.php?id=Achoo",
            "external": true,
            "children": [
              "Achoo! Why Pollen Counts"
            ]
          }
        ]
      },
      " as a free review copy at our house, and my kids, age 5 and 7, could not wait to read it. I didn’t pre-read it, we simply sat down and dived right in."
    ]
  },
  {
    "type": "image",
    "src": "/media/2016/04/achoo.jpg",
    "alt": "Achoo",
    "width": 612,
    "height": 720
  },
  {
    "type": "paragraph",
    "children": [
      "Though I’ve reviewed books for Vegbooks about food allergies in the past, we are not strangers to seasonal and environmental allergies in our house. Both kids loved the inviting illustrations of Baby Bear and his forest friends and were fascinated to learn that pollen is a protein rich food. Even spiders eat pollen, while bees use it to make something called “beebread.” Both were new pieces of information for us!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Baby Bear learns all about pollen when, owing to his allergies, he wishes there was no pollen. This was very relatable because through learning more about the role pollen plays, he realizes that he doesn’t hate pollen (though there’s nothing wrong with being frustrated about being frustrated by it)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book includes some informative details in the final pages as well as discussion points. Also included is a page to help understand allergies. It likens the immune system to a superhero to protect us but indicates that sometimes it gets confused. It also distinguishes between runny noses and more run-of-the-mill reactions and those that affect airways in a more significant way. “If this happens, you need to get medical help immediately,” the notes indicate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The vocabulary is appropriate for the subject matter so it is probably best for ages 5 and up, though I think younger children can engage with the images and some of the information if read aloud."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
