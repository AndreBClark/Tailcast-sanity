export const Button = ({props, children}) => (
  <div
    className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
    onClick={props.onClickFunc()}
  >
    {children}
  </div>
)
  // <div
  //   className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-neutral-600 hover:bg-neutral-500 border-primary transition"
  //   onClick={() => setIsModalOpen(true)}
  // >
  //     Live demo
  // </div>