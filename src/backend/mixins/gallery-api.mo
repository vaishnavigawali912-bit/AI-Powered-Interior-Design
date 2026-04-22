import List "mo:core/List";
import GalleryTypes "../types/gallery";
import GalleryLib "../lib/gallery";

mixin (galleryItems : List.List<GalleryLib.GalleryItem>) {

  public query func listGalleryItems(
    roomType : ?GalleryTypes.RoomType,
    style : ?GalleryTypes.DesignStyle,
  ) : async [GalleryTypes.GalleryItem] {
    GalleryLib.listItems(galleryItems, roomType, style)
  };

  public query func getGalleryItem(id : Nat) : async ?GalleryTypes.GalleryItem {
    GalleryLib.getItem(galleryItems, id)
  };
};
