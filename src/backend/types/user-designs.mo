import Common "common";

module {
  public type DesignId = Nat;

  public type DesignStyle = {
    #Modern;
    #Minimalist;
    #Luxury;
  };

  public type DesignSession = {
    id : DesignId;
    owner : Principal;
    imageKey : Text;
    selectedStyle : Text;
    createdAt : Common.Timestamp;
    shareUrl : ?Text;
  };

  // Shared-safe public type (identical here — no mutable fields)
  public type DesignResult = {
    id : DesignId;
    imageKey : Text;
    selectedStyle : Text;
    createdAt : Common.Timestamp;
    shareUrl : ?Text;
  };
};
