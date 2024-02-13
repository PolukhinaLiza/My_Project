import Popup from 'reactjs-popup';
import Userfront, { SignupForm, LoginForm } from '@userfront/toolkit/react';

Userfront.init('wn98vj9b');

const stylePopup = {
	position: 'absolute',
	placement: 'center',
};
export const MenuItems = (props) => {
	const { selectElement, downloadPdf, setIsWiresModEnabled } = props;
	const availableElements = [
		{ label: 'Выбрать логический элемент', id: 'logicalElement' },
		{ label: 'Выбрать дешифратор/шифратор', id: 'decoder' },
		{ label: 'Выбрать мультиплексор/демультиплексор', id: 'multiplexer' },
		{ label: 'Выбрать триггер', id: 'trigger' },
		{ label: 'Выбрать счетчик', id: 'counter' },
		{ label: 'Выбрать регистр', id: 'registor' },
		{ label: 'Выбрать компаратор', id: 'comparator' },
		{ label: 'Выбрать сумматор', id: 'summator' },
	];
	const showPopup = !Userfront.tokens.accessToken;
	//dropdown-toggle
	return (
		<nav class='navbar navbar-expand-sm bg-dark navbar-dark'>
			<ul class='navbar-nav'>
				{availableElements.map((element) => (
					<li class='nav-item active' key={element.id}>
						<button
							class='btn btn-dark '
							onClick={() => selectElement(element.id)}>
							{element.label}
						</button>
					</li>
				))}
				<li>
					<button class='btn btn-dark ' onClick={downloadPdf}>
						Загрузить PDF
					</button>
				</li>
				<li>
					<button
						class='btn btn-dark '
						onClick={() => setIsWiresModEnabled(true)}>
						Режим добавления проводов
					</button>
				</li>
				<li>
					<button class='btn btn-dark '>Показать схему</button>
				</li>

				{showPopup && (
					<>
						<li>
							<Popup
								trigger={<button class='btn btn-dark '>Login</button>}
								style={stylePopup}
								closeOnDocumentClick
								arrowStyle={{ color: '#2a2e2d' }}>
								<div className='popover-content'>
									<LoginForm style={stylePopup} />
								</div>
							</Popup>
						</li>
						<li>
							<Popup
								trigger={<button class='btn btn-dark '>Signup</button>}
								position={[
									'top left',
									'top right',
									'bottom left',
									'bottom right',
								]}
								closeOnDocumentClick
								arrowStyle={{ color: '#2a2e2d' }}>
								<div className='popover-content'>
									<SignupForm />
								</div>
							</Popup>
						</li>
					</>
				)}
				{!showPopup && (
					<>
						<li>
							<button class='btn btn-dark ' onClick={downloadPdf}>
								Мои схемы
							</button>
						</li>
						<li>
							<button class='btn btn-dark ' onClick={downloadPdf}>
								Сохранить схему
							</button>
						</li>
						<li>
							<button class='btn btn-dark ' onClick={Userfront.logout}>
								Logout
							</button>
						</li>
					</>
				)}

				<li></li>
			</ul>
		</nav>
	);
};
