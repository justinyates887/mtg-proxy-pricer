import { useDispatch, useSelector } from 'react-redux';
import { setProxyPrice } from '../../actions/actions';
import React, { useState } from 'react';

export function Navbar() {
    const dispatch = useDispatch();
    const proxyCost = useSelector((state) => state.proxyCost);
    const originalCost = useSelector((state) => state.originalCost);
    const proxyPrice = useSelector((state) => state.proxyPrice);

    const [isValidInput, setIsValidInput] = useState(true);

    const handleInputChange = (event) => {
        const enteredValue = event.target.value;

        const isValidFloat = /^\d+(\.\d{1,2})?$/.test(enteredValue);

        if (isValidFloat) {
            const floatValue = parseFloat(enteredValue);
            dispatch(setProxyPrice(floatValue));
            setIsValidInput(true);
        } else {
            setIsValidInput(false);
        }
    };

    return (
        <nav className="navbar" style={{ backgroundColor: "#070309"}}>
            <div className="container-fluid align-items-center">
                <div className={`input-group ${isValidInput ? '' : 'has-validation'}`} style={{ width: "150px" }}>
                    <span className="dark input-group-text">$</span>
                    <input 
                        type="text" 
                        className={`dark form-control ${isValidInput ? '' : 'is-invalid'}`} 
                        aria-label="Amount"
                        placeholder={proxyPrice.toFixed(2)}
                        onChange={handleInputChange}
                        title="Proxy Price Per Card"
                    />
                </div>
                <h5>
                    MTG Budget Builder
                </h5>
                <div className="chip">
                    <p>P ${proxyCost.toFixed(2)}</p>
                    <p className='ms-5'>O ${originalCost.toFixed(2)}</p>
                </div>
                {!isValidInput && (
                    <div className="invalid-feedback">
                        Please enter a valid number with up to two decimal points.
                    </div>
                )}
            </div>
        </nav>
    );
}
