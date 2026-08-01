import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10225",
  "slug": "101-dalmatians-1996",
  "url": "/reviews/101-dalmatians-1996/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/11/27/101-dalmatians-1996/",
  "title": "101 Dalmatians (1996)",
  "publishedAt": "2015-11-27",
  "publishedLabel": "November 27th, 2015",
  "excerpt": "I was home sick with two kids (ages 2 and 6) by myself and took care of them the only way I could manage – an all day movie marathon. I was interested in showing them the super cute animated “101 Dalmatians” that I…",
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
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Family Movies",
      "slug": "family-movies",
      "url": "/topics/family-movies/"
    },
    {
      "name": "Fur",
      "slug": "fur",
      "url": "/topics/fur/"
    },
    {
      "name": "Fur Trade",
      "slug": "fur-trade",
      "url": "/topics/fur-trade/"
    },
    {
      "name": "Glenn Close",
      "slug": "glenn-close",
      "url": "/topics/glenn-close/"
    },
    {
      "name": "Hugh Laurie",
      "slug": "hugh-laurie",
      "url": "/topics/hugh-laurie/"
    },
    {
      "name": "Jeff Daniels",
      "slug": "jeff-daniels",
      "url": "/topics/jeff-daniels/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
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
    "description": "I was home sick with two kids (ages 2 and 6) by myself and took care of them the only way I could manage – an all day movie marathon. I was interested in showing them the super cute animated “101 Dalmatians” that I…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Turkey Trouble",
    "url": "/reviews/turkey-trouble/"
  },
  "next": {
    "title": "Butterfly Counting",
    "url": "/reviews/butterfly-counting/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"I was home sick with two kids (ages 2 and 6) by myself and took care of them the only way I could manage – an all day movie marathon. I was interested in showing them the super cute animated “101 Dalmatians” that I remember enjoying as a child, positively "}<a href={"/reviews/101-dalmatians/"}>{"reviewed on this blog previously"}</a>{". But the live action version was available for free on Netflix, so that is what we watched."}</p>
      <p>{"The movie is sweet enough, with a cute love story paralleled between the dogs and the owners. The puppies are super swoon-worthy. There were some hard parts for my daughter to get through. Fur is a tough subject matter and once she realized what Cruella De Vil’s intentions were with the puppies, she was reduced to a sobbing mess. She had me reassure her throughout that no one would die, and in the end declared it a great movie. It was an emotional journey but she enjoyed it."}</p>
      <p>{"My son, only two years old, didn’t follow the movie but he liked the dogs and enjoyed the slapstick comedy of the dog thieves, yelling “CRASH!” every time they crashed into something."}</p>
      <p>{"Overall, this is a nice movie. Not movie of the year great, but an enjoyable time. There are some great stars that make the movie shine – Glenn Close, Jeff Daniels, and Hugh Laurie as a surprisingly comedic dog thief. I would recommend it for your next rainy day."}</p>
      <p>{"Rated G. "}<a href={"https://www.commonsensemedia.org/movie-reviews/101-dalmatians-live-action"} target="_blank" rel="noopener noreferrer">{"Common Sense Media"}</a>{" recommends this for ages five and older. My six-year-old enjoyed it but was very emotional throughout."}</p>
    </div>
  );
}
