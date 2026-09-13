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

// Real before/after results (each image is before on top, after on bottom, unless
// noted). Procedure labels are best-guess from the photos, correct as needed.
const G = "/images/gallery";
export const galleryItems: GalleryItem[] = [
  // Eye / eyelid
  { id: "e1", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_0117.JPG`, placeholder: false },
  { id: "e2", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_0582.JPG`, placeholder: false },
  { id: "e3", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_0619.JPG`, placeholder: false },
  { id: "e4", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_0698.JPG`, placeholder: false },
  { id: "e5", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_1581.JPG`, placeholder: false },
  { id: "e6", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_2928.JPG`, placeholder: false },
  { id: "e7", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_3618.JPG`, placeholder: false },
  { id: "e8", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_4580.JPG`, placeholder: false },
  { id: "e9", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_4691.JPG`, placeholder: false },
  { id: "e10", category: "eyelid", procedure: "Upper Blepharoplasty", image: `${G}/IMG_4726.JPG`, placeholder: false },
  { id: "e11", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_6652.JPG`, placeholder: false },
  { id: "e12", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_7594.JPG`, placeholder: false },
  { id: "e13", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_8180.JPG`, placeholder: false },
  { id: "e14", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_8184.JPG`, placeholder: false },
  { id: "e15", category: "eyelid", procedure: "Blepharoplasty", image: `${G}/IMG_9655.JPG`, placeholder: false },
  { id: "e16", category: "eyelid", procedure: "Quad Blepharoplasty", image: `${G}/ba-quad-bleph.jpg`, placeholder: false },
  // Face / neck
  { id: "f1", category: "face", procedure: "Deep Plane Face & Neck Lift", image: `${G}/ba-deepplane-facelift.jpg`, placeholder: false },
  { id: "f2", category: "face", procedure: "Face & Neck Lift", image: `${G}/ba-face-neck-profile.jpg`, placeholder: false },
  { id: "f3", category: "face", procedure: "Facelift", image: `${G}/IMG_1549.JPG`, placeholder: false },
  { id: "f4", category: "face", procedure: "Face & Neck Lift", image: `${G}/IMG_1828.JPG`, placeholder: false },
  { id: "f5", category: "face", procedure: "Neck Lift", image: `${G}/IMG_1362.JPG`, placeholder: false },
  { id: "f6", category: "face", procedure: "Neck Lift", image: `${G}/IMG_4668.JPG`, placeholder: false },
  { id: "f7", category: "face", procedure: "Lip Lift", image: `${G}/IMG_2972.JPG`, placeholder: false },
];
