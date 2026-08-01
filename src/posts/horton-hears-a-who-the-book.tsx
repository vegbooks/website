import type { PostMetadata } from '../content/types';

export const article = {
  "id": "84",
  "slug": "horton-hears-a-who-the-book",
  "url": "/reviews/horton-hears-a-who-the-book/",
  "legacyUrl": "https://vegbooks.org/index.php/2009/11/04/horton-hears-a-who-the-book/",
  "title": "Horton Hears a Who!",
  "publishedAt": "2009-11-04",
  "publishedLabel": "November 4th, 2009",
  "excerpt": "Dr. Seuss’s classic is a fantastic way to teach your kids about the importance of sticking up for the defenseless. When Horton the Elephant hears the microscopic Whos on a speck of dust, he doesn’t stop to question…",
  "image": {
    "src": "/media/2009/11/978-0-394-90078-01.jpg",
    "alt": "Horton Hears a Who!",
    "width": 144,
    "height": 168
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
      "name": "1950s Children Literature",
      "slug": "1950s-children-literature",
      "url": "/topics/1950s-children-literature/"
    },
    {
      "name": "Animal Emotion",
      "slug": "animal-emotion",
      "url": "/topics/animal-emotion/"
    },
    {
      "name": "animal intelligence",
      "slug": "animal-intelligence",
      "url": "/topics/animal-intelligence/"
    },
    {
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Dr. Seuss",
      "slug": "dr-seuss",
      "url": "/topics/dr-seuss/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
    },
    {
      "name": "Horton",
      "slug": "horton",
      "url": "/topics/horton/"
    },
    {
      "name": "Interspecies Friendship",
      "slug": "interspecies-friendship",
      "url": "/topics/interspecies-friendship/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Read Aloud",
      "slug": "read-aloud",
      "url": "/topics/read-aloud/"
    },
    {
      "name": "Vegetarian Kids Books",
      "slug": "vegetarian-kids-books",
      "url": "/topics/vegetarian-kids-books/"
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
    "description": "Dr. Seuss’s classic is a fantastic way to teach your kids about the importance of sticking up for the defenseless. When Horton the Elephant hears the microscopic Whos on a speck of dust, he doesn’t stop to question…",
    "image": "https://vegbooks.org/media/2009/11/978-0-394-90078-01.jpg"
  },
  "previous": {
    "title": "Purplicious",
    "url": "/reviews/purplicious/"
  },
  "next": {
    "title": "Busy Kitties",
    "url": "/reviews/busy-kitties/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2009/11/978-0-394-90078-01.jpg"} alt={"Horton Hears a Who!"} width={144} height={168} />
      </figure>
      <p>{"Dr. Seuss’s classic is a fantastic way to teach your kids about the importance of sticking up for the defenseless. When Horton the Elephant hears the microscopic Whos on a speck of dust, he doesn’t stop to question whether his interests should override theirs. Instead, he does everything in his power to protect them, because after all, “a person’s a person, no matter how small.”"}</p>
      <p>{"This book recognizes in animals something our society, and certainly "}<a href={"http://findarticles.com/p/articles/mi_m0FRO/is_2_133/ai_60129620/"} target="_blank" rel="noopener noreferrer">{"our legal system"}</a>{", does not: that "}<a href={"http://en.wikipedia.org/wiki/Sentience#Non-human_animal_rights_and_sentience"} target="_blank" rel="noopener noreferrer">{"sentient"}</a>{" animals share characteristics (such as "}<a href={"http://www.empathogens.com/empathy/animal.html"} target="_blank" rel="noopener noreferrer">{"empathy"}</a>{", "}<a href={"http://www.pbs.org/wnet/nature/episodes/inside-the-animal-mind/introduction/2081/"} target="_blank" rel="noopener noreferrer">{"intelligence"}</a>{", and "}<a href={"http://www.msnbc.msn.com/id/7348880/"} target="_blank" rel="noopener noreferrer">{"humor"}</a>{") with human beings and that they should be treated as “persons,” at least so far as they shouldn’t be killed for trivial concerns."}</p>
      <p>{"Ages 3-8. For more reviews, click "}<a href={"http://www.commonsensemedia.org/book-reviews/Horton-Hears-Who.html"} target="_blank" rel="noopener noreferrer">{"here"}</a>{"."}</p>
    </div>
  );
}
