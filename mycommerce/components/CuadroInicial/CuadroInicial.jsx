const CuadroInicial = () => {
    return (
        <section>
            <h2 className="mt-10 mb-0 text-center text-4xl">Encuentra tu proximo auto...</h2>
            <div className="container mx-auto px-20 dark:bg-gray-900 text-white p-10 my-5 mx-auto rounded-tl-[50px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[50px] grid justify-center text-center">
                <ul className="list-none flex list-none flex my-3 space-x-20">
                    <li className="cursor-pointer hover:dark:bg-gray-800">Buscar Autos
                        <ul className="hidden list-none bg-gray-800">
                            <li><a href="#">Autos, Camionetas y 4x4</a></li>
                            <li><a href="#">Buses</a></li>
                            <li><a href="#">Camiones</a></li>
                            <li><a href="#">Casas Rodantes</a></li>
                            <li><a href="#">Motos</a></li>
                        </ul>
                    </li>

                    <li className="cursor-pointer hover:dark:bg-gray-800">Marca
                        <ul className="hidden list-none bg-gray-800">
                            <li><a href="#">Chevrolet</a></li>
                            <li><a href="#">Hyundai</a></li>
                            <li><a href="#">Kia</a></li>
                            <li><a href="#">Suzuki</a></li>
                            <li><a href="#">Nissan</a></li>
                            <li><a href="#">Toyota</a></li>
                            <li><a href="#">Ford</a></li>
                            <li><a href="#">Peugeot</a></li>
                        </ul>
                    </li>

                    <li className="cursor-pointer hover:dark:bg-gray-800">Modelo
                        <ul className="hidden list-none bg-gray-800">
                            <li><a href="#">Captiva</a></li>
                            <li><a href="#">Elantra</a></li>
                            <li><a href="#">Cerato</a></li>
                            <li><a href="#">Dzire</a></li>
                            <li><a href="#">Skyline</a></li>
                            <li><a href="#">Supra</a></li>
                            <li><a href="#">Raptor</a></li>
                            <li><a href="#">5008</a></li>
                        </ul>
                    </li>

                    <a className="w-44 h-10 border-none text-black">
                        <input className="p-2 rounded-[7px]" type="search" placeholder="Palabra Clave" />
                    </a>
                    <div className="flex flex-row">

                        <svg height="12px" className="px-3" viewBox="0 0 512 512" fill="orange">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        <button className="cursor-pointer border-none dark:bg-gray-900 text-orange-400 hover:dark:bg-gray-800 grid grid-cols-2" type="submit">
                            Buscar Vehículo
                        </button>
                    </div>

                </ul>


                <ul className="list-none flex list-none flex my-3 space-x-20">
                    <li className="cursor-pointer hover:dark:bg-gray-800">Estado
                        <li>
                            <ul className="hidden list-none bg-gray-800">
                                <li><a href="#">Nuevos</a></li>
                                <li><a href="#">Usados</a></li>
                            </ul>
                        </li>
                    </li>
                    <li className="cursor-pointer hover:dark:bg-gray-800">Año Min
                        <ul className="hidden list-none bg-gray-800">
                            <li><a href="#">2023</a></li>
                            <li><a href="#">2022</a></li>
                            <li><a href="#">2021</a></li>
                            <li><a href="#">2020</a></li>
                            <li><a href="#">2019</a></li>
                            <li><a href="#">2018</a></li>
                            <li><a href="#">2017</a></li>
                        </ul>
                    </li>

                    <li className="cursor-pointer hover:dark:bg-gray-800">Año Max
                        <ul className="hidden list-none bg-gray-800">
                            <li><a href="#">2023</a></li>
                            <li><a href="#">2022</a></li>
                            <li><a href="#">2021</a></li>
                            <li><a href="#">2020</a></li>
                            <li><a href="#">2019</a></li>
                            <li><a href="#">2018</a></li>
                            <li><a href="#">2017</a></li>
                        </ul>
                    </li>

                    <li className="cursor-pointer hover:dark:bg-gray-800">Precio Min
                        <ul className="hidden list-none bg-gray-800">
                            <li><a href="#">CLP$ 500.000 </a></li>
                            <li><a href="#">CLP$ 1.000.000 </a></li>
                            <li><a href="#">CLP$ 1.500.000 </a></li>
                            <li><a href="#">CLP$ 2.000.000 </a></li>
                            <li><a href="#">CLP$ 2.500.000 </a></li>
                            <li><a href="#">CLP$ 3.000.000 </a></li>
                        </ul>
                    </li>

                    <li className="cursor-pointer hover:dark:bg-gray-800">Precio Max
                        <ul className="hidden list-none bg-gray-800">
                            <li><a href="#">CLP$ 500.000 </a></li>
                            <li><a href="#">CLP$ 1.000.000 </a></li>
                            <li><a href="#">CLP$ 1.500.000 </a></li>
                            <li><a href="#">CLP$ 2.000.000 </a></li>
                            <li><a href="#">CLP$ 2.500.000 </a></li>
                            <li><a href="#">CLP$ 3.000.000 </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CuadroInicial