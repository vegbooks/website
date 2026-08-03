import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2016/05/9780544650312-hres.jpeg",
    "alt": "Mercy",
    "width": 240,
    "height": 355,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I share my birthday (March 2) with Dr. Seuss AKA Theodor Seuss Geisel, which is pretty cool. BUT I’m envious of children’s author Nancy Furstinger who shares hers with the legendary Henry Bergh, founder of the ASPCA and who I would call the grandfather of animal protection in the United States."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Bergh was an icon. He was one really tall chap who sported a top hat that further augmented his physical and figurative authoritative places in society. An aristocrat by birth, he enjoyed his leisure time in Victorian NYC, attending and writing plays, but would eventually come to encounter two scenes of animal cruelty — a Spanish bullfight and a Russian beating his horse mercilessly — that would launch him into becoming one of the loudest voices for the voiceless."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Henry championed not only compassion for canines — working dogs, fighting dogs, and strays of all kinds — but felines, sea turtles, horses, pigeons, farmed animals, circus animals, and many others. He would take on any issue no matter how controversial, like hunting for sport, and did so with such ferocity and zeal. While we have a short bio of Henry featured on our museum’s ",
      {
        "type": "link",
        "href": "/contributors/#CMullin",
        "external": true,
        "children": [
          "website"
        ]
      },
      ", Nancy Furstinger has filled a void in the children’s lit word by creating this thorough and articulate chapter book for grades 5-7 about this American hero who is generally unrecognized outside of animal welfare circles. It’s a book I’d recommend for not only the upper elementary or middle school audiences, but for adults too who want a quick, concise, and illustrated read about this hero of history."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From “Swill Milk and Slaughterhouses” to “‘Civilized’ Blood Sports” to “Battling Barnum,” her chapters explore key animal issues and segments of Bergh’s life. Vincent Desjardin’s artwork is a welcomed break every few pages, and while he illustrates some heavy subject matter, it doesn’t read that way, making it very accessible to any reader. Additional perks throughout the text are sidebars on people and trends of the era including Darwin, Louisa May Alcott, euthanasia in America, and child labor to name a few."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Grades 5-7 (and adults too!)"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
