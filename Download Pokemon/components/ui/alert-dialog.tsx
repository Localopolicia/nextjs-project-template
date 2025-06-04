import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogPortal = AlertDialogPrimitive.Portal;
export const AlertDialogOverlay = AlertDialogPrimitive.Overlay;
export const AlertDialogContent = AlertDialogPrimitive.Content;
export const AlertDialogTitle = AlertDialogPrimitive.Title;
export const AlertDialogDescription = AlertDialogPrimitive.Description;

// Custom Header and Footer components
export const AlertDialogHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="px-6 pt-4">{children}</div>
);

export const AlertDialogFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="px-6 pb-4 flex justify-end">{children}</div>
);
