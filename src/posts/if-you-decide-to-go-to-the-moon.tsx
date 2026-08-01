import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9207",
  "slug": "if-you-decide-to-go-to-the-moon",
  "url": "/reviews/if-you-decide-to-go-to-the-moon/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/11/21/if-you-decide-to-go-to-the-moon/",
  "title": "If You Decide to Go to the Moon",
  "publishedAt": "2013-11-21",
  "publishedLabel": "November 21st, 2013",
  "excerpt": "Like most four-year-olds, my daughter loves space. She has already asked my wife and me if we will take care of her children while she is studying on the moon as an astronaut. Of course we said yes. To encourage her…",
  "image": {
    "src": "/media/2013/11/if-you-decide-to-go-to-the-moon.jpg",
    "alt": "IfYouDecideToGoToTheMoon",
    "width": 210,
    "height": 225
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Faith McNulty",
      "slug": "faith-mcnulty",
      "url": "/topics/faith-mcnulty/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Moon",
      "slug": "moon",
      "url": "/topics/moon/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Space",
      "slug": "space",
      "url": "/topics/space/"
    },
    {
      "name": "Steven Kellogg",
      "slug": "steven-kellogg",
      "url": "/topics/steven-kellogg/"
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
    "description": "Like most four-year-olds, my daughter loves space. She has already asked my wife and me if we will take care of her children while she is studying on the moon as an astronaut. Of course we said yes. To encourage her…",
    "image": "https://vegbooks.org/media/2013/11/if-you-decide-to-go-to-the-moon.jpg"
  },
  "previous": {
    "title": "Feeding the Young Athlete",
    "url": "/reviews/feeding-the-young-athlete/"
  },
  "next": {
    "title": "Animals Matter: A Biologist Explains Why We Should Treat Animals with Compassion and Respect",
    "url": "/reviews/animals-matter/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/11/if-you-decide-to-go-to-the-moon.jpg"}><img src={"/media/2013/11/if-you-decide-to-go-to-the-moon.jpg"} alt={"IfYouDecideToGoToTheMoon"} width={210} height={225} /></a>
      </figure>
      <p>{"Like most four-year-olds, my daughter loves space. She has already asked my wife and me if we will take care of her children while she is studying on the moon as an astronaut. Of course we said yes. To encourage her love of space, we bought her this book for Christmas last year ("}<a href={"http://www.amazon.com/gp/product/0590483595/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0590483595&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{")."}</p>
      <p>{"The book is set up as an informational guide for someone who might be going to the moon. It gives instructions on what to pack, what to eat, and what will be experienced along the way. “It will tell you how to get there and what to do after you land. The most important part tells you how to get home.” The book is full of factual details presented in a kid-friendly way with great illustrations and is perfect for any preschool space lover."}</p>
      <p>{"As the purpose of this book is to teach children about space, I was surprised with the environmental and animal-friendly message at the end. The starkness of space is compared with the beauty of earth. “Why is Earth so different from the moon? Earth has air and water… on which all life depends. Without them, Earth would be as lifeless as the moon. Air and water are Earth’s special blessings. We must guard them well…. As you bend down to kiss the ground, you promise you will always do your best to protect all life on our beautiful Earth.” This last sentence is illustrated by a boy being kissed by a dog while a cat runs around in the grass and birds circle overhead."}</p>
      <p>{"I recommend this book to anyone who is a lover of space, an environmentalist, and an animal lover."}</p>
      <p>{"Ages 3+."}</p>
    </div>
  );
}
