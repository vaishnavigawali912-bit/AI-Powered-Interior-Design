import { u as useQuery } from "./SEOHead-CJeWf9wx.js";
const DEMO_GALLERY = [
  {
    id: 1n,
    title: "Manhattan Studio Transformation",
    roomType: { StudioApartment: null },
    style: { Modern: null },
    beforeImageUrl: "/assets/images/placeholder.svg",
    afterImageUrl: "/assets/images/gallery-1-after.jpg",
    description: "A 320 sq ft Manhattan studio turned into a light-filled, multifunctional living space using smart furniture and a warm neutral palette.",
    designTips: [
      "Use a platform bed with built-in drawers to maximize storage",
      "Choose a convertible sofa that doubles as a guest bed",
      "Mirror walls to visually double the room's perceived size",
      "Layer warm and cool neutrals to add depth without clutter"
    ],
    relatedProductIds: [1n, 2n, 3n]
  },
  {
    id: 2n,
    title: "Japandi Micro Living Room",
    roomType: { LivingRoom: null },
    style: { Japandi: null },
    beforeImageUrl: "/assets/images/placeholder.svg",
    afterImageUrl: "/assets/images/gallery-2-after.jpg",
    description: "A 200 sq ft living room redesigned with Japandi minimalism — natural materials, low-profile furniture, and intentional negative space.",
    designTips: [
      "Keep a strict one-in-one-out furniture rule",
      "Use natural linen and rattan for texture without visual weight",
      "Mount your TV to free up floor space",
      "Choose a floor lamp instead of a table lamp to clear surfaces"
    ],
    relatedProductIds: [4n, 5n]
  },
  {
    id: 3n,
    title: "Scandinavian Bedroom Retreat",
    roomType: { Bedroom: null },
    style: { Scandinavian: null },
    beforeImageUrl: "/assets/images/placeholder.svg",
    afterImageUrl: "/assets/images/gallery-3-after.jpg",
    description: "A cozy 180 sq ft bedroom transformed into a serene Scandinavian retreat with white oak, muted blues, and layered textiles.",
    designTips: [
      "Use sheer curtains to maximize natural light",
      "Choose white oak or light beech furniture",
      "Layer rugs for warmth and visual zone definition",
      "Keep bedside tables minimal — one lamp, one book"
    ],
    relatedProductIds: [6n, 7n, 8n]
  },
  {
    id: 4n,
    title: "Bohemian Home Office Nook",
    roomType: { HomeOffice: null },
    style: { Bohemian: null },
    beforeImageUrl: "/assets/images/placeholder.svg",
    afterImageUrl: "/assets/images/gallery-4-after.jpg",
    description: "A forgotten corner converted into a full home office with eclectic, creative flair — proving you don't need a room for a productive workspace.",
    designTips: [
      "Use a wall-mounted fold-down desk to reclaim space when not working",
      "Add plants at varying heights for biophilic energy",
      "Use pegboards for both storage and decoration",
      "Layer warm Edison bulbs for focus and ambiance"
    ],
    relatedProductIds: [9n, 10n]
  },
  {
    id: 5n,
    title: "Coastal Kitchen Refresh",
    roomType: { Kitchen: null },
    style: { Coastal: null },
    beforeImageUrl: "/assets/images/placeholder.svg",
    afterImageUrl: "/assets/images/gallery-5-after.jpg",
    description: "A galley kitchen in a beachside condo refreshed with coastal blues, open shelving, and warm brass accents for a breezy luxury feel.",
    designTips: [
      "Replace upper cabinets with open shelving to open up the space",
      "Use subway tiles in a herringbone pattern for visual interest",
      "Swap cabinet hardware to aged brass for an instant luxury upgrade",
      "Add a magnetic knife strip to clear counter space"
    ],
    relatedProductIds: [11n, 12n]
  },
  {
    id: 6n,
    title: "Industrial Loft Living",
    roomType: { LivingRoom: null },
    style: { Industrial: null },
    beforeImageUrl: "/assets/images/placeholder.svg",
    afterImageUrl: "/assets/images/gallery-6-after.jpg",
    description: "An open-plan loft space zoned into distinct living, dining, and work areas using strategic furniture placement and raw material contrasts.",
    designTips: [
      "Use area rugs to define functional zones without walls",
      "Mix black steel with warm wood to soften industrial edges",
      "Expose brick or concrete wherever possible",
      "Choose statement pendant lights to anchor each zone"
    ],
    relatedProductIds: [13n, 14n, 15n]
  }
];
function useGalleryItems(roomType, style) {
  return useQuery({
    queryKey: ["gallery", roomType, style],
    queryFn: async () => {
      let items = DEMO_GALLERY;
      if (roomType) {
        const key = Object.keys(roomType)[0];
        items = items.filter((i) => Object.keys(i.roomType)[0] === key);
      }
      if (style) {
        const key = Object.keys(style)[0];
        items = items.filter((i) => Object.keys(i.style)[0] === key);
      }
      return items;
    }
  });
}
function useGalleryItem(id) {
  return useQuery({
    queryKey: ["gallery", id.toString()],
    queryFn: async () => {
      return DEMO_GALLERY.find((i) => i.id === id) ?? null;
    }
  });
}
function getRoomTypeLabel(rt) {
  if ("StudioApartment" in rt) return "Studio Apartment";
  if ("LivingRoom" in rt) return "Living Room";
  if ("Bedroom" in rt) return "Bedroom";
  if ("Kitchen" in rt) return "Kitchen";
  if ("Bathroom" in rt) return "Bathroom";
  if ("HomeOffice" in rt) return "Home Office";
  if ("Dining" in rt) return "Dining";
  return "Room";
}
function getStyleLabel(style) {
  if ("Modern" in style) return "Modern";
  if ("Scandinavian" in style) return "Scandinavian";
  if ("Bohemian" in style) return "Bohemian";
  if ("Industrial" in style) return "Industrial";
  if ("Japandi" in style) return "Japandi";
  if ("Transitional" in style) return "Transitional";
  if ("Coastal" in style) return "Coastal";
  if ("Minimalist" in style) return "Minimalist";
  if ("Luxury" in style) return "Luxury";
  if ("Eclectic" in style) return "Eclectic";
  return "Style";
}
export {
  getStyleLabel as a,
  useGalleryItem as b,
  getRoomTypeLabel as g,
  useGalleryItems as u
};
