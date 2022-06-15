import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import BRLformatter from '../../helpers/BRLformatter';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProductCardModalProps {
	item: any;
	addItemToCart: Function;
}

export default function ProductCardModal({
	item,
	addItemToCart,
}: ProductCardModalProps): JSX.Element {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const hideModal = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<button onClick={showModal}>Detalhes</button>
			<Modal show={isModalOpen} onHide={hideModal}>
				<Modal.Header>
					<Modal.Title>Detalhes do item</Modal.Title>
					<button onClick={hideModal}>X</button>
				</Modal.Header>
				<Modal.Body>
					<h5 className="modal-name">{item.title}</h5>
          <img src={item.thumbnail} alt={item.title}/>
					<p>
						{BRLformatter(item.price)} em {item.installments.quantity || null} vezes de {BRLformatter(item.installments.amount)}
						{item.installments.rate === 0
							? ', sem juros!'
							: '.'}
					</p>
					<p>{}</p>
				</Modal.Body>
				<Modal.Footer>
					{' '}
					<button onClick={() => addItemToCart(item)}>
						Adicionar ao carrinho
					</button>{' '}
				</Modal.Footer>
			</Modal>
		</>
	);
}