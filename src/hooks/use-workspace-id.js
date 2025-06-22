import { useParams } from "react-router-dom";

const useWorkspaceId = () => {
  const params = useParams();
  // console.log("params__", params);
  return params.workspaceId;
};

export default useWorkspaceId;
