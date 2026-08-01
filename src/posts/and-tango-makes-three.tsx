import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2159",
  "slug": "and-tango-makes-three",
  "url": "/reviews/and-tango-makes-three/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/23/and-tango-makes-three/",
  "title": "And Tango Makes Three",
  "publishedAt": "2010-06-23",
  "publishedLabel": "June 23rd, 2010",
  "excerpt": "Despite the unfortunate zoo setting (all the animals therein shown with happy smiles, of course), And Tango Makes Three, which is based on a true story, serves as touching celebration of love and of the rich…",
  "image": {
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "And Tango Makes Three",
    "width": 212,
    "height": 142
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
      "name": "Animal Courtship",
      "slug": "animal-courtship",
      "url": "/topics/animal-courtship/"
    },
    {
      "name": "Animal Families",
      "slug": "animal-families",
      "url": "/topics/animal-families/"
    },
    {
      "name": "Controversial Kids Books",
      "slug": "controversial-kids-books",
      "url": "/topics/controversial-kids-books/"
    },
    {
      "name": "Henry Bergh Award Winner",
      "slug": "henry-bergh-award-winner",
      "url": "/topics/henry-bergh-award-winner/"
    },
    {
      "name": "Marsha Rakestraw",
      "slug": "marsha-rakestraw",
      "url": "/topics/marsha-rakestraw/"
    },
    {
      "name": "Penguins",
      "slug": "penguins",
      "url": "/topics/penguins/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
    }
  ],
  "reviewer": {
    "name": "Marsha Rakestraw",
    "slug": "marsha-rakestraw",
    "url": "/contributors/marsha-rakestraw/",
    "aliases": [
      "MARSHA RAKESTRAW"
    ]
  },
  "seo": {
    "description": "Despite the unfortunate zoo setting (all the animals therein shown with happy smiles, of course), And Tango Makes Three, which is based on a true story, serves as touching celebration of love and of the rich…",
    "image": "https://vegbooks.org/media/2010/06/girls-book-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Elephants Swim",
    "url": "/reviews/elephants-swim/"
  },
  "next": {
    "title": "Animals in the House",
    "url": "/reviews/animals-in-the-house/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/girls-book-pic-from-istock.jpg"}><img src={"/media/2010/06/girls-book-pic-from-istock.jpg"} alt={"And Tango Makes Three"} width={212} height={142} /></a>
      </figure>
      <p>{"Despite the unfortunate zoo setting (all the animals therein shown with happy smiles, of course), "}<em>{"And Tango Makes Three"}</em>{", which is based on a true story, serves as touching celebration of love and of the rich diversity of families. Roy and Silo are two male penguins at the Central Park Zoo, who fall in love and become lifemates. They exhibit mating behaviors, just like the other penguin couples; they build a nest of stones, just like the others. The only thing different is that they can’t create a baby penguin together. One day when the penguin-keeper gives them an orphaned egg, they care for it until their very own baby hatches: Tango, the first penguin in the zoo to have two daddies. “Roy and Silo taught Tango how to sing for them when she was hungry. They fed her food from their beaks. They snuggled her in their nest at night.”"}</p>
      <p><em>{"And Tango Makes Three"}</em>{", with its irresistible, dedicated daddies and expressive watercolor illustrations, is a simple, beautiful story that, on its own, will be a favorite read-aloud. The underlying message of the diversity of families and easy acceptance of being “a little bit different” offers an excellent opportunity to discuss different kinds of families and same-sex couples in an age-appropriate way."}</p>
      <p>{"Note: "}<em>{"And Tango Makes Three"}</em>{" is an "}<a href={"http://www.ala.org/Template.cfm?Section=pressreleases&template=/contentmanagement/contentdisplay.cfm&ContentID=115431"} target="_blank" rel="noopener noreferrer">{"ALA Notable Children’s Book (2006"}</a>{") and "}<a href={"http://www.aspca.org/pressroom/press-releases/012306.html"} target="_blank" rel="noopener noreferrer">{"Henry Bergh Children’s Book Award"}</a>{" winner."}</p>
      <p>{"Ages 4-9."}</p>
    </div>
  );
}
