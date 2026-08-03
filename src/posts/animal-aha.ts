import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/animalaha.jpg",
    "alt": "Animal Aha!",
    "href": "/media/2011/10/animalaha.jpg",
    "width": 210,
    "height": 274,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In order to prove to the masses that animals are intelligent, scientists have spent countless hours – decades even (think: ",
      {
        "type": "link",
        "href": "/reviews/me-jane/",
        "children": [
          "Jane Goodall"
        ]
      },
      ") – observing their behavior or carrying out experiments. On a personal level, that irks me; it should be a given that animals (at the very least mammals since people generally find them easier to relate to) are critical thinkers and social, emotional, sentient beings. I take one look at my sleeping canine companion, Sophia, and easily see that she’s processing a dream sequence – her legs moving, small barks making their way outside of her reverie. I gather she’s chasing a worthy squirrel. What animal would do that if they weren’t cognizant, soulful even?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Tirade over. For the “I need to science to back it up” camp, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://site.annickpress.com/catalog/catalog.aspx?Title=Animal+Aha!",
            "children": [
              "Animal Aha!"
            ]
          }
        ]
      },
      "is a great choice in showing a wide range of animals, from cockroaches to pythons to gorillas, and the new discoveries made in light of their behavior. These findings, readers will discover, not only fascinate us, but will help demonstrate that there’s so much we don’t know about the natural world. So let us not judge too quickly and dismiss the intelligence of our animal brethren."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Elephants recognize themselves in mirrors. Dolphins can do math. Parrots can understand and say they’re sorry. Author Diane Swanson does a wonderful job compiling the most intriguing of studies and accompanying images for this very colorful, quick nonfiction read."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 7-9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
