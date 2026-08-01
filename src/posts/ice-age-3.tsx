import type { PostMetadata } from '../content/types';

export const article = {
  "id": "622",
  "slug": "ice-age-3",
  "url": "/reviews/ice-age-3/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/02/15/ice-age-3/",
  "title": "Ice Age 3: Dawn of the Dinosaurs (2009)",
  "publishedAt": "2010-02-15",
  "publishedLabel": "February 15th, 2010",
  "excerpt": "“Ice Age 3: Dawn of the Dinosaurs” brings us more silliness from prehistory’s most unusual herd. Ellie and Manny are on the verge of welcoming a baby mammoth, and we’re introduced to Buck, short for Buckminster, long…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 321
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
      "name": "Animated Movies",
      "slug": "animated-movies",
      "url": "/topics/animated-movies/"
    },
    {
      "name": "Dinosaurs",
      "slug": "dinosaurs",
      "url": "/topics/dinosaurs/"
    },
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
      "name": "Portrayal of Vegetarians in Film",
      "slug": "portrayal-of-vegetarians-in-film",
      "url": "/topics/portrayal-of-vegetarians-in-film/"
    },
    {
      "name": "T Rex",
      "slug": "t-rex",
      "url": "/topics/t-rex/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
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
    "description": "“Ice Age 3: Dawn of the Dinosaurs” brings us more silliness from prehistory’s most unusual herd. Ellie and Manny are on the verge of welcoming a baby mammoth, and we’re introduced to Buck, short for Buckminster, long…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Ice Age 2: The Meltdown (2006)",
    "url": "/reviews/ice-age-2-guest-post-by-jennifer-gannett/"
  },
  "next": {
    "title": "The Dumpster Diver",
    "url": "/reviews/dumpster/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={321} /></a>
      </figure>
      <p>{"“"}<a href={"http://www.apple.com/trailers/fox/iceagedawnofthedinosaurs/large_t2.html"} target="_blank" rel="noopener noreferrer">{"Ice Age 3: Dawn of the Dinosaurs"}</a>{"” brings us more silliness from prehistory’s most unusual herd. Ellie and Manny are on the verge of welcoming a baby mammoth, and we’re introduced to Buck, short for Buckminster, long for Buh. Buck is a swashbuckling (there is no other word for him!) muskrat who leads the herd on a quest through a heretofore unknown subterranean dinosaur world."}</p>
      <p>{"The object of their search is fellow herd member Sid the Sloth, who has removed dinosaur eggs from an underground nest. Once the mother dinosaur discovers that her eggs have been taken, she comes for her hatchlings. Loyal to his “children,” Sid refuses to relinquish them and is carried away along with the babies in their mother’s monstrous jaws to the dinosaur nursery."}</p>
      <p>{"Hot on his heels with Buck guiding them, the rest of the herd proves that just because a child enters the family, the adventures don’t stop. Reunited at the end, the usual Ice Age themes of herd love and loyalty prevail. We’re also treated to more screen time devoted to Scrat the Squirrel and his attempts to get his acorn, which are complicated by a love interest, Scratte."}</p>
      <p>{"Veg folks may be particularly interested in a "}<a href={"http://vegetarianstar.com/2009/07/03/ice-age-dawn-of-the-dinosaurs-raised-vegetarian-clip-video/"} target="_blank" rel="noopener noreferrer">{"scene that made the rounds online"}</a>{"in which Sid tries to convince the mother T Rex that the babies should be raised vegetarian (he does not prevail). I am not in love with the end of that scene, in which Sid attempts to save a bird by taking it away from the hungry little T Rexes and throwing it over a cliff, only to realize too late that it is flightless. Immediately after, another predator eats it. It’s only a blip but one might want to be prepared to explain this scene. I do give Sid credit for holding fast to his values and doing his best to live by them in the face of a giant, carnivorous dinosaur."}</p>
      <p>{"We really enjoy this movie, though as with the other two movies, this is rated PG and contains mild rude humor and peril. Ages 6 and up."}</p>
    </div>
  );
}
