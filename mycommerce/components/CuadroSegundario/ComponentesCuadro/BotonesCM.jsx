import React, { useState } from 'react';

const BotonesMC = () => {
    const [mostrarBoton1, setMostrarBoton1] = useState(true);
    const [mostrarBoton2, setMostrarBoton2] = useState(false);

    const handleClickBoton1 = () => {
        setMostrarBoton1(true);
        setMostrarBoton2(false);
    };

    const handleClickBoton2 = () => {
        setMostrarBoton1(false);
        setMostrarBoton2(true);
    };

    return (
        <div>
            <div className="flex space-x-10 justify-center mb-5">
            <button className="bg-black text-white py-1 px-3 rounded-[8px]" onClick={handleClickBoton1}>Carroceria</button>
            <button className="bg-black text-white py-1 px-3 rounded-[8px]" onClick={handleClickBoton2}>Marca</button>
            </div>

            {mostrarBoton1 && (
                <div>
                    <div className="flex justify-center mt-10 mb-3">
                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Carroceria/sedan.png" width={130} height={130} alt="sedan" />
                            <label>Sedán</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Carroceria/suv.png" width={130} height={130} alt="suv" />
                            <label>SUV</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Carroceria/convertible.png" width={130} height={130} alt="convertible" />
                            <label>Convertible</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Carroceria/doble-cabina.png" width={130} height={130} alt="doble-cabina" />
                            <label>Doble Cabina</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Carroceria/furgon.png" width={130} height={130} alt="furgon" />
                            <label>Furgon</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Carroceria/hatchback.png" width={130} height={130} alt="hatchback" />
                            <label>Hatchback</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Carroceria/coupe.png" width={130} height={130} alt="coupe" />
                            <label>Coupé</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Carroceria/station-wagon.png" width={130} height={130} alt="station-wagon" />
                            <label>Station Wagon</label>
                        </div>
                    </div>
                </div>
            )}

            {mostrarBoton2 && (
                <div>
                    <div className="flex justify-center mt-10 mb-3">
                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Marca/chevrolet.png" width={130} height={130} alt="chevrolet" />
                            <label>Chevrolet</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Marca/hyundai.png" width={130} height={130} alt="hyundai" />
                            <label>Hyundai</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Marca/kia.png" width={130} height={130} alt="kia" />
                            <label>Kia</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Marca/suzuki.png" width={130} height={130} alt="suzuki" />
                            <label>Suzuki</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Marca/nissan.png" width={130} height={130} alt="nissan" />
                            <label>Nissan</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Marca/toyota.png" width={130} height={130} alt="toyota" />
                            <label>Toyota</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Marca/ford.png" width={130} height={130} alt="ford" />
                            <label>Ford</label>
                        </div>

                        <div className="mx-3 text-center cursor-pointer">
                            <img src="/assets/Marca/peugeot.png" width={130} height={130} alt="peugeot" />
                            <label>Peugeot</label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BotonesMC;