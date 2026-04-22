import List "mo:core/List";
import GalleryTypes "../types/gallery";

module {
  public type GalleryItem = GalleryTypes.GalleryItem;
  public type RoomType = GalleryTypes.RoomType;
  public type DesignStyle = GalleryTypes.DesignStyle;

  public func listItems(
    items : List.List<GalleryItem>,
    roomType : ?RoomType,
    style : ?DesignStyle,
  ) : [GalleryItem] {
    let filtered = items.filter(func(item) {
      let roomMatch = switch (roomType) {
        case null true;
        case (?rt) item.roomType == rt;
      };
      let styleMatch = switch (style) {
        case null true;
        case (?s) item.style == s;
      };
      roomMatch and styleMatch
    });
    filtered.toArray()
  };

  public func getItem(items : List.List<GalleryItem>, id : Nat) : ?GalleryItem {
    items.find(func(item) { item.id == id })
  };

  public func addItem(items : List.List<GalleryItem>, item : GalleryItem) : () {
    items.add(item)
  };

  // Seed data — 12 gallery items covering all roomTypes and styles
  public func seedItems(items : List.List<GalleryItem>) {
    let seeds : [GalleryItem] = [
      {
        id = 1;
        title = "Studio Apartment Modern Makeover";
        roomType = #Studio;
        style = #Modern;
        beforeImageUrl = "https://picsum.photos/id/1011/800/600";
        afterImageUrl = "https://picsum.photos/id/1012/800/600";
        description = "A cramped NYC studio transformed into a sleek, open-plan modern living space with smart storage solutions.";
        designTips = [
          "Use multi-functional furniture like a sofa bed or ottoman with storage",
          "Mount shelves high on walls to draw the eye upward and maximize floor space",
          "Choose a monochromatic palette to create visual flow",
        ];
        relatedProductIds = [101, 102, 103];
      },
      {
        id = 2;
        title = "Small Living Room Minimalist Refresh";
        roomType = #LivingRoom;
        style = #Minimalist;
        beforeImageUrl = "https://picsum.photos/id/1015/800/600";
        afterImageUrl = "https://picsum.photos/id/1016/800/600";
        description = "Decluttered and redesigned this compact living room with minimalist principles for a calming, airy feel.";
        designTips = [
          "Edit down to essentials — keep only what is beautiful or functional",
          "Use light neutral tones to make the room feel larger",
          "Add a large mirror opposite the window to double natural light",
        ];
        relatedProductIds = [104, 105];
      },
      {
        id = 3;
        title = "Studio Luxury Boutique Hotel Vibe";
        roomType = #Studio;
        style = #Luxury;
        beforeImageUrl = "https://picsum.photos/id/1021/800/600";
        afterImageUrl = "https://picsum.photos/id/1022/800/600";
        description = "Budget-friendly luxury upgrades turned a basic studio into a boutique hotel-style retreat.";
        designTips = [
          "Invest in one statement piece like a velvet headboard or gold-framed mirror",
          "Layer textures — linen, faux fur, and brass accents create a rich feel",
          "Use floor-to-ceiling curtains to add height and elegance",
        ];
        relatedProductIds = [106, 107, 108];
      },
      {
        id = 4;
        title = "Bedroom Eclectic Style Small Space";
        roomType = #Bedroom;
        style = #Eclectic;
        beforeImageUrl = "https://picsum.photos/id/1029/800/600";
        afterImageUrl = "https://picsum.photos/id/1030/800/600";
        description = "Mixed patterns, vintage finds, and bold color gave this tiny bedroom a vibrant personality.";
        designTips = [
          "Mix patterns confidently — anchor with one dominant color across pieces",
          "Vintage thrift finds add character without a large budget",
          "Use a bold accent wall to define the space without furniture",
        ];
        relatedProductIds = [109, 110];
      },
      {
        id = 5;
        title = "Kitchen Modern Small Space Redesign";
        roomType = #Kitchen;
        style = #Modern;
        beforeImageUrl = "https://picsum.photos/id/1031/800/600";
        afterImageUrl = "https://picsum.photos/id/1032/800/600";
        description = "Open shelving, handle-less cabinets, and smart appliance placement transformed this tiny kitchen.";
        designTips = [
          "Remove upper cabinet doors for an open, spacious feel",
          "Use magnetic knife strips and hanging rails instead of bulky blocks",
          "Choose compact, multi-function appliances",
        ];
        relatedProductIds = [111, 112, 113];
      },
      {
        id = 6;
        title = "Living Room Luxury on a Budget";
        roomType = #LivingRoom;
        style = #Luxury;
        beforeImageUrl = "https://picsum.photos/id/1039/800/600";
        afterImageUrl = "https://picsum.photos/id/1040/800/600";
        description = "Affordable luxury upgrades including new lighting, throw pillows, and a statement rug transformed this space.";
        designTips = [
          "A statement rug anchors the room and adds instant luxury",
          "Swap standard bulbs for warm Edison or soft-glow LEDs",
          "Group decorative objects in threes for a curated look",
        ];
        relatedProductIds = [114, 115];
      },
      {
        id = 7;
        title = "Bedroom Minimalist Calm Retreat";
        roomType = #Bedroom;
        style = #Minimalist;
        beforeImageUrl = "https://picsum.photos/id/1041/800/600";
        afterImageUrl = "https://picsum.photos/id/1042/800/600";
        description = "Stripped back to essentials, this small bedroom now feels like a peaceful sanctuary.";
        designTips = [
          "Keep the bedside to one lamp and one book maximum",
          "Under-bed storage frees up floor space dramatically",
          "Use linen bedding in white or oatmeal for a serene, high-end look",
        ];
        relatedProductIds = [116, 117];
      },
      {
        id = 8;
        title = "Studio Apartment Eclectic Boho Vibe";
        roomType = #Studio;
        style = #Eclectic;
        beforeImageUrl = "https://picsum.photos/id/1043/800/600";
        afterImageUrl = "https://picsum.photos/id/1044/800/600";
        description = "Plants, macrame, woven textiles, and art prints gave this studio a warm, bohemian character.";
        designTips = [
          "Layer rugs to define zones in an open studio layout",
          "Hang trailing plants from ceiling hooks to add life without floor space",
          "Gallery walls of mixed art create visual interest on a budget",
        ];
        relatedProductIds = [118, 119, 120];
      },
      {
        id = 9;
        title = "Kitchen Minimalist Galley Transformation";
        roomType = #Kitchen;
        style = #Minimalist;
        beforeImageUrl = "https://picsum.photos/id/1050/800/600";
        afterImageUrl = "https://picsum.photos/id/1051/800/600";
        description = "A narrow galley kitchen decluttered and reorganized using minimalist storage systems.";
        designTips = [
          "Decant pantry staples into uniform glass jars for a clean, spa-like look",
          "Keep countertops clear — store everything inside cabinets",
          "A single large herb pot beats a cluttered collection",
        ];
        relatedProductIds = [121, 122];
      },
      {
        id = 10;
        title = "Living Room Modern NYC Apartment";
        roomType = #LivingRoom;
        style = #Modern;
        beforeImageUrl = "https://picsum.photos/id/1053/800/600";
        afterImageUrl = "https://picsum.photos/id/1054/800/600";
        description = "Smart furniture arrangement and modern accessories made this Manhattan living room feel twice the size.";
        designTips = [
          "Angle furniture away from walls to create depth",
          "Floating media units keep the floor clear and feel modern",
          "Incorporate plants at different heights for a layered, natural look",
        ];
        relatedProductIds = [123, 124, 125];
      },
      {
        id = 11;
        title = "Bedroom Luxury Small Bedroom Upgrade";
        roomType = #Bedroom;
        style = #Luxury;
        beforeImageUrl = "https://picsum.photos/id/1059/800/600";
        afterImageUrl = "https://picsum.photos/id/1060/800/600";
        description = "Hotel-inspired bedroom makeover using affordable luxury touches for a high-end small-space result.";
        designTips = [
          "Layer your bedding with a throw at the foot for a hotel feel",
          "Bedside sconces save nightstand space and look polished",
          "Blackout curtains in a rich fabric add both function and drama",
        ];
        relatedProductIds = [126, 127];
      },
      {
        id = 12;
        title = "Kitchen Eclectic Color-Pop Small Kitchen";
        roomType = #Kitchen;
        style = #Eclectic;
        beforeImageUrl = "https://picsum.photos/id/1062/800/600";
        afterImageUrl = "https://picsum.photos/id/1063/800/600";
        description = "Bold colors, mixed vintage ceramics, and open shelving gave this tiny kitchen big personality.";
        designTips = [
          "Paint cabinet doors a bold color for instant character",
          "Mix ceramics and vintage finds on open shelves for a lived-in look",
          "A colorful tile backsplash is a focal point that elevates the whole room",
        ];
        relatedProductIds = [128, 129, 130];
      },
    ];
    for (item in seeds.vals()) {
      items.add(item);
    };
  };
};
