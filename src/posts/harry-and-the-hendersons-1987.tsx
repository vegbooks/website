import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10006",
  "slug": "harry-and-the-hendersons-1987",
  "url": "/reviews/harry-and-the-hendersons-1987/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/01/10/harry-and-the-hendersons-1987/",
  "title": "Harry and the Hendersons (1987)",
  "publishedAt": "2015-01-10",
  "publishedLabel": "January 10th, 2015",
  "excerpt": "After watching “The Goonies” recently, my 9-year-old daughter has developed a taste for movies from my childhood. (Side note: did you know the actors who played Mikey and Mouth in “The Goonies” are now vegetarians?)…",
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
      "name": "1980s Childrens Movies",
      "slug": "1980s-childrens-movies",
      "url": "/topics/1980s-childrens-movies/"
    },
    {
      "name": "Depictions of Animals",
      "slug": "depictions-of-animals",
      "url": "/topics/depictions-of-animals/"
    },
    {
      "name": "Depictions of Meat in Film",
      "slug": "depictions-of-meat-in-film",
      "url": "/topics/depictions-of-meat-in-film/"
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
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Vegetarian",
      "slug": "vegetarian",
      "url": "/topics/vegetarian/"
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
    "description": "After watching “The Goonies” recently, my 9-year-old daughter has developed a taste for movies from my childhood. (Side note: did you know the actors who played Mikey and Mouth in “The Goonies” are now vegetarians?)…",
    "image": "https://vegbooks.org/media/2010/06/movie-pic-from-istock.jpg"
  },
  "previous": {
    "title": "The Wild Whale Watch (The Magic School Bus Chapter Book #3)",
    "url": "/reviews/wild-whale-watch/"
  },
  "next": {
    "title": "Apples, Bean Dip, & Carrot Cake",
    "url": "/reviews/apples-bean-dip-and-carrot-cake/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/06/movie-pic-from-istock.jpg"} alt={"Girl holding a movie camera - stock image to accompany movie review"} width={210} height={317} />
      </figure>
      <p>{"After watching “The Goonies” recently, my 9-year-old daughter has developed a taste for movies from my childhood. (Side note: did you know the actors who played "}<a href={"http://en.wikipedia.org/wiki/Sean_Astin"} target="_blank" rel="noopener noreferrer">{"Mikey"}</a>{" and "}<a href={"http://en.wikipedia.org/wiki/Corey_Feldman"} target="_blank" rel="noopener noreferrer">{"Mouth"}</a>{" in “The Goonies” are now vegetarians?)"}</p>
      <p>{"So, on family movie night, we gave “Harry and the Hendersons” a whirl."}</p>
      <p>{"I had forgotten that the opening scene depicts the father and son hunting down and killing a rabbit, and so I was not prepared when my wide-eyed daughter turned to me and asked, “Are you sure about this one?” My husband assured us to hang on because things would get better. And he was right."}</p>
      <p>{"Although aspects of this movie feel dated or confused, its positive message about animals and its silly humor make it worth watching in 2015."}</p>
      <p>{"Vegetarian and vegan parents should know that, while the film does open with a hunting scene, the overall gist is anti-hunting. In fact, a big part of the plot revolves around the gun-toting, hunter-dad’s transformation from stereotypical man’s man to a more compassionate and self-accepting person. It’s his relationship with Harry, a Bigfoot who confuses the boundary between us (humans) and them (nonhuman animals), that causes him to rethink his relationship with other animals, whom he’d previously labeled as trophy, dinner, or pet."}</p>
      <p>{"The tone of the movie is not serious. Still, those of us who were not raised vegetarian or vegan ourselves may recognize aspects of our journey in the father’s transformation. Harboring Harry and taking the side of a Bigfoot, in a community seized with fear and bloodlust, sets this dad and his family apart from their neighbors and even extended family members. And once they begin thinking of animals differently, another issue arises: what to do with their hunting trophies and Grandma’s fur stole (which also offend Harry)?"}</p>
      <p>{"It’s Harry’s solution to this dilemma–to bury the dead animals in the backyard–which leads to the only explicit mention of vegetarianism in the movie. The Hendersons are seated at dinner, with their guest Dr. Wrightwood:"}</p>
      <blockquote>
        <p>{"Sarah Henderson: Where’s the roast?"}<br />{" George Henderson: I’ll go get it."}<br />{" Nancy Henderson: The roast is resting in a shallow unmarked grave in the backyard."}<br />{" George Henderson: Oh. Well, there’s plenty of other stuff."}<br />{" Dr. Wallace Wrightwood: Are you vegetarians?"}<br />{" George Henderson: Sometimes. It depends on the guest."}</p>
      </blockquote>
      <p>{"Despite all of these high points, I should note that the treatment of vegetarianism and animal rights is incomplete and may be confusing to younger children. Although Harry himself does not eat hamburgers and bristles at the view of hunting trophies, he is seen in one scene scooping up fish from an aquarium and happily gulping them down as a snack. Additionally, some parents (like me) may not be comfortable with the outdated gender roles in the movie."}</p>
      <p><a href={"https://www.commonsensemedia.org/movie-reviews/harry-and-the-hendersons"} target="_blank" rel="noopener noreferrer">{"Commonsense Media"}</a>{" recommends this movie for ages 7 and up–but if you live with a vegetarian or vegan kid who is sensitive to animal suffering, I’d recommend holding off for another year or two."}</p>
      <p>{"Rated PG."}</p>
    </div>
  );
}
