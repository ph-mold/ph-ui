"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "..";

interface Props {
  open: boolean;
  onClose?: () => void;
  onAccept?: () => void;
  onCancel?: () => void;
  title?: ReactNode;
  description: ReactNode;
  acceptLabel?: string;
  cancelLabel?: string;
  showCancelButton?: boolean;
  loading?: boolean;
}

export function Alert({
  open,
  onClose,
  onAccept,
  onCancel,
  title,
  description,
  acceptLabel = "확인",
  cancelLabel = "취소",
  showCancelButton = true,
  loading = false,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    setContainer(document.getElementById("modal-root"));
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [open, mounted]);

  const handleAccept = () => {
    onAccept?.();
  };

  const handleCancel = () => {
    onCancel?.();
    onClose?.();
  };

  if (!mounted || !container || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 mx-4 w-[90%] max-w-[600px] rounded-lg bg-background p-3 shadow-xl sm:mx-10 sm:w-fit sm:min-w-[300px]">
        <div className="flex flex-col gap-2">
          {/* Title */}
          {title && <h2 className="mr-auto ml-2 font-semibold">{title}</h2>}

          {/* Description */}
          <div className="text-md mt-2 ml-3">{description}</div>

          {/* Buttons */}
          <div className="mt-1 flex flex-row gap-2 md:justify-center">
            {showCancelButton && (
              <Button
                type="button"
                variant="text"
                color="secondary"
                size="medium"
                fullWidth
                onClick={handleCancel}
              >
                {cancelLabel}
              </Button>
            )}
            <Button
              type="button"
              variant="contained"
              color="primary"
              size="medium"
              fullWidth
              onClick={handleAccept}
              loading={loading}
            >
              {acceptLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>,
    container
  );
}
