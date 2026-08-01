import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4545",
  "slug": "no-ordinary-olive",
  "url": "/reviews/no-ordinary-olive/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/03/15/no-ordinary-olive/",
  "title": "No Ordinary Olive",
  "publishedAt": "2011-03-15",
  "publishedLabel": "March 15th, 2011",
  "excerpt": "This delightful story about a precocious child cheers on children’s creativity and imagination. Even with stifling school agendas, lively children can re-animate a class and educational staff. At least in Olive’s…",
  "image": {
    "src": "/media/2011/03/noordinaryolive-fc.jpg",
    "alt": "No Ordinary Olive",
    "width": 210,
    "height": 186
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
      "name": "Creativity",
      "slug": "creativity",
      "url": "/topics/creativity/"
    },
    {
      "name": "Debbie Tille",
      "slug": "debbie-tille",
      "url": "/topics/debbie-tille/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Education",
      "slug": "education",
      "url": "/topics/education/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Originality",
      "slug": "originality",
      "url": "/topics/originality/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Roberta Baker",
      "slug": "roberta-baker",
      "url": "/topics/roberta-baker/"
    },
    {
      "name": "Supportive Parents",
      "slug": "supportive-parents",
      "url": "/topics/supportive-parents/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "This delightful story about a precocious child cheers on children’s creativity and imagination. Even with stifling school agendas, lively children can re-animate a class and educational staff. At least in Olive’s…",
    "image": "https://vegbooks.org/media/2011/03/noordinaryolive-fc.jpg"
  },
  "previous": {
    "title": "I Didn’t Do It",
    "url": "/reviews/i-didnt-do-it/"
  },
  "next": {
    "title": "Looking for Easter",
    "url": "/reviews/looking-for-easter/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/03/noordinaryolive-fc.jpg"}><img src={"/media/2011/03/noordinaryolive-fc.jpg"} alt={"No Ordinary Olive"} width={210} height={186} /></a>
      </figure>
      <p>{"This delightful story about a precocious child cheers on children’s creativity and imagination. Even with stifling school agendas, lively children can re-animate a class and educational staff. At least in Olive’s world. Olive, who is extraordinary since birth with the loudest cry, whose parents supported her every endeavor with praise and possibilities, and who was undaunted by a teacher’s punishment or being sent to the principal’s office, forces the administration to recognize their own unhealthy prohibitive restrictiveness in comparison to her energetic, creative nature. Different can be difficult in a school system and it’s a wonder this girl isn’t constricted by the pressure to conform at school or that her parents didn’t step in to begin homeschooling. Thankfully, through her parents’ unwavering support as well as her own irrepressible temperament, she has a confidence that insulates her from all the school disapproval and ably resolves her own problems. And she manages to teach the administrators a thing or two before making an agreement to curb distracting behaviors during class without compromising her energetic ingenuity or imagination."}</p>
      <p>{"Cute and detailed illustrations accompany this creative enthusiast’s tale. I am surprised the story didn’t become a pro-homeschooling tale but am glad the focus never shifted from Olive and her center-stage role in her own education. Olive reminds me a bit of all the geniuses (like "}<a href={"http://physics.about.com/b/2007/09/19/physics-myth-month-einstein-failed-mathematics.htm"} target="_blank" rel="noopener noreferrer">{"Albert Einstein"}</a>{") who had difficulties in the classroom."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
