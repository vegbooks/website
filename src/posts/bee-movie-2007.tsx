import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10509",
  "slug": "bee-movie-2007",
  "url": "/reviews/bee-movie-2007/",
  "legacyUrl": "https://vegbooks.org/index.php/2017/09/06/bee-movie-2007/",
  "title": "Bee Movie (2007)",
  "publishedAt": "2017-09-06",
  "publishedLabel": "September 6th, 2017",
  "excerpt": "“Bee Movie” was a big hit for family movie night. Written by Jerry Seinfeld, who also voices the lead bee, this movie is funny and entertaining for the entire family. It was enjoyed by the kids (ages 3 and 8) and the…",
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
      "name": "Animated Movies",
      "slug": "animated-movies",
      "url": "/topics/animated-movies/"
    },
    {
      "name": "Bees",
      "slug": "bees",
      "url": "/topics/bees/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Family Movies",
      "slug": "family-movies",
      "url": "/topics/family-movies/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Jerry Seinfeld",
      "slug": "jerry-seinfeld",
      "url": "/topics/jerry-seinfeld/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "“Bee Movie” was a big hit for family movie night. Written by Jerry Seinfeld, who also voices the lead bee, this movie is funny and entertaining for the entire family. It was enjoyed by the kids (ages 3 and 8) and the…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Dolphin Tale (2011)",
    "url": "/reviews/dolphin-tale-2011/"
  },
  "next": {
    "title": "JANE (2017)",
    "url": "/reviews/jane-2017/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"“Bee Movie” was a big hit for family movie night. Written by Jerry Seinfeld, who also voices the lead bee, this movie is funny and entertaining for the entire family. It was enjoyed by the kids (ages 3 and 8) and the adults in our family."}</p>
      <p>{"Barry the Bee (Seinfeld) finds out that humans are stealing honey from hard working bees and sues the government. There is a settlement that results in only the sale of “bee-approved” honey being allowed. My 8-year-old said, “Aw, bee-approved. I like that.” There is even a scene at the end in which a cow is asking Barry the Bee for advice on how to keep humans from stealing her milk."}</p>
      <p><a href={"https://www.commonsensemedia.org/movie-reviews/bee-movie"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" recommends this movie for ages 5+. I agree that older kids will understand the plot better, and also understand more of the jokes, but the movie is cute enough for younger kids as well. My three-year-old now says this is his favorite movie. Highly recommended for your next movie night. We were able to watch it on Netflix."}</p>
      <p>{"Rated PG."}</p>
    </div>
  );
}
