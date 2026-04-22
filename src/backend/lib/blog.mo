import List "mo:core/List";
import BlogTypes "../types/blog";

module {
  public type BlogPost = BlogTypes.BlogPost;
  public type BlogPage = BlogTypes.BlogPage;

  public func getPostBySlug(posts : List.List<BlogPost>, slug : Text) : ?BlogPost {
    posts.find(func(post) { post.slug == slug })
  };

  public func listByCategory(
    posts : List.List<BlogPost>,
    category : Text,
    page : Nat,
    pageSize : Nat,
  ) : BlogPage {
    let allInCategory = posts.filter(func(post) { post.category == category });
    let total = allInCategory.size();
    let start = page * pageSize;
    if (start >= total) {
      return { posts = []; total; page; pageSize };
    };
    let end = if (start + pageSize > total) total else start + pageSize;
    let pageItems = allInCategory.sliceToArray(start, end);
    { posts = pageItems; total; page; pageSize }
  };

  public func getRelated(
    posts : List.List<BlogPost>,
    category : Text,
    excludeId : Nat,
    limit : Nat,
  ) : [BlogPost] {
    let related = posts.filter(func(post) {
      post.category == category and post.id != excludeId
    });
    let arr = related.toArray();
    if (arr.size() <= limit) arr
    else arr.sliceToArray(0, limit)
  };

  public func getFeatured(posts : List.List<BlogPost>, limit : Nat) : [BlogPost] {
    let arr = posts.toArray();
    if (arr.size() <= limit) arr
    else arr.sliceToArray(0, limit)
  };

  public func addPost(posts : List.List<BlogPost>, post : BlogPost) : () {
    posts.add(post)
  };

  // Seed data — 9 SEO-targeted blog posts
  // Timestamps approximate (2024 dates in nanoseconds from Unix epoch)
  public func seedPosts(posts : List.List<BlogPost>) {
    let seeds : [BlogPost] = [
      {
        id = 1;
        title = "10 Small Living Room Design Ideas for USA Homes in 2024";
        slug = "small-living-room-design-ideas-usa";
        excerpt = "Transform your cramped living room into a stylish, functional space with these 10 designer-approved ideas tailored for small American homes.";
        category = "Small Living";
        featuredImageUrl = "https://picsum.photos/id/1070/1200/630";
        body = "# 10 Small Living Room Design Ideas for USA Homes in 2024\n\nLiving in a small space doesn't mean sacrificing style. Millions of Americans — from NYC apartment dwellers to cozy suburban homeowners — are reimagining what small living rooms can be.\n\n## 1. Float Your Furniture\nPull sofas and chairs away from walls. Counterintuitive as it sounds, floating furniture in the center creates a more spacious, intentional feel.\n\n## 2. Go Vertical\nMount shelves near the ceiling, use tall bookcases, and hang art high. Vertical lines draw the eye upward, making ceilings feel higher.\n\n## 3. Choose a Statement Rug\nA single large area rug — big enough for all furniture legs to sit on — anchors the space and defines zones without walls.\n\n## 4. Embrace Multi-Function Pieces\nOttomans with storage, nesting tables, and sofa beds are your best friends in a small living room.\n\n## 5. Use Mirrors Strategically\nA large mirror opposite a window doubles natural light and creates the illusion of depth.\n\n## 6. Edit Mercilessly\nRemove anything that doesn't serve a purpose or bring you joy. Empty space is a design element.\n\n## 7. Light from Multiple Sources\nSwap single overhead fixtures for layered lighting — floor lamps, table lamps, and wall sconces create depth and warmth.\n\n## 8. Choose Leggy Furniture\nSofas and chairs with visible legs allow light to flow under them, making the room feel airier.\n\n## 9. Paint the Ceiling\nA ceiling painted in a soft color — warm white or pale blue — feels intentional and adds charm.\n\n## 10. Add Live Plants\nA few well-placed plants add life, texture, and color without clutter.\n\n*Start with one or two of these ideas and see the transformation begin.*";
        author = "Sophia Reyes";
        publishedAt = 1_704_067_200_000_000_000; // Jan 1, 2024
        readTimeMinutes = 6;
        tags = ["small living room", "living room design", "small space ideas", "USA homes", "interior design tips"];
      },
      {
        id = 2;
        title = "Studio Apartment Ideas USA: How to Make 400 sq ft Feel Like Home";
        slug = "studio-apartment-ideas-usa-400sqft";
        excerpt = "Living in a studio apartment in the USA? These expert tips will help you create a beautiful, functional home even in 400 square feet or less.";
        category = "Small Living";
        featuredImageUrl = "https://picsum.photos/id/1071/1200/630";
        body = "# Studio Apartment Ideas USA: How to Make 400 sq ft Feel Like Home\n\nStudio apartments are the reality for millions of Americans, especially in cities like New York, San Francisco, Chicago, and Washington DC. Here's how to live beautifully in one.\n\n## Zone Your Space Visually\nWithout walls, you create zones through furniture placement, rugs, and lighting. Your bed zone, living zone, and work zone can all coexist peacefully.\n\n## The Murphy Bed Revolution\nA wall-mounted Murphy bed can reclaim your entire bedroom floor during the day. Paired with a built-in desk or shelves, it's a game changer.\n\n## Curtains as Room Dividers\nSheer floor-to-ceiling curtains on a ceiling track can create a soft separation between sleeping and living areas.\n\n## Kitchen Carts Add Flexibility\nA rolling kitchen cart adds counter space when you need it and tucks away when you don't.\n\n## Sofa Beds for Guests\nA quality sofa bed means you can host without sacrificing your living space.\n\n## Go Lighter on Color\nLight walls and floors reflect more light and make a studio feel more open. Save bold colors for accent pillows and art.\n\n## Vertical Storage is King\nFloating shelves, tall bookcases, and over-door organizers take advantage of your vertical space.\n\n*Your studio apartment can be your favorite place in the world with the right approach.*";
        author = "Marcus Johnson";
        publishedAt = 1_706_745_600_000_000_000; // Feb 1, 2024
        readTimeMinutes = 7;
        tags = ["studio apartment", "studio apartment ideas", "small space living", "USA apartments", "400 square feet"];
      },
      {
        id = 3;
        title = "Budget Luxury Interior Design: Get the High-End Look for Less";
        slug = "budget-luxury-interior-design-tips";
        excerpt = "You don't need a $50,000 renovation budget to have a luxury home. Discover the budget interior design secrets designers use to fake expensive.";
        category = "Budget Design";
        featuredImageUrl = "https://picsum.photos/id/1072/1200/630";
        body = "# Budget Luxury Interior Design: Get the High-End Look for Less\n\nLuxury interior design is less about price tags and more about attention to detail, quality in key places, and restraint everywhere else.\n\n## Splurge on Lighting\nLighting is the most impactful upgrade you can make. A single statement pendant or a pair of elegant table lamps transforms a room's mood entirely. Budget $50–$200 and skip everything else if needed.\n\n## Paint is Your Best Friend\nA fresh coat of high-quality paint in a sophisticated color (think Benjamin Moore's Chantilly Lace or Sherwin-Williams Accessible Beige) costs under $100 and looks like a designer choice.\n\n## One Real Piece\nBuy one genuinely quality item — a real leather throw pillow, a solid wood side table from a local craftsperson — and let it elevate everything around it.\n\n## Ditch Matching Sets\nDesigners never buy matching bedroom or living room sets. Mix and match pieces that feel curated, not catalog.\n\n## Upgrade Your Hardware\nSwap out builder-grade cabinet handles and drawer pulls for brass or matte black versions. Under $50 total, looks like a full kitchen renovation.\n\n## White Linen Bedding\nHotel-quality white linen duvet and pillow cases cost under $80 on Amazon and look better than luxury bedding sets at 10x the price.\n\n## Candles and Flowers\nFresh flowers on a Sunday and a quality candle burning in the evening make any space feel luxurious.\n\n*Luxury is a feeling, and feelings are surprisingly affordable.*";
        author = "Sophia Reyes";
        publishedAt = 1_709_251_200_000_000_000; // Mar 1, 2024
        readTimeMinutes = 8;
        tags = ["budget interior design", "luxury on a budget", "affordable home decor", "interior design tips", "budget luxury"];
      },
      {
        id = 4;
        title = "NYC Apartment Design: Small Space Solutions for City Dwellers";
        slug = "nyc-apartment-design-small-space-solutions";
        excerpt = "New York City apartments are infamous for being tiny. Here are the best design solutions specifically for NYC apartment layouts.";
        category = "NYC Focus";
        featuredImageUrl = "https://picsum.photos/id/1073/1200/630";
        body = "# NYC Apartment Design: Small Space Solutions for City Dwellers\n\nIf you live in New York City, you know the drill: tiny kitchens, narrow hallways, windows overlooking brick walls, and rent that makes you want to cry. Here's how to make the most of it.\n\n## Work With the Architecture\nPre-war buildings have gorgeous crown moldings and high ceilings. Modern buildings have large windows. Work with what you have rather than fighting it.\n\n## Hallways as Design Features\nNYC apartments have long, narrow hallways. Make them beautiful with a gallery wall, a slim console table, and good lighting.\n\n## Under-Bed Storage\nPlatform beds with drawers underneath are essential in NYC. Store off-season clothing, extra linens, and anything that doesn't need to be visible.\n\n## The Kitchen Dilemma\nNYC kitchens are notoriously small. A magnetic knife strip, over-door pantry organizers, and a slim rolling cart add crucial storage without renovating.\n\n## Windows and Light\nMaximize light with sheer curtains (or none at all). Use mirrors to bounce light from windows into darker corners.\n\n## Bathroom Storage\nOver-toilet shelving units and under-sink organizers transform even the smallest NYC bathroom.\n\n## Embrace the View (or Create One)\nIf you have a window with a view, frame it. If you don't, hang an oversized piece of art where a window would be.\n\n*Every NYC apartment has potential. It just needs the right eye.*";
        author = "Aisha Thompson";
        publishedAt = 1_711_929_600_000_000_000; // Apr 1, 2024
        readTimeMinutes = 6;
        tags = ["NYC apartment", "New York City design", "small apartment NYC", "city living", "apartment design"];
      },
      {
        id = 5;
        title = "DIY Interior Design Ideas for Small Bedrooms Under $500";
        slug = "diy-small-bedroom-design-under-500";
        excerpt = "Redesign your small bedroom on a tight budget with these 12 DIY interior design projects that make a huge impact for under $500 total.";
        category = "DIY Ideas";
        featuredImageUrl = "https://picsum.photos/id/1074/1200/630";
        body = "# DIY Interior Design Ideas for Small Bedrooms Under $500\n\nYou don't need a contractor or a designer to transform your small bedroom. With $500 and a weekend, you can create a room you love.\n\n## Project 1: Floating Nightstands ($40)\nMount two simple floating shelves from IKEA as bedside tables. They free up floor space and look custom.\n\n## Project 2: Painted Accent Wall ($30)\nChoose one wall — ideally the one behind your headboard — and paint it a rich, saturated color. Three hours, total transformation.\n\n## Project 3: New Bedding ($80)\nWhite or linen-toned duvet cover and pillow cases from Amazon or Target instantly upgrade the room's sophistication.\n\n## Project 4: DIY Headboard ($60)\nCut a piece of plywood, cover in fabric, and mount it to the wall. Looks custom, costs almost nothing.\n\n## Project 5: String Lights + Curtains ($50)\nWarm string lights draped behind sheer curtains create a magical, boutique hotel feel.\n\n## Project 6: Gallery Wall ($80)\nPrint photos at Walgreens for $0.50 each, buy matching frames at the dollar store, and create a gallery wall in an afternoon.\n\n## Project 7: Mirror Wall Art ($70)\nA cluster of small mirrors or one large mirror makes the room feel bigger and reflects light beautifully.\n\n## Project 8: New Hardware ($30)\nReplace dresser and closet hardware with brass or matte black pulls from Amazon or Home Depot.\n\n## Total: ~$440. Transformation: priceless.";
        author = "Marcus Johnson";
        publishedAt = 1_714_521_600_000_000_000; // May 1, 2024
        readTimeMinutes = 9;
        tags = ["DIY bedroom", "small bedroom ideas", "bedroom on a budget", "DIY interior design", "bedroom makeover"];
      },
      {
        id = 6;
        title = "Open-Plan Small Apartment Design: Making Open Spaces Work";
        slug = "open-plan-small-apartment-design";
        excerpt = "Open-plan layouts are beautiful but challenging to furnish in small apartments. Learn how to define zones and create flow in an open space.";
        category = "Small Living";
        featuredImageUrl = "https://picsum.photos/id/1075/1200/630";
        body = "# Open-Plan Small Apartment Design: Making Open Spaces Work\n\nOpen-plan apartments feel spacious but without walls, it can be hard to know where things belong. Here's how to create order in an open layout.\n\n## Zone with Rugs\nPlace a rug under your living room furniture and another in the dining area. Rugs signal \"this is a different room\" without any walls needed.\n\n## Furniture as Dividers\nA sofa facing away from the kitchen effectively creates a living room. A bookcase placed perpendicular to the wall creates a hallway.\n\n## Consistent Color Palette\nUsing the same 3–4 colors throughout an open plan creates flow. Avoid using completely different color schemes in connected zones.\n\n## Lighting Zones\nDifferent lighting for different zones helps enormously. A warm pendant over the dining table, floor lamps in the living area, and under-cabinet lights in the kitchen each define their space.\n\n## Keep Sightlines Clear\nAvoid placing tall furniture where it blocks the natural sightline through the apartment. This makes the space feel open.\n\n## Use the Balcony or Window\nIn open plans, the window or balcony becomes a natural focal point. Orient furniture toward it.\n\n*An open plan is an invitation to be intentional about every piece of furniture.*";
        author = "Aisha Thompson";
        publishedAt = 1_717_200_000_000_000_000; // Jun 1, 2024
        readTimeMinutes = 5;
        tags = ["open plan apartment", "studio apartment layout", "small apartment design", "apartment zoning", "interior design"];
      },
      {
        id = 7;
        title = "Design Tips: The 5 Rules of Small Space Interior Design";
        slug = "rules-of-small-space-interior-design";
        excerpt = "Interior designers follow a handful of core rules when working with small spaces. Master these 5 principles and your small home will feel effortlessly stylish.";
        category = "Design Tips";
        featuredImageUrl = "https://picsum.photos/id/1076/1200/630";
        body = "# Design Tips: The 5 Rules of Small Space Interior Design\n\nSmall space design isn't just regular design applied to a smaller room. It has its own rules, and breaking them makes small rooms feel cramped.\n\n## Rule 1: Less is Always More\nThe most common mistake in small spaces is too much stuff. Edit relentlessly. If you can remove something and not miss it, remove it.\n\n## Rule 2: Scale Matters\nOversized furniture in a small room feels suffocating. Choose pieces scaled appropriately for the space. A loveseat often works better than a full sofa.\n\n## Rule 3: Vertical is Your Friend\nUse the full height of your walls. Tall shelving, floor-to-ceiling curtains, and high-mounted art all add visual height.\n\n## Rule 4: Light is Everything\nDark rooms feel small. Maximize natural light, layer artificial light, and use light colors on large surfaces (walls, floors, ceilings).\n\n## Rule 5: Storage Must Be Invisible\nClutter is the enemy of small space design. Every item needs a home, and storage should look intentional — baskets, beautiful boxes, built-ins, and under-furniture drawers.\n\n*Follow these five rules consistently and your small space will feel larger than its square footage.*";
        author = "Sophia Reyes";
        publishedAt = 1_719_792_000_000_000_000; // Jul 1, 2024
        readTimeMinutes = 5;
        tags = ["design tips", "small space rules", "interior design principles", "small home design", "design fundamentals"];
      },
      {
        id = 8;
        title = "Budget-Friendly Kitchen Updates That Look Expensive";
        slug = "budget-kitchen-updates-look-expensive";
        excerpt = "Upgrade your small kitchen without a full renovation. These budget-friendly kitchen updates will make your space look like it cost three times more.";
        category = "Budget Design";
        featuredImageUrl = "https://picsum.photos/id/1077/1200/630";
        body = "# Budget-Friendly Kitchen Updates That Look Expensive\n\nThe kitchen is one of the most expensive rooms to renovate — but it's also where small budget updates have the biggest visual impact.\n\n## Update the Hardware ($30–$80)\nSwapping out cabinet hardware is the single highest-ROI kitchen update. New brass or matte black pulls make every cabinet look custom.\n\n## Paint the Cabinets ($100–$200)\nCabinet painting is a major project but an affordable one. A neutral like Sherwin-Williams Repose Gray or a bold navy transforms the whole kitchen.\n\n## Add Open Shelving ($40–$100)\nRemove one set of upper cabinets and replace with open floating shelves. Style with dishes, plants, and a few decorative objects.\n\n## New Faucet ($80–$150)\nA matte black or brushed gold faucet looks stunning and is one of the easiest plumbing upgrades a homeowner can do.\n\n## Backsplash Peel-and-Stick Tile ($50–$100)\nPeel-and-stick backsplash tile is a renter-friendly, budget-friendly way to add a high-impact design element.\n\n## Lighting Upgrade ($40–$120)\nReplace the overhead fluorescent fixture with a pendant or a modern flush mount. Instant personality.\n\n## Under-Cabinet Lighting ($30–$60)\nStrip LED lights under cabinets add ambiance and make the countertops glow beautifully.\n\n*With $200–$500 and a weekend, your kitchen can look like a full renovation happened.*";
        author = "Marcus Johnson";
        publishedAt = 1_722_470_400_000_000_000; // Aug 1, 2024
        readTimeMinutes = 7;
        tags = ["budget kitchen", "kitchen updates", "affordable kitchen design", "kitchen on a budget", "small kitchen ideas"];
      },
      {
        id = 9;
        title = "How to Choose the Right Color Palette for a Small Space";
        slug = "color-palette-small-space-guide";
        excerpt = "Color has more power in a small space than anywhere else. Learn how to choose a color palette that makes your small home feel larger, warmer, and more intentional.";
        category = "Design Tips";
        featuredImageUrl = "https://picsum.photos/id/1078/1200/630";
        body = "# How to Choose the Right Color Palette for a Small Space\n\nIn a small space, color is amplified. A shade that looks soft in a showroom can overwhelm a studio apartment. Here's how to choose wisely.\n\n## Light Colors Make Rooms Feel Bigger\nLight reflects off pale walls and makes a room feel more open. Whites, creams, soft grays, and pale warm tones are classic small-space colors.\n\n## Don't Fear Dark Colors\nCounter-intuitively, very dark colors — charcoal, navy, deep forest green — can make a small room feel cozy and intimate rather than cramped, especially in bedrooms.\n\n## The 60-30-10 Rule\nChoose a dominant color (60% of the room), a secondary color (30%), and an accent (10%). This creates balance and prevents chaos.\n\n## Monochromatic Palettes Work Best\nUsing variations of one color throughout creates visual flow in open-plan spaces and makes small rooms feel more intentional.\n\n## Test Before Committing\nAlways paint sample swatches and live with them for 48 hours before committing. Colors change dramatically in different lighting conditions.\n\n## Consider the Undertone\nEvery white, gray, and beige has an undertone (pink, green, yellow, blue). In small spaces these undertones are amplified — choose one that complements your light source.\n\n## Ceilings Count\nPainting the ceiling the same color as the walls or a few shades lighter makes the room feel taller and more unified.\n\n*Color is the most powerful and most affordable design tool at your disposal.*";
        author = "Sophia Reyes";
        publishedAt = 1_725_148_800_000_000_000; // Sep 1, 2024
        readTimeMinutes = 6;
        tags = ["color palette", "small space colors", "interior color guide", "paint colors", "small home design"];
      },
    ];
    for (post in seeds.vals()) {
      posts.add(post);
    };
  };
};
