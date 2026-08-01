import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10077",
  "slug": "cinderella-2015",
  "url": "/reviews/cinderella-2015/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/03/15/cinderella-2015/",
  "title": "Cinderella (2015)",
  "publishedAt": "2015-03-15",
  "publishedLabel": "March 15th, 2015",
  "excerpt": "I saw “Cinderella” with my 4-1/2 and 6-1/2-year-old yesterday and it was a non-musical slightly modern twist on the Disney cartoon of yore. I wanted to write about the movie for Vegbooks because it had some animal…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Cate Blanchett",
      "slug": "cate-blanchett",
      "url": "/topics/cate-blanchett/"
    },
    {
      "name": "Derek Jacobi",
      "slug": "derek-jacobi",
      "url": "/topics/derek-jacobi/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Homa Woodrum",
      "slug": "homa-woodrum",
      "url": "/topics/homa-woodrum/"
    },
    {
      "name": "Hunting",
      "slug": "hunting",
      "url": "/topics/hunting/"
    },
    {
      "name": "Kenneth Branagh",
      "slug": "kenneth-branagh",
      "url": "/topics/kenneth-branagh/"
    },
    {
      "name": "Princess",
      "slug": "princess",
      "url": "/topics/princess/"
    }
  ],
  "reviewer": {
    "name": "Homa Woodrum",
    "slug": "homa-woodrum",
    "url": "/contributors/homa-woodrum/",
    "aliases": [
      "HOMA WOODRUM"
    ]
  },
  "seo": {
    "description": "I saw “Cinderella” with my 4-1/2 and 6-1/2-year-old yesterday and it was a non-musical slightly modern twist on the Disney cartoon of yore. I wanted to write about the movie for Vegbooks because it had some animal…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "A Penguin Named Patience: A Hurricane Katrina Rescue Story",
    "url": "/reviews/a-penguin-named-patience-a-hurricane-katrina-rescue-story/"
  },
  "next": {
    "title": "Wangari Maathai: The Woman Who Planted Millions of Trees",
    "url": "/reviews/wangari-maathai/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"I saw “Cinderella” with my 4-1/2 and 6-1/2-year-old yesterday and it was a non-musical slightly modern twist on the Disney cartoon of yore. I wanted to write about the movie for Vegbooks because it had some animal related themes. I’ve had friends complain the movie is not well written but I enjoyed it (and the company)."}</p>
      <p>{"Cinderella is told to “be kind” and “have courage” by her mother. There are a lot of parental deaths in this movie, three total, but none are particularly violent. Grieving is not really depicted aside from some black garb for Cinderella and her father and a line later on after (spoiler alert) the king dies remarking along the lines of “after the time for grieving had passed….”"}</p>
      <p>{"The costumes are beautiful, and the likes of Cate Blanchett and Derek Jacobi really elevate the style of the film (directed by Kenneth Branagh). Cinderella’s animal friends squeak and chirp but don’t actually talk."}</p>
      <p>{"There’s a great scene where Cinderella asks the Prince (though she doesn’t know he’s the prince yet) to spare a stag in the woods and we later learn that the hunt was stopped (not sure about other stag hunting in the future but it was nice all the same). Her argument to the Prince is that having always done something doesn’t mean it should be done."}</p>
      <p>{"On the flip side, if you’re not aware of the fairy tale itself, a fairy godmother transforms animals to assist Cinderella in getting to the ball. Mice become horses, lizards footmen, and a goose drives the carriage. It doesn’t seem like the transformation harms the animals but there’s not really any indication of consent either. I really liked that Cinderella calls her footman “Mr. Lizard” and the driver “Mr. Goose.” She was consistently sweet to them and they encourage her."}</p>
      <p>{"Arguably the movie meets the requirements of "}<a href={"http://en.wikipedia.org/wiki/Bechdel_test"} target="_blank" rel="noopener noreferrer">{"the Bechdel test"}</a>{" — that two (named) female characters speak about something with one another aside from men but I don’t know how empowering that is when it involves a step mother and step-sisters bossing someone around. At one point Cinderella is asked why she doesn’t leave the home and she says that she feels her parents are a part of the place so she hates to leave. That’s all well and good except that she does go live in the palace after marrying the prince so I’m not sure where that plot thread leaves us."}</p>
      <p>{"Any worry I had that my daughter would think Cinderella was noble for being a servant in her own home was dashed when she proclaimed that I shouldn’t make her clean her room after we got back from the movie. Here’s to independent thinking!"}</p>
      <p>{"Rated PG. Commonsense Media recommends this movie for kids "}<a href={"https://www.commonsensemedia.org/movie-reviews/cinderella-2015"} target="_blank" rel="noopener noreferrer">{"ages 6 and up"}</a>{"."}</p>
    </div>
  );
}
