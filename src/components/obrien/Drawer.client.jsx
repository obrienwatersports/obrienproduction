import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

/**
 * A Drawer component that opens on user click.
 * @param open - Boolean state. If `true`, then the drawer opens.
 * @param onClose - Function should set the open state.
 * @param children - React children node.
 */
function Drawer({ open, onClose, children }) {
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="onClose" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 left-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="" />
                </Transition.Child>

                
                <Transition.Child
                    as={Fragment}
                    enter="move-left transition-all"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition-all"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <Dialog.Panel className="stopClosing">
                        <header className="always-flex justify padding-20 cartHeader">
                          <div className="flex-vertical">
                            <h2>
                                Cart
                            </h2>
                          </div>
                          <button
                            type="button"
                            className="closeButton flex-vertical"
                            onClick={onClose}
                          >
                            <IconClose aria-label="Close panel" />
                          </button>
                        </header>
                        {children}
                    </Dialog.Panel>
                </Transition.Child>
                        
            </Dialog>
        </Transition>
    );
}

/* Use for associating arialabelledby with the title*/
Drawer.Title = Dialog.Title;
export { Drawer };
export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  };
}
function IconClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="w-5 h-5"
    >
      <title>Close</title>
      <line
        x1="4.44194"
        y1="4.30806"
        x2="15.7556"
        y2="15.6218"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <line
        y1="-0.625"
        x2="16"
        y2="-0.625"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
