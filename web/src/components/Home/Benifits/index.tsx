export const Benifits = () => {
  return (
    <div className="bg-black font-monster text-white">
      <div className="container mx-auto">
        <h2 className="mb-10 pt-32 text-center text-xl font-bold md:text-3xl lg:text-4xl">
          OWN THE NOW
        </h2>
        <div className="grid grid-cols-1 text-center sm:grid-cols-3 sm:py-16">
          <div className="mb-12">
            <img
              width="140"
              height="80"
              className="mx-auto"
              src="https://cdn.shopify.com/s/files/1/0263/6156/1168/files/lpg-stepIcon1.jpg?v=1603950415"
            />
            <div className="flex items-center justify-center p-2">
              <button className="mr-3 h-7 w-7 rounded-full bg-red-500 font-extrabold">
                1
              </button>
              <span className="font-bold uppercase text-red-500">
                Purchase Your Card
              </span>
            </div>
            <p className="mx-auto w-5/6 text-sm">
              After placing your order, you will receive instructions on how to
              provide us with your logo or design for on the card.
            </p>
          </div>
          <div className="mb-12">
            <img
              width="140"
              height="80"
              className="mx-auto"
              src="https://cdn.shopify.com/s/files/1/0263/6156/1168/files/lpg-stepIcon2.jpg?v=1603950415"
            />
            <div className="flex items-center justify-center p-2">
              <button className="mr-3 h-7 w-7 rounded-full bg-red-500 font-extrabold">
                2
              </button>
              <span className="font-bold uppercase text-red-500">
                Create Your Profile
              </span>
            </div>
            <p className="mx-auto w-5/6 text-sm">
              Here you can add, edit & enable what you would like to share with
              your contactless card.
            </p>
          </div>
          <div className="mb-12">
            <img
              width="140"
              height="80"
              className="mx-auto"
              src="https://cdn.shopify.com/s/files/1/0263/6156/1168/files/lpg-stepIcon3.jpg?v=1603950416"
            />
            <div className="flex items-center justify-center p-2">
              <button className="mr-3 h-7 w-7 rounded-full bg-red-500 font-extrabold">
                3
              </button>
              <span className="font-bold uppercase text-red-500">
                Tap, Share & Go
              </span>
            </div>
            <p className="mx-auto w-5/6 text-sm">
              It's that simple! Share who you are and what you do with with one
              quick tap.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
