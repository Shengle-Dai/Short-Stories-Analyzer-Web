export interface Data {
  horror_percentage: number;
  loss_percentage: number;
  resilience_percentage: number;
  nostalgia_percentage: number;
  hope_percentage: number;
}

export interface Story {
  id: number;
  title: string;
  intro: string;
  data: Data;
  imagePath: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "Story One",
    intro: "An intriguing tale of loss and hope.",
    data: {
      horror_percentage: 20,
      loss_percentage: 50,
      resilience_percentage: 30,
      nostalgia_percentage: 10,
      hope_percentage: 40,
    },
    imagePath: "/bg.jpg",
  },
  {
    id: 2,
    title: "Story Two",
    intro: "A suspenseful story exploring the depths of horror and resilience.",
    data: {
      horror_percentage: 70,
      loss_percentage: 10,
      resilience_percentage: 20,
      nostalgia_percentage: 0,
      hope_percentage: 25,
    },
    imagePath: "/bg.jpg",
  },
];
