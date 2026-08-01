import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2599",
  "slug": "when-lulu-went-to-the-zoo",
  "url": "/reviews/when-lulu-went-to-the-zoo/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/10/when-lulu-went-to-the-zoo/",
  "title": "When Lulu Went to the Zoo",
  "publishedAt": "2010-07-10",
  "publishedLabel": "July 10th, 2010",
  "excerpt": "When I found out my daughter’s camp was taking a field trip to the National Zoo, a facility that still keeps elephants and uses free contact to handle them, I knew I had to take action. Happily, the wonderful parents…",
  "image": {
    "src": "/media/2010/08/9780761354994.jpg",
    "alt": "When Lulu Went to the Zoo",
    "width": 227,
    "height": 270
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
      "name": "Activism",
      "slug": "activism",
      "url": "/topics/activism/"
    },
    {
      "name": "Andy Ellis",
      "slug": "andy-ellis",
      "url": "/topics/andy-ellis/"
    },
    {
      "name": "animal rights",
      "slug": "animal-rights",
      "url": "/topics/animal-rights/"
    },
    {
      "name": "Animal Suffering",
      "slug": "animal-suffering",
      "url": "/topics/animal-suffering/"
    },
    {
      "name": "Animal Welfare Books for Kids",
      "slug": "animal-welfare-books-for-kids",
      "url": "/topics/animal-welfare-books-for-kids/"
    },
    {
      "name": "Animals in Captivity",
      "slug": "animals-in-captivity",
      "url": "/topics/animals-in-captivity/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Zoo",
      "slug": "zoo",
      "url": "/topics/zoo/"
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
    "description": "When I found out my daughter’s camp was taking a field trip to the National Zoo, a facility that still keeps elephants and uses free contact to handle them, I knew I had to take action. Happily, the wonderful parents…",
    "image": "https://vegbooks.org/media/2010/08/9780761354994.jpg"
  },
  "previous": {
    "title": "Eating Animals and Reading About Them",
    "url": "/reviews/eating-animals-and-reading-about-them/"
  },
  "next": {
    "title": "Up (2009)",
    "url": "/reviews/up/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/9780761354994.jpg"}><img src={"/media/2010/08/9780761354994.jpg"} alt={"When Lulu Went to the Zoo"} width={227} height={270} /></a>
      </figure>
      <p>{"When I found out my daughter’s camp was taking a field trip to the "}<a href={"http://nationalzoo.si.edu/Animals/AsianElephants/default.cfm"} target="_blank" rel="noopener noreferrer">{"National Zoo"}</a>{", a facility that still keeps elephants and uses "}<a href={"http://news.opb.org/article/3311-activists-protest-zoo-measure-over-elephant-handling/"} target="_blank" rel="noopener noreferrer">{"free contact"}</a>{" to handle them, I knew I had to take action. Happily, the wonderful parents on the "}<a href={"http://groups.yahoo.com/group/vrgparents/"} target="_blank" rel="noopener noreferrer">{"Vegetarian Resource Group’s parent listserv"}</a>{" suggested I get my daughter a copy of "}<em>{"When Lulu Went to the Zoo"}</em>{" by Andy Ellis. It’s been the perfect anecdote to the zoo propaganda my daughter has been hearing at camp!"}</p>
      <p>{"Lulu is an adorable preschooler who can’t stand to see zoo animals in captivity. While "}<a href={"http://www.schoollibraryjournal.com/article/CA6720586.html"} target="_blank" rel="noopener noreferrer">{"some critics"}</a>{" have found her solution — working with the zookeepers to create a sanctuary for the animals — to be too idealistic, or “magical,” people familiar with the "}<a href={"http://www.elephants.com/"} target="_blank" rel="noopener noreferrer">{"Elephant Sanctuary"}</a>{" or "}<a href={"http://www.blackbeautyranch.org/"} target="_blank" rel="noopener noreferrer">{"Black Beauty Ranch"}</a>{" might not agree. I know that Lulu has inspired my daughter to come up with some creative alternatives to using public lands for the National Zoo: my favorite is to convert the space to the nation’s largest playground!"}</p>
      <p>{"I’m still waiting to see how my daughter reacts to her camp field trip, but I feel much more confident knowing that she can look up to Lulu as a kid who saw the suffering of animals in what so many others characterize as lighthearted fun."}</p>
      <p>{"Ages 3-6."}</p>
    </div>
  );
}
