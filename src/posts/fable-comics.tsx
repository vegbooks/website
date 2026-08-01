import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10144",
  "slug": "fable-comics",
  "url": "/reviews/fable-comics/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/09/26/fable-comics/",
  "title": "Fable Comics",
  "publishedAt": "2015-09-26",
  "publishedLabel": "September 26th, 2015",
  "excerpt": "Fable Comics, a collection of 28 re-envisioned, sometimes recast, and most definitely re-illustrated fables is recommended for ages 7-10. This wide range of artists and fables, edited by Chris Duffy, makes for both…",
  "image": {
    "src": "/media/2015/09/9781626721074.jpg",
    "alt": "Fable Comics cover featuring a tortoise and hare reading comic books",
    "width": 210,
    "height": 276
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Chris Duffy",
      "slug": "chris-duffy",
      "url": "/topics/chris-duffy/"
    },
    {
      "name": "Fables",
      "slug": "fables",
      "url": "/topics/fables/"
    },
    {
      "name": "George O'Connor",
      "slug": "george-oconnor",
      "url": "/topics/george-oconnor/"
    },
    {
      "name": "Jaime Hernandez",
      "slug": "jaime-hernandez",
      "url": "/topics/jaime-hernandez/"
    },
    {
      "name": "Jennifer L. Meyer",
      "slug": "jennifer-l-meyer",
      "url": "/topics/jennifer-l-meyer/"
    },
    {
      "name": "Kristin Wald",
      "slug": "kristin-wald",
      "url": "/topics/kristin-wald/"
    },
    {
      "name": "Maris Wicks",
      "slug": "maris-wicks",
      "url": "/topics/maris-wicks/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Sophie Goldstein",
      "slug": "sophie-goldstein",
      "url": "/topics/sophie-goldstein/"
    },
    {
      "name": "Ulises Farina",
      "slug": "ulises-farina",
      "url": "/topics/ulises-farina/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "Fable Comics, a collection of 28 re-envisioned, sometimes recast, and most definitely re-illustrated fables is recommended for ages 7-10. This wide range of artists and fables, edited by Chris Duffy, makes for both…",
    "image": "https://vegbooks.org/media/2015/09/9781626721074.jpg"
  },
  "previous": {
    "title": "Zora’s Zucchini",
    "url": "/reviews/zoras-zucchini/"
  },
  "next": {
    "title": "Little Robot",
    "url": "/reviews/little-robot/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/09/9781626721074.jpg"} alt={"Fable Comics cover featuring a tortoise and hare reading comic books"} width={210} height={276} />
      </figure>
      <p><em>{"Fable Comics"}</em>{", a collection of 28 re-envisioned, sometimes recast, and most definitely re-illustrated fables is recommended for ages 7-10. This wide range of artists and fables, edited by Chris Duffy, makes for both an amazing companion to traditional fables and myths or fabulous as a stand-alone book to enjoy."}</p>
      <p>{"The interpretations and inventive illustrations in this collection have a saucy appeal that children will find both humorous and (to caretakers’ amused chagrin) inspiring. Upon first reading, I found that some fables suffered under what seemed like a private joke or an overly complicated plot interpretation. However, as I reread, it became clear that the abruptness of the fable style was being imitated in a cleverly modern manner. This collection is a keeper."}</p>
      <p>{"The fables that inspired the graphic reimaginings are listed in small print at the bottom of each fable’s first page. Particularly clever versions include Sophie Goldstein’s “Leopard Drums Up Dinner,” each of George O’Connor’s “Hermes” fables, Ulises Farinas’ “The Great Weasel War,” and Maris Wicks’ “The Dolphins, The Whales, and the Sprat.” Special mention goes to the hauntingly beautiful rendition of “Fox & Crow” by Jennifer L. Meyer; it’s the most abstract and frame-worthy piece. It is also the clearest example where reading the original prior will ensure greater enjoyment of the interpretation."}</p>
      <p>{"Because of the sudden stops in the genre of the fable, some of these stories may need caretakers to explain both the plot and meaning to younger children, "}<em>{"Fable Comics"}</em>{" has a vast style and appeal range, and children who enjoy one fable will be drawn to others they might not have chosen themselves."}</p>
      <p>{"More sensitive children may be upset by the “animal behaviors” in some of the fables. However, other interpretations are more gentle than the original. For example, in Jaime Hernandez’s “The Boy Who Cried Wolf,” no boy, and no sheep are eaten, but the lesson remains."}</p>
      <p>{"I believe that children and adults will enjoy reading this collection again and again."}</p>
    </div>
  );
}
