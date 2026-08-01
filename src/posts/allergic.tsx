import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11123",
  "slug": "allergic",
  "url": "/reviews/allergic/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/07/27/allergic/",
  "title": "Allergic",
  "publishedAt": "2021-07-27",
  "publishedLabel": "July 27th, 2021",
  "excerpt": "ALLERGIC by Megan Wagner Lloyd and Michelle Mee Nutter is a graphic novel that addresses allergies to animals, and so much more. Maggie, the main character, is feeling alone at home and at school. Her parents are…",
  "image": {
    "src": "/media/2021/06/allergic.jpg",
    "alt": "Allergic",
    "width": 275,
    "height": 400
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
      "name": "Allergic",
      "slug": "allergic",
      "url": "/topics/allergic/"
    },
    {
      "name": "graphic novel",
      "slug": "graphic-novel",
      "url": "/topics/graphic-novel/"
    },
    {
      "name": "Megan Wagner Lloyd",
      "slug": "megan-wagner-lloyd",
      "url": "/topics/megan-wagner-lloyd/"
    },
    {
      "name": "Michelle Mee Nutter",
      "slug": "michelle-mee-nutter",
      "url": "/topics/michelle-mee-nutter/"
    },
    {
      "name": "middle grade",
      "slug": "middle-grade",
      "url": "/topics/middle-grade/"
    },
    {
      "name": "pets",
      "slug": "pets",
      "url": "/topics/pets/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "ALLERGIC by Megan Wagner Lloyd and Michelle Mee Nutter is a graphic novel that addresses allergies to animals, and so much more. Maggie, the main character, is feeling alone at home and at school. Her parents are…",
    "image": "https://vegbooks.org/media/2021/06/allergic.jpg"
  },
  "previous": {
    "title": "One Small Hop",
    "url": "/reviews/one-small-hop/"
  },
  "next": {
    "title": "Everything Awesome About Sharks",
    "url": "/reviews/everything-awesome-about-sharks/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <img src={"/media/2021/06/allergic.jpg"} alt={"Allergic"} width={275} height={400} />
      </figure>
      <p><a href={"https://www.indiebound.org/book/9781338568905"} target="_blank" rel="noopener noreferrer">{"ALLERGIC by Megan Wagner Lloyd and Michelle Mee Nutter"}</a>{" is a graphic novel that addresses allergies to animals, and so much more. Maggie, the main character, is feeling alone at home and at school. Her parents are preparing for a new baby, her twin brothers have each other, and on top off all that, she’s in a new school. Everything starts from there and it is the likable Maggie’s optimism despite disappointment that powers through this story."}</p>
      <p>{"Maggie’s birthday trip to an animal rescue for a dog turns into rashy, sneezing misery. Then a visit to the allergy center tells her she is allergic to anything with fur or feathers, and Maggie expresses anger and sadness, but then starts making a list of pets she won’t be allergic to. Thus starts her Pet Quests. She tries a fish, but she can’t hold it, and it quickly dies. He brothers fall in love with her lizard. A toad should not be handled, and definitely not cuddled with, and hedgehogs are illegal to have as pets. Maggie’s quest for a pet of her own feels impossible!"}</p>
      <p>{"At school, she’s the new kid without anyone to talk to. Then Maggie’s allergies cause the class pet to be moved to another classroom, and worse, the whole class knows it’s because of her allergies. ALLERGIC expresses the mortification and agony of a ten-year-old perfectly. And as with many middle grade conflicts, Maggie’s pain gets better when she meets a new neighbor and experiences a fresh infusion of activity and friendship. And of course, new drama and conflicts."}</p>
      <p>{"What ALLERGIC does thoughtfully and realistically is layer middle grade drama with a very specific challenge that is not often dealt with in novels. Maggie’s allergies to “fur and feathers” present very real restrictions to her life, especially when her new friend gets a dog. And the ways in which Maggie rebels against her allergies come across as true-to-life and relatable. Another effective aspect of Allergic is how Maggie and a boy named Sebastian educate each other (and the reader) about various types of allergies."}</p>
      <p>{"One area of concern for families who are animal-welfare focused is the beginning of the book when Maggie is searching for a new pet. While the animal rescue scene is unproblematic in its treatment of adoption, Maggie’s quick run-through possible animals on her list of “no fur, no feathers” pets doesn’t come across as responsible treatment of pets. Maggie’s brothers suddenly inherit two of the pets (a lizard and a hermit crab), and a fish dies and is flushed, and the (pregnant) mouse Maggie sneaks into her room is sold to a ten-year-old without supervision. Caregivers may want to preview the first part of the book and think about navigating conversations about responsible behavior when it comes to animals we welcome into our lives."}</p>
      <p>{"Overall, "}<strong><a href={"https://www.indiebound.org/book/9781338568905"}>{"ALLERGIC"}</a></strong>{" is a wonderful story about adjusting and finding joy in different scenarios when we hit roadblocks. Highly recommended."}</p>
    </div>
  );
}
