import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3131",
  "slug": "the-perfect-pet",
  "url": "/reviews/the-perfect-pet/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/22/the-perfect-pet/",
  "title": "The Perfect Pet",
  "publishedAt": "2010-09-22",
  "publishedLabel": "September 22nd, 2010",
  "excerpt": "A dog is too loud. A horse is too big. What’s an animal-loving kid to do when her parents’ response to every species she suggests is “no”? As much as she likes the “pet” cactus her parents gave her, Elizabeth, the…",
  "image": {
    "src": "/media/2010/09/the-perfect-pet.jpg",
    "alt": "The Perfect Pet",
    "width": 210,
    "height": 179
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
      "name": "Bruce Whatley",
      "slug": "bruce-whatley",
      "url": "/topics/bruce-whatley/"
    },
    {
      "name": "Bugs",
      "slug": "bugs",
      "url": "/topics/bugs/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Insects",
      "slug": "insects",
      "url": "/topics/insects/"
    },
    {
      "name": "Margie Palatini",
      "slug": "margie-palatini",
      "url": "/topics/margie-palatini/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Speciesism",
      "slug": "speciesism",
      "url": "/topics/speciesism/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "A dog is too loud. A horse is too big. What’s an animal-loving kid to do when her parents’ response to every species she suggests is “no”? As much as she likes the “pet” cactus her parents gave her, Elizabeth, the…",
    "image": "https://vegbooks.org/media/2010/09/the-perfect-pet.jpg"
  },
  "previous": {
    "title": "Michael Recycle",
    "url": "/reviews/michael-recycle/"
  },
  "next": {
    "title": "Alejandro’s Gift",
    "url": "/reviews/alejandros-gift/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/the-perfect-pet.jpg"}><img src={"/media/2010/09/the-perfect-pet.jpg"} alt={"The Perfect Pet"} width={210} height={179} /></a>
      </figure>
      <p>{"A dog is too loud. A horse is too big. What’s an animal-loving kid to do when her parents’ response to every species she suggests is “no”?"}</p>
      <p>{"As much as she likes the “pet” cactus her parents gave her, Elizabeth, the main character in this lighthearted book by "}<a href={"http://margiepalatini.com/"} target="_blank" rel="noopener noreferrer">{"Margie Palatini"}</a>{" and "}<a href={"http://www.harpercollins.com/authors/12885/Bruce_Whatley/index.aspx"} target="_blank" rel="noopener noreferrer">{"Bruce Whatley"}</a>{", is still hankering for a companion. So when she discovers a bug just hanging out in her room, she decides to adopt him as her own and names him Doug."}</p>
      <p>{"Kids will enjoy the humor. Expect a few giggles when Elizabeth’s dad whispers, “Think we should have said yes to the dog?” And parents will like the open-minded approach Elizabeth’s parents demonstrate when they accept Doug as part of the family. You might also find that this book provides a good opportunity to discuss the differences (and similarities) among species: Why do some people think dogs are good pets, but bugs are for exterminating?"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
