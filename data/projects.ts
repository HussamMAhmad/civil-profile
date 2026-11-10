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

  {
    slug: "urban-bridge-development",
    number: "02",
    title: "Urban Bridge Development",
    category: "Revit",
    year: "2024",
    location: "Abu Dhabi, UAE",
    area: "18,200 m²",
    role: "Civil Engineer",
    status: "Completed",

    description:
      "An infrastructure project focused on improving urban connectivity and transportation efficiency.",

    challenge:
      "The project required careful coordination between structural requirements, transportation planning and existing infrastructure.",

    solution:
      "A coordinated engineering approach was used to optimize the structure while maintaining accessibility and construction efficiency.",

    image: "/projects/project-02.webp",

    gallery: ["/projects/project-02.webp", "/projects/project-02-02.webp"],

    tags: ["Revit", "BIM", "Architecture"],
  },

  {
    slug: "industrial-facility",
    number: "03",
    title: "Industrial Facility",
    category: "Revit",
    year: "2023",
    location: "Doha, Qatar",
    area: "12,800 m²",
    role: "Site Engineer",
    status: "Completed",

    description:
      "An industrial facility delivered through coordinated construction planning, technical supervision and quality control.",

    challenge:
      "Maintaining construction quality and schedule while coordinating multiple site activities and subcontractors.",

    solution:
      "A structured site management approach was implemented with continuous technical coordination and quality monitoring.",

    image: "/projects/project-03.webp",

    gallery: ["/projects/project-03.webp", "/projects/project-03-02.webp"],

    tags: ["Revit", "BIM", "Architecture"],
  },
];
