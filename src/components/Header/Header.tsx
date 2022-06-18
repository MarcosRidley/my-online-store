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
			<Link to={'/'} className="logo">
				<img src={logo} alt="mercadolivre logo" />{' '}
			</Link>
			<a
				href="https://www.linkedin.com/in/marcosridley/"
				className="store-name"
				style={{textDecoration: 'none', color: '#555', fontWeight: 'bold'}}
			>
				Ridley's store
			</a>
			<Searchbar setItemFilterName={setItemFilterName} />
			<Link to={pathname === '/' ? '/cart' : '/'}>
				<button className="page-switch-btn">
					{pathname === '/' ? 'Carrinho' : 'Home'}
				</button>
			</Link>
		</header>
	);
}
