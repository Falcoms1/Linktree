
export function Links() {
  return <div className="mt-36 flex  justify-center gap-x-6">


    <a
      href="#"
      className=" flex rounded-full bg-green-800   text-sm font-semibold text-white shadow-sm hover:bg-green-500 p-3 "
    >
      Go back home
    </a>

    <a href="#" className="flex text-sm font-semibold text-gray-900 p-3 ">
      Contact support

      <span aria-hidden="true">&rarr;</span>
    </a>
  </div>

}