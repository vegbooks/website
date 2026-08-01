import type { PostMetadata } from '../content/types';

export const article = {
  "id": "4688",
  "slug": "peter-the-knight-with-asthma",
  "url": "/reviews/peter-the-knight-with-asthma/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/04/02/peter-the-knight-with-asthma/",
  "title": "Peter, the Knight with Asthma",
  "publishedAt": "2011-04-02",
  "publishedLabel": "April 2nd, 2011",
  "excerpt": "Peter is a boy with a wild imagination. He likes to pretend he is a knight protecting the castle from dragons. But poor Peter. Every time he is in the middle of a fight, about to take down the dragon, he starts to…",
  "image": {
    "src": "/media/2011/03/9780807565179.jpg",
    "alt": "Peter, the Knight with Asthma",
    "width": 210,
    "height": 165
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
      "name": "Anthony Lewis",
      "slug": "anthony-lewis",
      "url": "/topics/anthony-lewis/"
    },
    {
      "name": "Asthma",
      "slug": "asthma",
      "url": "/topics/asthma/"
    },
    {
      "name": "Breathing Problems",
      "slug": "breathing-problems",
      "url": "/topics/breathing-problems/"
    },
    {
      "name": "Dragons",
      "slug": "dragons",
      "url": "/topics/dragons/"
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
      "name": "Inhaler",
      "slug": "inhaler",
      "url": "/topics/inhaler/"
    },
    {
      "name": "Janna Matthies",
      "slug": "janna-matthies",
      "url": "/topics/janna-matthies/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Medical Treatment",
      "slug": "medical-treatment",
      "url": "/topics/medical-treatment/"
    },
    {
      "name": "Nebulizer",
      "slug": "nebulizer",
      "url": "/topics/nebulizer/"
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
    "description": "Peter is a boy with a wild imagination. He likes to pretend he is a knight protecting the castle from dragons. But poor Peter. Every time he is in the middle of a fight, about to take down the dragon, he starts to…",
    "image": "https://vegbooks.org/media/2011/03/9780807565179.jpg"
  },
  "previous": {
    "title": "Easter Parade",
    "url": "/reviews/easter-parade/"
  },
  "next": {
    "title": "One Nighttime Sea",
    "url": "/reviews/one-nighttime-sea/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/03/9780807565179.jpg"}><img src={"/media/2011/03/9780807565179.jpg"} alt={"Peter, the Knight with Asthma"} width={210} height={165} /></a>
      </figure>
      <p>{"Peter is a boy with a wild imagination. He likes to pretend he is a knight protecting the castle from dragons. But poor Peter. Every time he is in the middle of a fight, about to take down the dragon, he starts to feel tightness in his chest. He can’t breathe. His mom comes in and rescues him with an inhaler. Three times in one week is too much for Peter and his mom, and all of the dragons keep getting away. After a thorough exam at the doctor, Peter is diagnosed with asthma. He is sent home with a nebulizer. The nebulizer treatment makes Peter strong and he is finally able to defend the fantasy castle. With all of the strength of his lungs, he is able to roar so loud that the dragon slinks away in fear. With treatment, he can do anything."}</p>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=&l=as2&o=1&a=0807565172"} alt={""} width={1} height={1} />
      </figure>
      <p>{"My toddler has been using a nebulizer since she was a baby. We got "}<a href={"http://www.amazon.com/gp/product/0807565172/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0807565172"}>{"this book"}</a>{" from the library this weekend and she loves it. When Peter does his nebulizer treatment, she exclaims, “Same, same!” Seeing another take the same medicine is exciting for her. I’m happy to have a book that explains the way an asthma attack feels. I’d like my daughter to be able to tell me that her chest feels tight or that breathing is difficult. When Peter has these symptoms, he calls his mom for help, which is a good model for my toddler. The story is entertaining but conveys very useful information."}</p>
      <p>{"Parents concerned about animal welfare will be happy to see that the dragon is not slayed. Peter uses humane methods to defend the castle from the dragons."}</p>
      <p>{"Ages 4-8 (though my 2 year old enjoys it)."}</p>
    </div>
  );
}
