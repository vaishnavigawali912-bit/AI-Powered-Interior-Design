import List "mo:core/List";
import Time "mo:core/Time";
import UserDesignsLib "../lib/user-designs";
import Types "../types/user-designs";

mixin (
  designs : List.List<UserDesignsLib.DesignSession>,
) {
  var nextDesignId : Nat = 0;
  /// Save a new design session for the caller.
  public shared ({ caller }) func saveDesign(
    imageKey : Text,
    selectedStyle : Text,
  ) : async Types.DesignResult {
    let id = nextDesignId;
    nextDesignId += 1;
    let session = UserDesignsLib.newSession(
      id,
      caller,
      imageKey,
      selectedStyle,
      Time.now(),
    );
    designs.add(session);
    UserDesignsLib.toResult(session);
  };

  /// List all designs saved by the caller.
  public shared query ({ caller }) func listMyDesigns() : async [Types.DesignResult] {
    UserDesignsLib.listForOwner(designs, caller);
  };
};
