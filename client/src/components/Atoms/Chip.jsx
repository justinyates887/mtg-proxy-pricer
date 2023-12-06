import { useSelector } from "react-redux";

export function Chip() {
    const proxyCost = useSelector((state) => state.proxyCost);
    const originalCost = useSelector((state) => state.originalCost);

    return (
        <div className="chip">
            <p title="Proxy Price">P ${proxyCost.toFixed(2)}</p>
            <p className='ms-5' title="Original Price">O ${originalCost.toFixed(2)}</p>
        </div>
    );
}
