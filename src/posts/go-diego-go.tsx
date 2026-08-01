import type { PostMetadata } from '../content/types';

export const article = {
  "id": "6787",
  "slug": "go-diego-go",
  "url": "/reviews/go-diego-go/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/01/14/go-diego-go/",
  "title": "Go, Diego, Go!",
  "publishedAt": "2012-01-14",
  "publishedLabel": "January 14th, 2012",
  "excerpt": "Dora’s cousin Diego is also an adventurer, but Diego is a boy with a mission. At the beginning of each episode, Diego announces, “Hi! I am Diego and I am an animal rescuer!” Then he goes on to exclaim, “I love…",
  "image": {
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Go, Diego, Go!",
    "width": 210,
    "height": 321
  },
  "categories": [
    {
      "name": "Television",
      "slug": "television",
      "url": "/television/"
    }
  ],
  "tags": [
    {
      "name": "Adventure",
      "slug": "adventure",
      "url": "/topics/adventure/"
    },
    {
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Animal Welfare",
      "slug": "animal-welfare",
      "url": "/topics/animal-welfare/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
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
    "description": "Dora’s cousin Diego is also an adventurer, but Diego is a boy with a mission. At the beginning of each episode, Diego announces, “Hi! I am Diego and I am an animal rescuer!” Then he goes on to exclaim, “I love…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "Does a Kangaroo Have a Mother Too?",
    "url": "/reviews/kangaroo/"
  },
  "next": {
    "title": "All Kinds of Kisses",
    "url": "/reviews/all-kinds-of-kisses/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/06/movie-pic-from-istock.jpg"}><img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Go, Diego, Go!"} width={210} height={321} /></a>
      </figure>
      <p>{"Dora’s cousin "}<a href={"http://www.amazon.com/gp/product/B001JGKS2E/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B001JGKS2E"} target="_blank" rel="noopener noreferrer">{"Diego"}</a>{" is also an adventurer, but Diego is a boy with a mission. At the beginning of each episode, Diego announces, “Hi! I am Diego and I am an animal rescuer!” Then he goes on to exclaim, “I love animals!” With his team, made up of his sister Alicia and Click the camera, each episode revolves around Diego rescuing a wild animal in need. The animals are in somewhat dangerous situations (such as stuck in a tree in a flood), but the show is fun and not too scary. Since each show is about a different animal, each show focuses on learning traits specific to each animal, and at the end of the episode, Alicia reviews the traits we learned and records them in her animal science journal."}</p>
      <p>{"My daughter, age 2.5, loves this show. She received a three-episode DVD for Christmas from Grandma and she begs to watch it every day. I think I know those three episodes by heart now. All seasons of the show are available on Netflix instant viewing, so thankfully, we don’t have to only watch those three episodes."}</p>
      <p>{"She’s also a big Dora fan. I enjoy Dora for her because she is a great female role model. She goes on outdoor adventures and there is nothing she can’t do. But I also really like Diego because it’s all about helping animals. Diego seems to be aimed at a slightly older demographic than Dora and teaches different skills. While both shows focus on problem solving and Spanish language skills, Dora seems more focused on lists and ordering while Diego is more focused on learning about animals. My favorite thing about both shows is that the main characters are non-white. Like my daughter, the characters have brown skin and big brown eyes, such a rarity in children’s TV and books."}</p>
      <p>{"Overall I think this is a great show, especially for families with concerns about animal welfare."}</p>
      <p>{"Ages 2-7."}</p>
    </div>
  );
}
