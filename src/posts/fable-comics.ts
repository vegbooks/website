import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2015/09/9781626721074.jpg",
    "alt": "Fable Comics cover featuring a tortoise and hare reading comic books",
    "width": 210,
    "height": 276,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Fable Comics"
        ]
      },
      ", a collection of 28 re-envisioned, sometimes recast, and most definitely re-illustrated fables is recommended for ages 7-10. This wide range of artists and fables, edited by Chris Duffy, makes for both an amazing companion to traditional fables and myths or fabulous as a stand-alone book to enjoy."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The interpretations and inventive illustrations in this collection have a saucy appeal that children will find both humorous and (to caretakers’ amused chagrin) inspiring. Upon first reading, I found that some fables suffered under what seemed like a private joke or an overly complicated plot interpretation. However, as I reread, it became clear that the abruptness of the fable style was being imitated in a cleverly modern manner. This collection is a keeper."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The fables that inspired the graphic reimaginings are listed in small print at the bottom of each fable’s first page. Particularly clever versions include Sophie Goldstein’s “Leopard Drums Up Dinner,” each of George O’Connor’s “Hermes” fables, Ulises Farinas’ “The Great Weasel War,” and Maris Wicks’ “The Dolphins, The Whales, and the Sprat.” Special mention goes to the hauntingly beautiful rendition of “Fox & Crow” by Jennifer L. Meyer; it’s the most abstract and frame-worthy piece. It is also the clearest example where reading the original prior will ensure greater enjoyment of the interpretation."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Because of the sudden stops in the genre of the fable, some of these stories may need caretakers to explain both the plot and meaning to younger children, ",
      {
        "type": "emphasis",
        "children": [
          "Fable Comics"
        ]
      },
      " has a vast style and appeal range, and children who enjoy one fable will be drawn to others they might not have chosen themselves."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "More sensitive children may be upset by the “animal behaviors” in some of the fables. However, other interpretations are more gentle than the original. For example, in Jaime Hernandez’s “The Boy Who Cried Wolf,” no boy, and no sheep are eaten, but the lesson remains."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I believe that children and adults will enjoy reading this collection again and again."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
