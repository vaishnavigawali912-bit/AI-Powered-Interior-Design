import List "mo:core/List";
import Principal "mo:core/Principal";
import Types "../types/user-designs";
import Common "../types/common";

module {
  public type DesignSession = Types.DesignSession;
  public type DesignResult = Types.DesignResult;

  /// Create a new DesignSession value (does not add to list).
  public func newSession(
    id : Nat,
    owner : Principal,
    imageKey : Text,
    selectedStyle : Text,
    createdAt : Common.Timestamp,
  ) : DesignSession {
    {
      id;
      owner;
      imageKey;
      selectedStyle;
      createdAt;
      shareUrl = null;
    };
  };

  /// Convert internal DesignSession to the public DesignResult type.
  public func toResult(session : DesignSession) : DesignResult {
    {
      id = session.id;
      imageKey = session.imageKey;
      selectedStyle = session.selectedStyle;
      createdAt = session.createdAt;
      shareUrl = session.shareUrl;
    };
  };

  /// Return all designs owned by the given principal.
  public func listForOwner(
    designs : List.List<DesignSession>,
    owner : Principal,
  ) : [DesignResult] {
    designs
      .filterMap<DesignSession, DesignResult>(func(s) {
        if (Principal.equal(s.owner, owner)) { ?toResult(s) } else { null }
      })
      .toArray();
  };
};
