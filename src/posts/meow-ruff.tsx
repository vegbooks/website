import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2465",
  "slug": "meow-ruff",
  "url": "/reviews/meow-ruff/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/04/meow-ruff/",
  "title": "Meow Ruff",
  "publishedAt": "2010-07-04",
  "publishedLabel": "July 4th, 2010",
  "excerpt": "While in school, were you ever challenged by a language arts teacher to create a poem that fashioned the outline of a shape? Joyce Sidman and Michelle Berg have taken the concept of concrete poetry, also known as…",
  "image": {
    "src": "/media/2010/07/0618448942-lres1.jpg",
    "alt": "Meow Ruff",
    "width": 219,
    "height": 216
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Concrete Poetry",
      "slug": "concrete-poetry",
      "url": "/topics/concrete-poetry/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Henry Bergh Award Winner",
      "slug": "henry-bergh-award-winner",
      "url": "/topics/henry-bergh-award-winner/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Puppy",
      "slug": "puppy",
      "url": "/topics/puppy/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "While in school, were you ever challenged by a language arts teacher to create a poem that fashioned the outline of a shape? Joyce Sidman and Michelle Berg have taken the concept of concrete poetry, also known as…",
    "image": "https://vegbooks.org/media/2010/07/0618448942-lres1.jpg"
  },
  "previous": {
    "title": "To Market, To Market",
    "url": "/reviews/to-market-to-market/"
  },
  "next": {
    "title": "Whose Garden Is It?",
    "url": "/reviews/whose-garden-is-it/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/0618448942-lres1.jpg"}><img src={"/media/2010/07/0618448942-lres1.jpg"} alt={"Meow Ruff"} width={219} height={216} /></a>
      </figure>
      <p>{"While in school, were you ever challenged by a language arts teacher to create a poem that fashioned the outline of a shape? Joyce Sidman and Michelle Berg have taken the concept of "}<a href={"http://en.wikipedia.org/wiki/Concrete_poetry"} target="_blank" rel="noopener noreferrer">{"concrete poetry"}</a>{", also known as visual or shape poetry, and made a spectacular-in-the-vernacular, full-length picture book that’s not only literary eye candy, but has subtle earth-friendly messages throughout."}</p>
      <p>{"Basic storyline is that a puppy escapes his cookie cutter house and runs over “tramped-on, not-lawn, much-trod (gum wad), crack-filled, anthill,” words that form the gray pavement. Down the road, we find an abandoned kitten who thinks, “where did they go? i’m alone? have they really left me here?” Dog chases cat, both get swept up inside of a thunderous storm, find refuge together, and become friends. The canine’s guardian eventually finds him and sweeps the kitten up in his arms. (Awww! How we love happy endings.)"}</p>
      <p>{"But my words cannot do justice to "}<em>{"Meow Ruff"}</em>{". To really appreciate the “plump bright dome of sugary white white-muffin” clouds, you’ll just have to pick up a copy for yourself. And to further sweeten the deal, know that Sidman is an ASPCA Henry Bergh award recipient and Ms. Berg is a guardian to a loveable mutt."}</p>
      <p>{"Kids can have a try at nature-inspired concrete poetry on this "}<a href={"http://www.wild-about-woods.org.uk/elearning/concretepoetry/"} target="_blank" rel="noopener noreferrer">{"fun site"}</a>{" sponsored by the UK-based Woodland Trust."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
