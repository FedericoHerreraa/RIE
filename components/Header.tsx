

import { PiSunHorizon } from "react-icons/pi";


export const Header = () => {
    return (
        <div className="flex justify-between items-center px-20 py-5">
            <div>
                <PiSunHorizon size={40} className="text-yellow-500"/>
            </div>
            <div className="flex items-center gap-10">
                <p className="text-zinc-700 cursor-pointer">La propuesta</p>
                <p className="text-zinc-700 cursor-pointer">Quienes somos</p>
                <p className="text-zinc-700 cursor-pointer">Planes</p>
            </div>
        </div>
    )
}