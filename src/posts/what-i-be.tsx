import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4590",
  "slug": "what-i-be",
  "url": "/reviews/what-i-be/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/04/10/what-i-be/",
  "title": "What I Be",
  "publishedAt": "2011-04-10",
  "publishedLabel": "April 10th, 2011",
  "excerpt": "Ever since I first heard the deep baritone, political stylings of Michael Franti and his vibrant band Spearhead, I haven’t been able to satiate my appetite for their music. He’s produced album after album, each with…",
  "image": {
    "src": "/media/2011/03/what-i-be.jpg",
    "alt": "What I Be",
    "width": 210,
    "height": 169
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
      "name": "Ben Hodson",
      "slug": "ben-hodson",
      "url": "/topics/ben-hodson/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Feel-Good",
      "slug": "feel-good",
      "url": "/topics/feel-good/"
    },
    {
      "name": "Fun",
      "slug": "fun",
      "url": "/topics/fun/"
    },
    {
      "name": "Michael Franti",
      "slug": "michael-franti",
      "url": "/topics/michael-franti/"
    },
    {
      "name": "Musical",
      "slug": "musical",
      "url": "/topics/musical/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Vegetarian Author",
      "slug": "vegetarian-author",
      "url": "/topics/vegetarian-author/"
    },
    {
      "name": "Youssoupha Sidibe",
      "slug": "youssoupha-sidibe",
      "url": "/topics/youssoupha-sidibe/"
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
    "description": "Ever since I first heard the deep baritone, political stylings of Michael Franti and his vibrant band Spearhead, I haven’t been able to satiate my appetite for their music. He’s produced album after album, each with…",
    "image": "https://vegbooks.org/media/2011/03/what-i-be.jpg"
  },
  "previous": {
    "title": "The Story of the Easter Robin",
    "url": "/reviews/the-story-of-the-easter-robin/"
  },
  "next": {
    "title": "The Rabbit Problem",
    "url": "/reviews/the-rabbit-problem/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/03/what-i-be.jpg"}><img src={"/media/2011/03/what-i-be.jpg"} alt={"What I Be"} width={210} height={169} /></a>
      </figure>
      <p>{"Ever since I first heard the deep baritone, political stylings of "}<a href={"http://www.youtube.com/watch?v=KqgHosrqJ8o&feature=mfu_in_order&list=UL"}>{"Michael Franti and his vibrant band Spearhead"}</a>{", I haven’t been able to satiate my appetite for their music. He’s produced album after album, each with a new, distinct taste, the several latest being highly energetic and boogie-worthy. If you have the chance to catch Spearhead live, seize it! You’ll not only be supporting a fellow plant-eater, but a wonderful group of musicians who are passionate about their songs "}<em>{"and"}</em>{" the welfare of people, planet and animals. And you’ll experience a hypnotically fun evening of rhythm, dance and the musings of Franti, a born entertainer with a charismatic personality."}</p>
      <p>{"Gifted with two sons, Franti adapted one of his songs into a children’s book on self-acceptance, "}<a href={"http://michaelfranti.com/store/featured/what-i-be-childrens-book"} target="_blank" rel="noopener noreferrer"><em>{"What I Be"}</em></a>{". An adorable corn roll-sporting African American boy leads readers through Franti’s poetic lyrics which liken him to natural phenomenon and their powerful natures, such as: “If I were the rains, I’d wash away the whole world’s pain and bring the gift of cool like ice cream trucks on sunny days.” The adjunct graphics depict animals and people with handicaps rejoicing under a rainbow on one spread, while the other shows our protagonist distributing “Happy Cow” organic *rice* cream cones in the neighborhood."}</p>
      <p>{"Beyond the perk of embracing the natural world in this feel-good book, kids will enjoy the accompanying CD which features a reading by Franti and his son Adé superimposed on Youssoupha Sidibe’s West African harp. Ben Hodson’s capricious, yet empowering illustrations also help to make this a best buy."}</p>
      <p>{"Ages 4+."}</p>
    </div>
  );
}
