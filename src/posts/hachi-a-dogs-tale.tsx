import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3264",
  "slug": "hachi-a-dogs-tale",
  "url": "/reviews/hachi-a-dogs-tale/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/18/hachi-a-dogs-tale/",
  "title": "Hachi: A Dog’s Tale (2010)",
  "publishedAt": "2010-10-18",
  "publishedLabel": "October 18th, 2010",
  "excerpt": "Parents, get the tissues for this heartwarming (and heartbreaking) family flick! Based on the same true story as Lesléa Newman’s Hachiko Waits, this movie is about the faithfulness of a dog who accompanies the man he…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Hachi: A Dog’s Tale (2010)",
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Death",
      "slug": "death",
      "url": "/topics/death/"
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
      "name": "Family Movies",
      "slug": "family-movies",
      "url": "/topics/family-movies/"
    },
    {
      "name": "Live Action Movies",
      "slug": "live-action-movies",
      "url": "/topics/live-action-movies/"
    },
    {
      "name": "Loss",
      "slug": "loss",
      "url": "/topics/loss/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
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
    "description": "Parents, get the tissues for this heartwarming (and heartbreaking) family flick! Based on the same true story as Lesléa Newman’s Hachiko Waits, this movie is about the faithfulness of a dog who accompanies the man he…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "The Barefoot Book of Earth Tales",
    "url": "/reviews/the-barefoot-book-of-earth-tales/"
  },
  "next": {
    "title": "Kids Making a Difference for Animals",
    "url": "/reviews/kids-making-a-difference-for-animals/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Hachi: A Dog’s Tale (2010)"} width={210} height={317} /></a>
      </figure>
      <p>{"Parents, get the tissues for this heartwarming (and heartbreaking) family flick! Based on the same true story as Lesléa Newman’s "}<em><a href={"/reviews/hachiko-waits/"}>{"Hachiko Waits"}</a></em>{", this movie is about the faithfulness of a dog who accompanies the man he loves to the train station each day. His devotion is so strong that when the man dies, he continues to wait at the station for him for years after his death."}</p>
      <p>{"We rented this DVD for a family movie night, but my nearly 5-year-old daughter ended up sobbing through the movie and was teary when it was time for bed. I think she may have been too young for the themes of death and grief — but even I was deeply affected. Contributing to our reaction undoubtedly was the fact that our family recently suffered an unexpected and tragic loss. That’s not very good timing for a movie like “Hachi.”"}</p>
      <p><a href={"http://www.thedailygreen.com/environmental-news/latest/oscars-animal-movies-460310"} target="_blank" rel="noopener noreferrer">{"This film"}</a>{" moves slowly and deliberately, and vegetarian families will appreciate that brief scenes are depicted from Hachi’s point of view. Some may dislike the fact that Hachi sleeps in a shed out back, instead of in the house with the family, but the man shows his sensitivity to the dog’s needs by bringing him inside during one particularly violent wind storm."}</p>
      <p>{"Rated G. "}<a href={"http://www.commonsensemedia.org/movie-reviews/hachi-dogs-tale"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" recommends this film for ages 6 and up."}</p>
    </div>
  );
}
