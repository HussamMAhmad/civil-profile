import { images } from "@/public/index";
import { StaticImageData } from "next/image";

export type ProjectCategory = "Revit" | "ETABS";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  location: string;
  area: string;
  role: string;
  status: string;
  description: string;
  challenge: string;
  solution: string;
  image: StaticImageData;
  gallery: StaticImageData[];
    tags: string[];
};

export const projects: Project[] = [
  {
    slug: "al-noor-residential-complex",
    number: "01",
    title: "Al Noor Residential Complex",
    category: "Revit",
    year: "2025",
    location: "Dubai, UAE",
    area: "24,500 m²",
    role: "Structural Engineer",
    status: "Completed",

    description:
      "A multi-story residential development designed with a focus on structural efficiency, safety and long-term performance.",

    challenge:
      "The project required an efficient structural system capable of supporting a large residential footprint while maintaining architectural flexibility.",

    solution:
      "A coordinated structural system was developed to optimize column placement, slab spans and foundation requirements while maintaining the architectural intent.",

    image: images.project1,

    gallery: [images.project1, images.project12, images.project13],

    tags: ["Revit", "BIM", "Architecture"],
  },
];
