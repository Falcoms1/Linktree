
export interface AddProps {
    title: string
}


export function Adds({ title }: AddProps) {
    return (

        <div className="flex flex-col w-[500px] place-items-center pt-4">

            <a href="google.com" className="flex rounded-full bg-green-500  h-12 w-80 justify-center p-2 text-lg font-extrabold 
            text-white shadow-lg shadow-green-400/50 hover:bg-green-700">{title}</a>
            

        </div>
    )
}
