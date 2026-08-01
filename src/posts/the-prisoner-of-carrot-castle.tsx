import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9167",
  "slug": "the-prisoner-of-carrot-castle",
  "url": "/reviews/the-prisoner-of-carrot-castle/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/11/03/the-prisoner-of-carrot-castle/",
  "title": "The Prisoner of Carrot Castle",
  "publishedAt": "2013-11-03",
  "publishedLabel": "November 3rd, 2013",
  "excerpt": "I received this book to review from the publisher and I would have to say that it was received quite timely in our household. Our four-year-old, who once ate anything and everything, has gotten pickier and pickier…",
  "image": {
    "src": "/media/2013/11/book-cover.jpg",
    "alt": "BookCover",
    "width": 210,
    "height": 190
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
      "name": "Chris Pedersen",
      "slug": "chris-pedersen",
      "url": "/topics/chris-pedersen/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Healthy Choices",
      "slug": "healthy-choices",
      "url": "/topics/healthy-choices/"
    },
    {
      "name": "Healthy Eating",
      "slug": "healthy-eating",
      "url": "/topics/healthy-eating/"
    },
    {
      "name": "Healthy Living",
      "slug": "healthy-living",
      "url": "/topics/healthy-living/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Kate Jeong",
      "slug": "kate-jeong",
      "url": "/topics/kate-jeong/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "I received this book to review from the publisher and I would have to say that it was received quite timely in our household. Our four-year-old, who once ate anything and everything, has gotten pickier and pickier…",
    "image": "https://vegbooks.org/media/2013/11/book-cover.jpg"
  },
  "previous": {
    "title": "Our Top Picks for 4-Year-Olds",
    "url": "/reviews/our-top-picks-for-4-year-olds/"
  },
  "next": {
    "title": "Our School Garden",
    "url": "/reviews/our-school-garden/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/11/book-cover.jpg"}><img src={"/media/2013/11/book-cover.jpg"} alt={"BookCover"} width={210} height={190} /></a>
      </figure>
      <p>{"I received this book to review from "}<a href={"http://purplecarrotbooks.com/books/"} target="_blank" rel="noopener noreferrer">{"the publisher"}</a>{" and I would have to say that it was received quite timely in our household. Our four-year-old, who once ate anything and everything, has gotten pickier and pickier such that she may only be surviving on tofu at this point. The storyline of "}<em>{"The Prisoner of Carrot Castle"}</em>{" is an attempt to encourage children to eat their veggies."}</p>
      <p>{"In the story, a boy is trapped in a castle which he comes to realize is made of carrots and broccoli. His only way free is to eat his way out. When the people of the kingdom find out that he has eaten their castle, they are angry and explain that carrots and broccoli are for building, not eating. The townspeople appear sickly and the boy realizes that it’s because they don’t eat their veggies. Right when it seems the boy is doomed, he wakes up and realizes that it is only a day dream he was having during dinner, and that while day dreaming, he had actually eaten his vegetables."}</p>
      <p>{"This is an enjoyable book and the illustrations are nice. If the point is to get kids to eat their veggies, I would say it does a decent job, though the point could be delivered a bit stronger. One issue I have with the book is that the people of the town are described as ugly because they don’t eat their vegetables. Ugly is not a word we use to describe people in our house, and I’m not sure that not eating veggies makes a person ugly. More accurately the people could have been described as sickly. Other than this one aspect, I find this a cute and engaging story that would make a good start to a conversation on eating your veggies."}</p>
      <p>{"Note that the author has the goal of creating learning entertainment and is developing "}<a href={"http://purplecarrotbooks.com/parents-teachers/"} target="_blank" rel="noopener noreferrer">{"a curriculum"}</a>{" to go along with this book for use by schools and homeschoolers."}</p>
      <p>{"Ages 4+."}</p>
    </div>
  );
}
