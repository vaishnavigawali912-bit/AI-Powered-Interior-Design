module {
  public type RoomType = { #Studio; #Bedroom; #LivingRoom; #Kitchen };
  public type DesignStyle = { #Modern; #Minimalist; #Luxury; #Eclectic };

  public type GalleryItem = {
    id : Nat;
    title : Text;
    roomType : RoomType;
    style : DesignStyle;
    beforeImageUrl : Text;
    afterImageUrl : Text;
    description : Text;
    designTips : [Text];
    relatedProductIds : [Nat];
  };
};
