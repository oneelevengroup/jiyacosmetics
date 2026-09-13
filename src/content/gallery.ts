/**
 * Before & After gallery data.
 *
 * To add a real case: give it `before` and `after` image paths (place the files
 * in /public/images/gallery/) and set `placeholder: false`. Items with
 * placeholder:true render a tasteful "coming soon" card. Categories match the
 * service category ids.
 */

export type GalleryCategory = {
  id: string;
  label: string;
};

export const galleryCategories: GalleryCategory[] = [
  { id: "all", label: "All" },
  { id: "eyelid", label: "Eye" },
  { id: "face", label: "Face" },
  { id: "nonsurgical", label: "Non-Surgical" },
  { id: "hair", label: "Hair" },
];

export type GalleryItem = {
  id: string;
  category: string;
  procedure: string;
  /** Combined before/after image (before on top, after on bottom). */
  image?: string;
  /** Or a separate before + after pair. */
  before?: string;
  after?: string;
  placeholder: boolean;
};

// Real blepharoplasty results (each image is before on top, after on bottom).
export const galleryItems: GalleryItem[] = [
  { id: "e1", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_0117.JPG", placeholder: false },
  { id: "e2", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_0582.JPG", placeholder: false },
  { id: "e3", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_0698.JPG", placeholder: false },
  { id: "e4", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_1549.JPG", placeholder: false },
  { id: "e5", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_1581.JPG", placeholder: false },
  { id: "e6", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_2928.JPG", placeholder: false },
  { id: "e7", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_3618.JPG", placeholder: false },
  { id: "e8", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_4580.JPG", placeholder: false },
  { id: "e9", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_4691.JPG", placeholder: false },
  { id: "e10", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_4726.JPG", placeholder: false },
  { id: "e11", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_6652.JPG", placeholder: false },
  { id: "e12", category: "eyelid", procedure: "Blepharoplasty", image: "/images/IMG_7594.JPG", placeholder: false },
];
