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
  { id: "eyelid", label: "Eyelid Surgery" },
  { id: "face", label: "Facial Surgery" },
  { id: "nonsurgical", label: "Skin & Non-Surgical" },
  { id: "hair", label: "Hair Restoration" },
];

export type GalleryItem = {
  id: string;
  category: string;
  procedure: string;
  before?: string;
  after?: string;
  placeholder: boolean;
};

export const galleryItems: GalleryItem[] = [
  { id: "e1", category: "eyelid", procedure: "Upper Blepharoplasty", placeholder: true },
  { id: "e2", category: "eyelid", procedure: "Lower Blepharoplasty", placeholder: true },
  { id: "f1", category: "face", procedure: "Deep Plane Facelift", placeholder: true },
  { id: "f2", category: "face", procedure: "Necklift", placeholder: true },
  { id: "n1", category: "nonsurgical", procedure: "Morpheus8", placeholder: true },
  { id: "h1", category: "hair", procedure: "ARTAS Hair Restoration", placeholder: true },
];
