export type ProjectGallery = { title: "Before" | "During" | "After"; images: string[] };
export type Project = {
  slug: string; brand: string; title: string; category: string; location: string; year: string;
  description: string; coverImage: string; galleries: ProjectGallery[];
};

const imageSet = (brand: string, stage: ProjectGallery["title"]) => [1, 2, 3].map((number) => `/images/projects/${brand}_${stage}_0${number}.jpg`);

export const projects: Project[] = [
  { slug: "huawei", brand: "Huawei", title: "Huawei Project", category: "Retail Interior Fit-Out", location: "Malaysia", year: "Year to be confirmed", description: "A commercial retail fit-out delivered with close attention to customer flow, display requirements and a precise, durable finish.", coverImage: "/images/projects/Huawei_1.jpg", galleries: ["Before", "During", "After"].map((title) => ({ title: title as ProjectGallery["title"], images: imageSet("Huawei", title as ProjectGallery["title"]) })) },
  { slug: "honor", brand: "Honor", title: "Honor Project", category: "Retail Design & Build", location: "Malaysia", year: "Year to be confirmed", description: "A considered retail environment balancing brand presentation, practical operations and a clear, welcoming customer journey.", coverImage: "/images/projects/Honor_1.jpg", galleries: ["Before", "During", "After"].map((title) => ({ title: title as ProjectGallery["title"], images: imageSet("Honor", title as ProjectGallery["title"]) })) },
  { slug: "xiaomi", brand: "Xiaomi", title: "Xiaomi Project", category: "Commercial Interior Fit-Out", location: "Malaysia", year: "Year to be confirmed", description: "A disciplined commercial interior fit-out shaped around product display, day-to-day use and reliable project delivery.", coverImage: "/images/projects/Xiaomi_1.jpg", galleries: ["Before", "During", "After"].map((title) => ({ title: title as ProjectGallery["title"], images: imageSet("Xiaomi", title as ProjectGallery["title"]) })) },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
