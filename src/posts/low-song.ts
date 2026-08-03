import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Written by poet ",
      {
        "type": "link",
        "href": "http://www.poets.org/poet.php/prmPID/159",
        "external": true,
        "children": [
          "Eve Merriam"
        ]
      },
      " and illustrated by Pam Paparone, ",
      {
        "type": "emphasis",
        "children": [
          "Low Song"
        ]
      },
      " is a rhythmic ode to all things small and low. The narrator sings the praises of dachshunds, a cow’s tongue licking clover, sleeping giraffes, and baby raccoons. With an eye to seasonal changes, such as the falling of leaves and snow, and the beauty of the natural world, the illustrations abound with passion for life."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What veg parents, aunties, and friends need to know, however, is that the illustrations show a milkman delivering to a house and a seal playing with a ball, presumably in an ",
      {
        "type": "link",
        "href": "http://www.hsus.org/marine_mammals/what_are_the_issues/marine_mammals_in_captivity/",
        "external": true,
        "children": [
          "aquarium"
        ]
      },
      ". Until the soy dairies make home deliveries and balls grow in the ocean, those images are hard to reconcile with a vegan outlook on life. It’s too bad too because this book is otherwise a gem."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
