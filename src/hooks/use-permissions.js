import { useEffect, useMemo, useState } from "react";

const usePermissions = (user, workspace) => {
  const [permissions, setPermissions] = useState([]);

  // console.log("user__", user);
  // console.log("workspace_____", workspace);
  useEffect(() => {
    if (user && workspace) {
      const member = workspace.members.find(
        (member) => member.userId === user._id
      );
      if (member) {
        setPermissions(member.role.permission || []);
      }
    }
  }, [user, workspace]);

  return useMemo(() => permissions, [permissions]);
};

export default usePermissions;
