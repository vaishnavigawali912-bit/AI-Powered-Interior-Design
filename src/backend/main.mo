import List "mo:core/List";
import GalleryLib "lib/gallery";
import BlogLib "lib/blog";
import UserDesignsLib "lib/user-designs";
import GalleryApi "mixins/gallery-api";
import BlogApi "mixins/blog-api";
import UserDesignsApi "mixins/user-designs-api";

actor {
  let galleryItems = List.empty<GalleryLib.GalleryItem>();
  var nextGalleryId : Nat = 13; // next after 12 seeded items

  let blogPosts = List.empty<BlogLib.BlogPost>();
  var nextBlogId : Nat = 10; // next after 9 seeded posts

  let designs = List.empty<UserDesignsLib.DesignSession>();

  // Seed initial data on first deploy
  GalleryLib.seedItems(galleryItems);
  BlogLib.seedPosts(blogPosts);

  include GalleryApi(galleryItems);
  include BlogApi(blogPosts);
  include UserDesignsApi(designs);
};
