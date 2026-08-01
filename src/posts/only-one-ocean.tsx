import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7215",
  "slug": "only-one-ocean",
  "url": "/reviews/only-one-ocean/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/04/01/only-one-ocean/",
  "title": "Only One Ocean",
  "publishedAt": "2012-04-01",
  "publishedLabel": "April 1st, 2012",
  "excerpt": "Looking for a kids’ CD featuring a range of musical styles and a strong, positive message of marine conservation? Then The Banana Slug String Band’s album “Only One Ocean” is definitely for you! The copy of this CD…",
  "image": {
    "src": "/media/2012/03/ocean-cover-rgbmed.jpg",
    "alt": "Only One Ocean",
    "width": 210,
    "height": 210
  },
  "categories": [
    {
      "name": "Music",
      "slug": "music",
      "url": "/music/"
    }
  ],
  "tags": [
    {
      "name": "Banana Slug String Band",
      "slug": "banana-slug-string-band",
      "url": "/topics/banana-slug-string-band/"
    },
    {
      "name": "Conservation",
      "slug": "conservation",
      "url": "/topics/conservation/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Ecosystems",
      "slug": "ecosystems",
      "url": "/topics/ecosystems/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    },
    {
      "name": "Marine Mammals",
      "slug": "marine-mammals",
      "url": "/topics/marine-mammals/"
    },
    {
      "name": "Music",
      "slug": "music",
      "url": "/topics/music/"
    },
    {
      "name": "Ocean",
      "slug": "ocean",
      "url": "/topics/ocean/"
    },
    {
      "name": "Oceans",
      "slug": "oceans",
      "url": "/topics/oceans/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Pollution",
      "slug": "pollution",
      "url": "/topics/pollution/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "Looking for a kids’ CD featuring a range of musical styles and a strong, positive message of marine conservation? Then The Banana Slug String Band’s album “Only One Ocean” is definitely for you! The copy of this CD…",
    "image": "https://vegbooks.org/media/2012/03/ocean-cover-rgbmed.jpg"
  },
  "previous": {
    "title": "The Lorax (2012)",
    "url": "/reviews/the-lorax/"
  },
  "next": {
    "title": "Peregrine’s Sky",
    "url": "/reviews/peregrines-sky/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/03/ocean-cover-rgbmed.jpg"}><img src={"/media/2012/03/ocean-cover-rgbmed.jpg"} alt={"Only One Ocean"} width={210} height={210} /></a>
      </figure>
      <p>{"Looking for a kids’ CD featuring a range of musical styles and a strong, positive message of marine conservation? Then "}<a href={"http://www.bananaslugstringband.com/"} target="_blank" rel="noopener noreferrer">{"The Banana Slug String Band’s"}</a>{" album “Only One Ocean” is definitely for you! The copy of "}<a href={"https://www5.cruzio.com/w5a146/prds0708.html#oneOcean"} target="_blank" rel="noopener noreferrer">{"this CD"}</a>{" we received to review has been in very heavy rotation in our household, and it is not just the children that have been enjoying the clever lyrics and catchy tunes. The ocean-themed songs feature a wide range of facts about subjects ranging from plankton to cetaceans (your kids will enjoy singing along to the fast paced singing in “Cetacea,” you will be impressed that they can suddenly rattle off so many cetaceans in so little time) to, perhaps most importantly, the relationship between the ocean and the global climate."}</p>
      <p>{"This is one of those rare CDs that seems to make everyone smarter for having listened to it. Despite the fact that we work to reduce plastic consumption in our household, it wasn’t until we listened to the song “Turtle Ate a Jelly” that some of the younger members of our cadre realized why we do this, making the connection between plastic bags in the sea and wildlife confusing them with a meal. Ditto with the information about the worrisome state of the world’s coral reefs in “Coral Reef.” You may actually find yourself walking around humming lines like, “our reef needs some protection from human destruction.”"}</p>
      <p>{"The Banana Slug String Band’s motto is “Science, Song and Celebration” and they’ve released a number of albums marrying environmental education and song. “Only One Ocean’s” songs are based on the Lawrence Hall of Science’s "}<a href={"http://mare.lawrencehallofscience.org/ocean"} target="_blank" rel="noopener noreferrer">{"Ocean Literacy"}</a>{" curricula. Though the lyrics can occasionally veer into some advanced concepts, this CD is appropriate for ages 4 and up. Happy listening!"}</p>
    </div>
  );
}
