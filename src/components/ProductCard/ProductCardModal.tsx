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

	const hasInstallmentPlan = (item:any):String => {
		if('installments' in item) {
			if(item.installments !== null) {
				let returnString = `${item.installments.quantity} vezes de ${BRLformatter(item.installments.amount)}`;
				const complementaryString = item.installments.rate === 0 ? ", sem juros!" : "."
				return returnString + complementaryString
			}
		} return ""
	}
	return (
		<>
			<button onClick={showModal} className="product-card-button">
				Detalhes
			</button>
			<Modal show={isModalOpen} onHide={hideModal}>
				<Modal.Header>
					<Modal.Title style={{ justifyContent: 'space-evenly' }}>
						Detalhes do item
					</Modal.Title>
					<button onClick={hideModal} className="product-card-button close-btn">
						X
					</button>
				</Modal.Header>
				<Modal.Body
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<h5 className="modal-name">{item.title}</h5>
					<img
						src={item.thumbnail}
						alt={item.title}
						width="150em"
						style={{ padding: '1em' }}
					/>
					<p>
						{BRLformatter(item.price)} em {hasInstallmentPlan(item)}
					</p>
				</Modal.Body>
				<Modal.Footer style={{ justifyContent: 'center' }}>
					<button
						onClick={() => addItemToCart(item)}
						className="product-card-button"
					>
						Adicionar ao carrinho
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}