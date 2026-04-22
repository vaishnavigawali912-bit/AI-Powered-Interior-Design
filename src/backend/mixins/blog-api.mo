import List "mo:core/List";
import BlogTypes "../types/blog";
import BlogLib "../lib/blog";

mixin (blogPosts : List.List<BlogLib.BlogPost>) {

  public query func getBlogPostBySlug(slug : Text) : async ?BlogTypes.BlogPost {
    BlogLib.getPostBySlug(blogPosts, slug)
  };

  public query func listBlogPostsByCategory(
    category : Text,
    page : Nat,
    pageSize : Nat,
  ) : async BlogTypes.BlogPage {
    BlogLib.listByCategory(blogPosts, category, page, pageSize)
  };

  public query func getRelatedBlogPosts(
    category : Text,
    excludeId : Nat,
    limit : Nat,
  ) : async [BlogTypes.BlogPost] {
    BlogLib.getRelated(blogPosts, category, excludeId, limit)
  };

  public query func getFeaturedBlogPosts(limit : Nat) : async [BlogTypes.BlogPost] {
    BlogLib.getFeatured(blogPosts, limit)
  };
};
