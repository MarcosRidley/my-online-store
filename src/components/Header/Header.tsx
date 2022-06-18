import Searchbar from '../Searchbar/Searchbar';
import { Link, useLocation } from 'react-router-dom'
import logo from './flash-store-logo.png';
import './Header.css';

interface HeaderProps {
	setItemFilterName: Function,
}

export default function Header({setItemFilterName}: HeaderProps): JSX.Element {
	const { pathname } = useLocation();
	return (
		<header>
				<Link to={'/'} className='logo'><img src={logo} alt="mercadolivre logo" /> </Link>
				<h3 className='store-name'>Ridley's fast store</h3>
				<Searchbar setItemFilterName={setItemFilterName} />
			<Link to={pathname === '/' ? '/cart' : '/'}>
				<button className="page-switch-btn">{pathname === '/' ? 'Carrinho' : 'Home'}</button>
			</Link>
		</header>
	);
}
