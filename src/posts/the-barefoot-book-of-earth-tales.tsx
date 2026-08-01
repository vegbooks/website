import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3286",
  "slug": "the-barefoot-book-of-earth-tales",
  "url": "/reviews/the-barefoot-book-of-earth-tales/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/10/17/the-barefoot-book-of-earth-tales/",
  "title": "The Barefoot Book of Earth Tales",
  "publishedAt": "2010-10-17",
  "publishedLabel": "October 17th, 2010",
  "excerpt": "Artfully selected and compiled as a delightful compilation, the seven folktales of Australia, Nigeria, the American Southwest, Bali, Kazakhstan, India, and Wales featured in this Barefoot Books’ publication showcase…",
  "image": {
    "src": "/media/2010/10/barefoot1.jpg",
    "alt": "The Barefoot Book of Earth Tales",
    "width": 210,
    "height": 252
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
      "name": "Africa",
      "slug": "africa",
      "url": "/topics/africa/"
    },
    {
      "name": "Anne Wilson",
      "slug": "anne-wilson",
      "url": "/topics/anne-wilson/"
    },
    {
      "name": "Asia",
      "slug": "asia",
      "url": "/topics/asia/"
    },
    {
      "name": "Australia",
      "slug": "australia",
      "url": "/topics/australia/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Dawn Casey",
      "slug": "dawn-casey",
      "url": "/topics/dawn-casey/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Europe",
      "slug": "europe",
      "url": "/topics/europe/"
    },
    {
      "name": "Folk Tales",
      "slug": "folk-tales",
      "url": "/topics/folk-tales/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "Artfully selected and compiled as a delightful compilation, the seven folktales of Australia, Nigeria, the American Southwest, Bali, Kazakhstan, India, and Wales featured in this Barefoot Books’ publication showcase…",
    "image": "https://vegbooks.org/media/2010/10/barefoot1.jpg"
  },
  "previous": {
    "title": "Morning of Compassionate Children’s Literature",
    "url": "/reviews/morning-of-compassionate-childrens-literature/"
  },
  "next": {
    "title": "Hachi: A Dog’s Tale (2010)",
    "url": "/reviews/hachi-a-dogs-tale/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/barefoot1.jpg"}><img src={"/media/2010/10/barefoot1.jpg"} alt={"The Barefoot Book of Earth Tales"} width={210} height={252} /></a>
      </figure>
      <p>{"Artfully selected and compiled as a delightful compilation, the seven folktales of Australia, Nigeria, the American Southwest, Bali, Kazakhstan, India, and Wales featured "}<a href={"http://store.barefootbooks.com/the-barefoot-book-of-earth-tales.html"} target="_blank" rel="noopener noreferrer">{"in this Barefoot Books’ publication"}</a>{" showcase earth-friendly parables any child – despite cultural differences – can appreciate."}</p>
      <p>{"Paired with topic-related, wholesome activities such as making a song-line painting inspired by aboriginal art, the stories are fanciful, enchanting and touching. Fairies provide a segue to composting and neighborly consideration. A grumpy gecko sheds light on the interconnectedness of living in the same web of life as those we may find bothersome, but necessary (for him, it’s the flickering fireflies). Nigeria’s tale of why the sky is so far away discusses the dangers of gluttony and the limited resources on earth. To accentuate the valuable lessons contained within are the ethnically symbolic and rather cute illustrations by Anne Wilson and the wonderfully concise and thoughtful introductions to each story written by author Dawn Casey."}</p>
      <p>{"Veg parents will be happy to see the Bishnoi Tribes of Rajasthan mentioned as being vegetarian and the book’s sole recipe as a plant-based soup. The one downside is the mention of hunting and a doll made of buckskin in the Native American tale."}</p>
      <p>{"Ages 9-12."}</p>
    </div>
  );
}
