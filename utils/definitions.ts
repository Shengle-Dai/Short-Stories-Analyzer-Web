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

