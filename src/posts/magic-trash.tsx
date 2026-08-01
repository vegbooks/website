import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5885",
  "slug": "magic-trash",
  "url": "/reviews/magic-trash/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/26/magic-trash/",
  "title": "Magic Trash",
  "publishedAt": "2011-08-26",
  "publishedLabel": "August 26th, 2011",
  "excerpt": "Pairing rhythmic, sometimes-rhyming prose with expressive illustration, the forthcoming book Magic Trash: A Story of Tyree Guyton and His Art tells the uplifting story of the Detroit native who saved his neighborhood…",
  "image": {
    "src": "/media/2011/08/magic-trash-72.jpg",
    "alt": "Magic Trash",
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
      "name": "Art",
      "slug": "art",
      "url": "/topics/art/"
    },
    {
      "name": "Biography",
      "slug": "biography",
      "url": "/topics/biography/"
    },
    {
      "name": "Community",
      "slug": "community",
      "url": "/topics/community/"
    },
    {
      "name": "Detriot",
      "slug": "detriot",
      "url": "/topics/detriot/"
    },
    {
      "name": "Detroit Riot",
      "slug": "detroit-riot",
      "url": "/topics/detroit-riot/"
    },
    {
      "name": "Heidelberg Street",
      "slug": "heidelberg-street",
      "url": "/topics/heidelberg-street/"
    },
    {
      "name": "J.H. Shapiro",
      "slug": "j-h-shapiro",
      "url": "/topics/j-h-shapiro/"
    },
    {
      "name": "Painting",
      "slug": "painting",
      "url": "/topics/painting/"
    },
    {
      "name": "Poverty",
      "slug": "poverty",
      "url": "/topics/poverty/"
    },
    {
      "name": "Social Justice",
      "slug": "social-justice",
      "url": "/topics/social-justice/"
    },
    {
      "name": "Trash",
      "slug": "trash",
      "url": "/topics/trash/"
    },
    {
      "name": "Tyree Guyton",
      "slug": "tyree-guyton",
      "url": "/topics/tyree-guyton/"
    },
    {
      "name": "Vanessa Brantley-Newton",
      "slug": "vanessa-brantley-newton",
      "url": "/topics/vanessa-brantley-newton/"
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
    "description": "Pairing rhythmic, sometimes-rhyming prose with expressive illustration, the forthcoming book Magic Trash: A Story of Tyree Guyton and His Art tells the uplifting story of the Detroit native who saved his neighborhood…",
    "image": "https://vegbooks.org/media/2011/08/magic-trash-72.jpg"
  },
  "previous": {
    "title": "Black Cat",
    "url": "/reviews/black-cat/"
  },
  "next": {
    "title": "Charlie Parker Played Be Bop",
    "url": "/reviews/charlie-parker-played-be-bop/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/08/magic-trash-72.jpg"}><img src={"/media/2011/08/magic-trash-72.jpg"} alt={"Magic Trash"} width={210} height={210} /></a>
      </figure>
      <p>{"Pairing rhythmic, sometimes-rhyming prose with expressive illustration, the forthcoming book "}<em><a href={"http://www.charlesbridge.com/productdetails.cfm?PC=5408"} target="_blank" rel="noopener noreferrer">{"Magic Trash: A Story of Tyree Guyton and His Art"}</a></em>{" tells the uplifting story of the Detroit native who saved his neighborhood by creating art out of trash. Beginning by recounting that Guyton made toys for himself and his siblings out of trash as a child, this "}<a href={"http://wakingbraincells.com/2011/08/23/review-magic-trash-by-jane-shapiro/"}>{"biography"}</a>{" hits many of the milestones in his life, including the passing of his grandfather, who first put a paint brush in his hands and inspired him to become an artist, and his protracted battle with the city to preserve his art on Heidelberg Street, which culminated in a court ruling in his favor."}</p>
      <p>{"Parents should be aware that this book touches on important social issues, including poverty, drug-dealing, and the 1967 Detroit riot. Like Guyton himself, author J.H. Shapiro tends to focus on the positive, accentuating how Guyton and his neighbors reclaimed their neighborhood, evicting troublemakers by painting abandoned houses and posting a “magenta guard dog” on a porch."}</p>
      <p>{"The author’s note includes photos of Guyton and his neighborhood, as well as a link to the "}<a href={"http://www.heidelberg.org/"} target="_blank" rel="noopener noreferrer">{"Heidelberg Project"}</a>{"."}</p>
      <p>{"This inspiring book is a good choice for children ages 4-8."}</p>
    </div>
  );
}
