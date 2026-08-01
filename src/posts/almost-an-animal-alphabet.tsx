import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9283",
  "slug": "almost-an-animal-alphabet",
  "url": "/reviews/almost-an-animal-alphabet/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/12/12/almost-an-animal-alphabet/",
  "title": "Almost an Animal Alphabet",
  "publishedAt": "2013-12-12",
  "publishedLabel": "December 12th, 2013",
  "excerpt": "Almost an Animal Alphabet by Katie Viggers is a sensory delight. First of all, I love the feel of the book. The cover is like a wood panel with a smooth suede surface. The color palette soft yet harmonized. The style…",
  "image": {
    "src": "/media/2013/12/almost-animal-alphabet.jpg",
    "alt": "AlmostAnimalAlphabet",
    "width": 210,
    "height": 210
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
    },
    {
      "name": "Katie Viggers",
      "slug": "katie-viggers",
      "url": "/topics/katie-viggers/"
    },
    {
      "name": "Owls",
      "slug": "owls",
      "url": "/topics/owls/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Jane Cowles",
    "slug": "jane-cowles",
    "url": "/contributors/jane-cowles/",
    "aliases": [
      "JANE COCO COWLES",
      "JANE COWLES"
    ]
  },
  "seo": {
    "description": "Almost an Animal Alphabet by Katie Viggers is a sensory delight. First of all, I love the feel of the book. The cover is like a wood panel with a smooth suede surface. The color palette soft yet harmonized. The style…",
    "image": "https://vegbooks.org/media/2013/12/almost-animal-alphabet.jpg"
  },
  "previous": {
    "title": "V Is for Vegan",
    "url": "/reviews/v-is-for-vegan/"
  },
  "next": {
    "title": "Brother Bear (2003)",
    "url": "/reviews/brother-bear/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/12/almost-animal-alphabet.jpg"}><img src={"/media/2013/12/almost-animal-alphabet.jpg"} alt={"AlmostAnimalAlphabet"} width={210} height={210} /></a>
      </figure>
      <p><em>{"Almost an Animal Alphabet"}</em>{" by Katie Viggers is a sensory delight. First of all, I love the feel of the book. The cover is like a wood panel with a smooth suede surface. The color palette soft yet harmonized. The style of the illustrations is diverse."}</p>
      <p>{"The title intrigues me. Why “Almost”? Because each letter does not represent an animal? N is “night time” and U is “underground.” Because all the varieties within the species starting with that particular letter of the alphabet are included? There are many types of cats but the author mentions only cat."}</p>
      <p>{"I would like to think that the author used the “almost” to suggest that no matter how comprehensive, no guide or reference will cover all possibilities. In this way the title is inviting and encourages the reader to use his imagination. Rather than limiting the letter N to nematode, nighttime gives way to a number of nocturnal animals."}</p>
      <p>{"The book has an open ended style. So the author refers to six types of owls, but how many more types of owls exist? If an owl does not fall into one of these six categories, is it still an owl? In this light the book invites acceptance of diversity and encourages individuality."}</p>
      <p>{"Although the word whimsical is overused at times, I feel it is quite fitting for this charmingly quirky introduction to A to Zs. As an artist, I personally would love to have this book on display as a conversation piece for people of all ages."}</p>
      <p>{"To finish, I love the map on the back cover that identifies the indigenous habitat of all the animals mentioned in the book."}</p>
      <p>{"Bravo to Katie Viggers, Nas and Wally Molly."}</p>
      <p><em>{"The publisher"}</em><em><a href={"http://www.powerhousebooks.com/?p=16471"} target="_blank" rel="noopener noreferrer">{"powerHouse Books"}</a>{"sent a review copy of this title."}</em></p>
    </div>
  );
}
