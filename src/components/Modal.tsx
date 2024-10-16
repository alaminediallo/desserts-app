import { useEffect, useRef, useState } from "react";
import { Separator } from "./Separator.tsx";
import { useMediaQuery, useOnClickOutside, useScrollLock } from 'usehooks-ts';
import FocusLock from 'react-focus-lock';

type Props = {
  closeModal: () => void;
}

export function Modal({ closeModal }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const isTablet = useMediaQuery('(min-width: 768px)')

  useScrollLock();
  useOnClickOutside(modalRef, closeModal);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50">
      <FocusLock>
        <div
          ref={modalRef}
          className={`fixed left-1/2 z-20 flex w-full max-w-lg -translate-x-1/2 flex-col gap-8 rounded-t-xl bg-white px-6 py-10 transition-transform duration-300 ease-out tablet:rounded-b-xl tablet:px-10 ${isTablet ? 'top-1/2 -translate-y-1/2' : 'bottom-0'} ${isVisible ? 'translate-y-0 tablet:top-1/2 tablet:-translate-y-1/2' : 'translate-y-full'}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div>
            <img src="/assets/images/icon-order-confirmed.svg" alt="" />
            <h2 className="preset-1 mb-2 mt-6 text-rose-900">
              Order Confirmed
            </h2>
            <p className="text-body-base text-rose-500">We hope you enjoy your food!</p>
          </div>
          <div className="rounded-lg bg-rose-50 p-6">

            <div className="max-h-[210px] overflow-y-auto">
              {/*debut le map*/}
              <Separator className="my-4" />
              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-4">
                  <img src="/assets/images/image-creme-brulee-thumbnail.jpg" alt="" className="size-12" />
                  <div className="flex flex-col gap-2">
                    <h2 className="preset-4-bold line-clamp-1">Vanilla Bean Crème Brûlée</h2>
                    <div className="flex gap-2">
                      <p className="preset-4-bold w-[21px] text-red">4x</p>
                      <p className="preset-4 text-rose-500">@ $7.00</p>
                    </div>
                  </div>
                </div>

                <p className="preset-3 text-rose-900">$28.00</p>
              </div>
            </div>
            {/*fin le map*/}

            <Separator className="my-6" />

            <div className="flex items-center justify-between text-rose-900">
              <p className="preset-4">Order Total</p>
              <p className="preset-2">$46.50</p>
            </div>
          </div>

          <button
            className="primary-btn"
            onClick={closeModal}>
            Start New Order
          </button>
        </div>
      </FocusLock>
    </div>
  )
}
