import { Separator } from "./Separator.tsx";

type props = {
  closeModal: () => void;
}

export function Modal({ closeModal }: props) {
  return (
    <div className="fixed inset-0 bg-black/50" onClick={() => closeModal()}>
      <div
        className="fixed left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col gap-8 rounded-xl bg-white px-6 py-10 tablet:max-w-[688px] tablet:px-10 lg:max-w-[592px]">
        <div>
          <img src="/assets/images/icon-order-confirmed.svg" alt="" />
          <h2 className="preset-1 mb-2 mt-6 text-rose-900">
            Order Confirmed
          </h2>
          <p className="text-body-base text-rose-500">We hope you enjoy your food!</p>
        </div>
        <div className="rounded-lg bg-rose-50 p-6">

          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-4">
              <img src="/assets/images/image-tiramisu-thumbnail.jpg" alt="" className="size-12" />
              <div className="flex flex-col gap-2">
                <h2 className="preset-4-bold">Classic Tiramisu</h2>
                <div className="flex gap-2">
                  <p className="preset-4-bold w-[21px] text-red">1x</p>
                  <p className="preset-4 text-rose-500">@ $5.50</p>
                </div>
              </div>
            </div>

            <p className="preset-3 text-rose-900">$5.50</p>

          </div>

          <Separator className="my-4" />
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-4">
              <img src="/assets/images/image-tiramisu-thumbnail.jpg" alt="" className="size-12" />
              <div className="flex flex-col gap-2">
                <h2 className="preset-4-bold">Classic Tiramisu</h2>
                <div className="flex gap-2">
                  <p className="preset-4-bold w-[21px] text-red">1x</p>
                  <p className="preset-4 text-rose-500">@ $5.50</p>
                </div>
              </div>
            </div>

            <p className="preset-3 text-rose-900">$5.50</p>

          </div>

          <Separator className="my-4" />
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-4">
              <img src="/assets/images/image-tiramisu-thumbnail.jpg" alt="" className="size-12" />
              <div className="flex flex-col gap-2">
                <h2 className="preset-4-bold">Classic Tiramisu</h2>
                <div className="flex gap-2">
                  <p className="preset-4-bold w-[21px] text-red">1x</p>
                  <p className="preset-4 text-rose-500">@ $5.50</p>
                </div>
              </div>
            </div>

            <p className="preset-3 text-rose-900">$5.50</p>

          </div>
          {/*debut le map*/}
          <Separator className="my-4" />
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-4">
              <img src="/assets/images/image-creme-brulee-thumbnail.jpg" alt="" className="size-12" />
              <div className="flex flex-col gap-2">
                <h2 className="preset-4-bold">Vanilla Bean Crème Brûlée</h2>
                <div className="flex gap-2">
                  <p className="preset-4-bold w-[21px] text-red">4x</p>
                  <p className="preset-4 text-rose-500">@ $7.00</p>
                </div>
              </div>
            </div>

            <p className="preset-3 text-rose-900">$28.00</p>
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
          onClick={closeModal}
        >Start New Order
        </button>
      </div>
    </div>
  )
}
