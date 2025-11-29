import React from "react";
import { useUIStore } from "../store/uiStore";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";

export const ConfirmationDialog: React.FC = () => {
  const { confirmation, closeConfirmation } = useUIStore();

  return (
    <Dialog open={confirmation.open} onOpenChange={(open) => !open && closeConfirmation()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-mutcu-navy">Thank You!</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-slate-700 mt-2">{confirmation.message}</p>
        <DialogFooter className="mt-4">
          <Button
            className="bg-mutcu-orange hover:bg-[#e68a00]"
            onClick={closeConfirmation}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
