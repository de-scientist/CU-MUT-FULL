import * as React from "react";

interface DialogProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-4 shadow-lg">
        {children}
        {onOpenChange && (
          <button
            aria-hidden
            className="absolute inset-0 w-full h-full cursor-default"
            style={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
          />
        )}
      </div>
    </div>
  );
};

export const DialogContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-2 flex flex-col space-y-1 text-left">
    {children}
  </div>
);

export const DialogTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <h2 className={"text-lg font-heading " + (className ?? "")}>{children}</h2>;

export const DialogFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={"flex justify-end gap-2 " + (className ?? "")}>{children}</div>;
