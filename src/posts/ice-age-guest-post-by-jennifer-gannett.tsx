import type { PostMetadata } from '../content/types';

export const article = {
  "id": "424",
  "slug": "ice-age-guest-post-by-jennifer-gannett",
  "url": "/reviews/ice-age-guest-post-by-jennifer-gannett/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/12/11/ice-age-guest-post-by-jennifer-gannett/",
  "title": "Ice Age (2002)",
  "publishedAt": "2009-12-11",
  "publishedLabel": "December 11th, 2009",
  "excerpt": "“Ice Age,” released in 2002 and narrated by an all-star cast, follows Sid, a socially outcast sloth, Manny the crusty mammoth and a sneaky smilodon named Diego. They cross paths during an ice age, attempting to…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Ice Age (2002)",
    "width": 210,
    "height": 316
  },
  "categories": [
    {
      "name": "Movies",
      "slug": "movies",
      "url": "/movies/"
    }
  ],
  "tags": [
    {
      "name": "Ice Age",
      "slug": "ice-age",
      "url": "/topics/ice-age/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Mammoths",
      "slug": "mammoths",
      "url": "/topics/mammoths/"
    },
    {
      "name": "Portrayal of Vegetarians in Film",
      "slug": "portrayal-of-vegetarians-in-film",
      "url": "/topics/portrayal-of-vegetarians-in-film/"
    },
    {
      "name": "Sloths",
      "slug": "sloths",
      "url": "/topics/sloths/"
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
    "description": "“Ice Age,” released in 2002 and narrated by an all-star cast, follows Sid, a socially outcast sloth, Manny the crusty mammoth and a sneaky smilodon named Diego. They cross paths during an ice age, attempting to…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "The Unicorn at the Manger",
    "url": "/reviews/the-unicorn-at-the-manger/"
  },
  "next": {
    "title": "Wolfsnail: Backyard Predator",
    "url": "/reviews/wolfsnail-backyard-predator/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Ice Age (2002)"} width={210} height={316} /></a>
      </figure>
      <p>{"“"}<a href={"http://www.apple.com/trailers/fox/ice_age/trailer1_medium.html"} target="_blank" rel="noopener noreferrer">{"Ice Age"}</a>{",” released in 2002 and narrated by an all-star cast, follows Sid, a socially outcast sloth, Manny the crusty mammoth and a sneaky smilodon named Diego. They cross paths during an ice age, attempting to return a baby to its tribe on a journey that will forever change them. Several scenes are scary or sad, including the ambush of a village, the death of the baby’s mother, and a flashback to a deadly encounter with human hunters. The unlikely trio are sometimes flippant or deceitful toward each other."}</p>
      <p>{"Moving past the perilous situations and irreverent attitudes, the movie is great. The dialogue is witty and scenes change quickly without being confusing. A subplot regarding a squirrel and his acorn is especially silly. Adults will appreciate additional humorous elements, including that the anthropomorphized non-human animals converse in complex dialogue while the humans only grunt."}</p>
      <p>{"Sitting with your children to discuss the story that unfolds in this movie, you will be rewarded with giggles and an opportunity for nice conversation. The takeaways from the unsurprisingly heartwarming ending include important themes of forgiveness and openness."}</p>
      <p>{"There are positive or neutral references to vegetarianism and veganism in this movie (Sid is veg*n, and there is a brief appearance by a veg rhino couple, who are not very sympathetic) but they are quick slices of dialogue not central to the themes of the movie."}</p>
      <p>{"Rated PG. Ages 6-12."}</p>
      <p>{"More info on this funny movie "}<a href={"http://en.wikipedia.org/wiki/Ice_Age_%28film%29"} target="_blank" rel="noopener noreferrer">{"here,"}</a>{" "}<a href={"http://movies.nytimes.com/movie/review?_r=1&res=9804EED61039F936A25750C0A9649C8B63"} target="_blank" rel="noopener noreferrer">{"here"}</a>{" and "}<a href={"http://www.commonsensemedia.org/movie-reviews/Ice-Age.html/details"} target="_blank" rel="noopener noreferrer">{"here."}</a></p>
    </div>
  );
}
