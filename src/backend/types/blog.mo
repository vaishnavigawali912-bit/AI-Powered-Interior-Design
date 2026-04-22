import Common "common";

module {
  public type BlogPost = {
    id : Nat;
    title : Text;
    slug : Text;
    excerpt : Text;
    category : Text;
    featuredImageUrl : Text;
    body : Text; // Markdown
    author : Text;
    publishedAt : Common.Timestamp;
    readTimeMinutes : Nat;
    tags : [Text];
  };

  public type BlogPage = {
    posts : [BlogPost];
    total : Nat;
    page : Nat;
    pageSize : Nat;
  };
};
