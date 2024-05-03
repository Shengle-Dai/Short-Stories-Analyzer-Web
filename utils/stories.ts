import { Story } from "@/utils/definitions";

export const stories: Story[] = [
  {
    id: 1,
    title: "The Flowers",
    intro: "A story depicting the poignant loss of innocence through the eyes of a young girl who confronts the harsh realities of racial violence.",
    data: {
      horror_percentage: 45, // The discovery of the noose and skeleton showcases the intense horror of racial violence.
      loss_percentage: 85, // The deep portrayal of the loss of innocence is a central theme.
      resilience_percentage: 18, // Limited resilience is shown as the girl confronts the harsh reality.
      nostalgia_percentage: 25, // Reflecting on the innocence of childhood amidst its sudden end.
      hope_percentage: 12 // There's little hope as the narrative focuses on harsh societal truths.
    },
    imagePath: "/The Flowers.jpeg"
  },
  {
    id: 2,
    title: "The Handsomest Drowned Man in the World",
    intro: "A surreal story that transforms a community through the discovery of a mysterious, drowned man.",
    data: {
      horror_percentage: 18, // The death of the drowned man introduces a subtle sense of unease.
      loss_percentage: 23, // The village reflects on the loss of the drowned man despite not knowing him.
      resilience_percentage: 45, // The village shows resilience in embracing change.
      nostalgia_percentage: 30, // The story evokes nostalgia for mythical beauty and simplicity.
      hope_percentage: 72 // The villagers are inspired by the drowned man to improve their lives.
    },
    imagePath: "/Drowned Man.jpg"
  },
  {
    id: 3,
    title: "The Yellow Wallpaper",
    intro: "A story that explores the psychological impact of isolation and the mistreatment of women in the 19th century.",
    data: {
      horror_percentage: 78, // The protagonist's descent into madness creates a sense of psychological horror.
      loss_percentage: 55, // The story reflects the loss of the protagonist's sanity and identity.
      resilience_percentage: 14, // The protagonist tries to assert herself, but is overpowered by the constraints placed on her.
      nostalgia_percentage: 12, // Nostalgia for the time before the protagonist's mental decline.
      hope_percentage: 8 // Limited hope as the protagonist remains trapped in her situation.
    },
    imagePath: "/Yellow Wallpaper.png"
  },  
  {
    id: 4,
    title: "The Only Traffic Signal on the Reservation Doesn't Flash Red Anymore",
    intro: "A story that reflects on hope, despair, and the cycle of poverty and alcoholism within a Native American community.",
    data: {
      horror_percentage: 5, // The story highlights the grim reality of alcoholism and poverty in the community.
      loss_percentage: 60, // It explores the loss of potential and hope among the youth.
      resilience_percentage: 54, // The community exhibits resilience in continuing to face everyday struggles.
      nostalgia_percentage: 22, // Nostalgia for the past glories and unrealized potential.
      hope_percentage: 40 // Despite the challenges, there are glimmers of hope for a better future.
    },
    imagePath: "/Reservation.jpeg"
  },  
  {
    id: 5,
    title: "A Clean, Well-Lighted Place",
    intro: "A short story that explores themes of loneliness, existential despair, and the search for meaning.",
    data: {
      horror_percentage: 3, // The story subtly hints at the horror of a life without purpose.
      loss_percentage: 40, // It reflects the loss of hope and the impact of loneliness.
      resilience_percentage: 30, // The old waiter finds some solace in the clean, well-lit place.
      nostalgia_percentage: 20, // Nostalgia for the days before the characters' existential despair.
      hope_percentage: 10 // The story offers little hope in the face of life’s inherent struggles.
    },
    imagePath: "/Clean.jpeg"
  }
  
];
