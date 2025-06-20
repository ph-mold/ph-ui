"use client";

import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import clsx from "clsx";
import Button from "./Button";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string | ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const contentVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  className,
  bodyClassName,
}: Props) {
  useEffect(() => {
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
  }, [open]);

  if (typeof window === "undefined") return null;
  const isMobile = window.innerWidth <= 768;
  const container = document.getElementById("modal-root");
  if (!container) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-reverseBackground/30 md:items-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={clsx(
              className,
              "flex w-full flex-col bg-background shadow-xl",
              isMobile
                ? "absolute right-0 bottom-0 left-0 h-[80dvh] rounded-t-2xl"
                : "relative max-h-[90vh] max-w-lg rounded-2xl"
            )}
          >
            {title && (
              <div className="border-border-light flex items-center justify-between border-b px-4 pt-4 pb-2">
                <div className="text-lg font-semibold">
                  {typeof title === "string" ? <h2>{title}</h2> : title}
                </div>
                <Button
                  onClick={onClose}
                  size="small"
                  variant="text"
                  color="secondary"
                  className="!p-2"
                >
                  <X className="size-5" />
                </Button>
              </div>
            )}

            <div
              className={clsx(
                bodyClassName,
                "flex-1 overflow-x-hidden overflow-y-auto px-4 py-6 sm:px-6 sm:py-8"
              )}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    container
  );
}
