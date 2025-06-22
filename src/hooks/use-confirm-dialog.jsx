// /* eslint-disable @typescript-eslint/no-explicit-any */
import { parseAsBoolean, useQueryState } from "nuqs";
import { useState } from "react";

const useConfirmDialog = () => {
  const [open, setOpen] = useQueryState(
    "confirm-dialog",
    parseAsBoolean.withDefault(false)
  );
  const [context, setContext] = useState(null);

  const onOpenDialog = (data) => {
    // console.log("onOpenDialog", data);
    setContext(data || null);
    setOpen(true);
    // console.log("open", open);
  };

  const onCloseDialog = () => {
    setContext(null);
    setOpen(false);
  };

  return {
    open,
    context,
    onOpenDialog,
    onCloseDialog,
  };
};

export default useConfirmDialog;
