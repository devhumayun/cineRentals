import { useContext, useState } from 'react';
import Moon from '../../assets/icons/moon.svg';
import Sun from '../../assets/icons/sun.svg';
import Logo from '../../assets/logo.svg';
import Ring from '../../assets/ring.svg';
import Cart from '../../assets/shopping-cart.svg';
import { MovieContext, ThemeContext } from '../../context';
import CartDetails from '../cart/CartDetails';

export default function Header() {
    const [showCart, setShowCart] = useState(false)
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const { state } = useContext(MovieContext)

    function handleCartModal() {
        setShowCart(true)
    }
    return (
        <>
            {
                showCart && <CartDetails onClose={() => setShowCart(false)} />
            }
            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="index.html">
                        <img src={Logo} width="139" height="26" alt="" />
                    </a>

                    <ul className="flex items-center space-x-5">
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={Ring} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={() => setDarkMode(!darkMode)}>
                                <img src={darkMode ? Moon : Sun} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li
                            onClick={handleCartModal}
                        >
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative" href="#">
                                <img src={Cart} width="24" height="24" alt="" />
                                {
                                    state.cartData.length > 0 &&
                                    <span className='text-[#00D991] absolute top-[-10px] right-[-10px] bg-[#CCF7E9] w-[20px] h-[20px] text-center rounded-full'>{state.cartData.length}</span>
                                }
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}