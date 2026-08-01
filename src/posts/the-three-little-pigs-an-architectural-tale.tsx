import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1966",
  "slug": "the-three-little-pigs-an-architectural-tale",
  "url": "/reviews/the-three-little-pigs-an-architectural-tale/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/15/the-three-little-pigs-an-architectural-tale/",
  "title": "The Three Little Pigs: An Architectural Tale",
  "publishedAt": "2010-06-15",
  "publishedLabel": "June 15th, 2010",
  "excerpt": "Steven Guarnaccia’s fresh take on the three little pigs will delight parents with an eye to design or architecture. Basing the pigs on Frank Gehry, Phillip Johnson, and Frank Lloyd Wright, Mr. Guarnaccia’s work also…",
  "image": {
    "src": "/media/2010/06/three-little-pigs.jpg",
    "alt": "The Three Little Pigs: An Architectural Tale",
    "width": 244,
    "height": 345
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
      "name": "Architecture",
      "slug": "architecture",
      "url": "/topics/architecture/"
    },
    {
      "name": "Design",
      "slug": "design",
      "url": "/topics/design/"
    },
    {
      "name": "Fairy Tales",
      "slug": "fairy-tales",
      "url": "/topics/fairy-tales/"
    },
    {
      "name": "Pigs",
      "slug": "pigs",
      "url": "/topics/pigs/"
    },
    {
      "name": "Steven Guarnaccia",
      "slug": "steven-guarnaccia",
      "url": "/topics/steven-guarnaccia/"
    },
    {
      "name": "Three Little Pigs",
      "slug": "three-little-pigs",
      "url": "/topics/three-little-pigs/"
    },
    {
      "name": "Wolves",
      "slug": "wolves",
      "url": "/topics/wolves/"
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
    "description": "Steven Guarnaccia’s fresh take on the three little pigs will delight parents with an eye to design or architecture. Basing the pigs on Frank Gehry, Phillip Johnson, and Frank Lloyd Wright, Mr. Guarnaccia’s work also…",
    "image": "https://vegbooks.org/media/2010/06/three-little-pigs.jpg"
  },
  "previous": {
    "title": "Duck Soup",
    "url": "/reviews/duck-soup/"
  },
  "next": {
    "title": "Carrot Soup",
    "url": "/reviews/carrot-soup/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/three-little-pigs.jpg"}><img src={"/media/2010/06/three-little-pigs.jpg"} alt={"The Three Little Pigs: An Architectural Tale"} width={244} height={345} /></a>
      </figure>
      <p>{"Steven Guarnaccia’s fresh take on the three little pigs will delight parents with an eye to design or architecture. Basing the pigs on Frank Gehry, "}<a href={"http://www.pbs.org/wnet/americanmasters/episodes/philip-johnson/about-philip-johnson/635/"} target="_blank" rel="noopener noreferrer">{"Phillip Johnson"}</a>{", and Frank Lloyd Wright, Mr. Guarnaccia’s work also features early and mid-century furnishings by the likes of Mart Stam, Thonet, and "}<a href={"http://moma.org/collection/artist.php?artist_id=5103"} target="_blank" rel="noopener noreferrer">{"Eero Saarinen"}</a>{". (I know this thanks to the wonderfully informative endpapers.)"}</p>
      <p>{"There’s not much that speaks to vegetarianism in this book, except of course for the fact that the wolf is out to get (and presumably eat) the little pigs. Happily, they foil his efforts and he ends up with a scorched tail and a bruised ego as a result. (His injury is due to his own efforts, nothing that the pigs did.) The book ends with the three pig brothers enjoying tomato soup and "}<a href={"http://www.vegfamily.com/vegan-recipes/desserts/vegan-apple-pie.htm"} target="_blank" rel="noopener noreferrer">{"apple pie"}</a>{"."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
