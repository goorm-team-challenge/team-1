import { useState } from 'react';
import cn from 'classnames';
import ThirdStep from '../ThirdStep/ThirdStep';
import FourthStep from '../FourthStep/FourthStep';
import {
	Button,
	Typography,
	Modal,
	CarouselIndicators,
} from '@goorm-dev/gds-challenge';

import styles from './Header.module.scss';
import FirstStep from '../FirstStep/FirstStep';
import TwoStep from '../TwoStep';

const Header = ({ setKey, setUsers }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const toggle = () => {
		setActiveIndex(0);
		setIsOpen((prev) => {
			localStorage.removeItem('first');
			localStorage.removeItem('second');
			localStorage.removeItem('third');
			localStorage.removeItem('fourth');
			return !prev;
		});
	};

	const handleNext = () => {
		setActiveIndex((prev) => {
			return prev + 1;
		});
	};

	const handlePrev = () => {
		setActiveIndex((prev) => {
			return prev - 1;
		});
	};

	const handleSumbit = () => {
		const first = JSON.parse(localStorage.getItem('first'));
		// const second = localStorage.getItem('second');
		// const third = localStorage.getItem('third');
		// const fourth = localStorage.getItem('fourth');

		const users = localStorage.getItem('users') || [];
		// const newUser = { first, second, third, fourth };
		const newUser = { first };
		users.push(newUser);
		setUsers((prev) => {
			prev.push(newUser);
			return prev;
		});
		setKey((prev) => {
			return prev + 1;
		});
	};

	return (
		<header className={cn(styles.header)}>
			<div className={cn(styles.contents)}>
				<Typography token="h5">
					구름톤 챌린지 참여자 정보 수집
				</Typography>
				<Button size="lg" onClick={toggle}>
					설문조사 참여하기
				</Button>
				<Modal isOpen={isOpen} centered>
					<Modal.Header toggle={toggle} />
					<Modal.Body>
						{activeIndex === 0 && <FirstStep />}
						{activeIndex === 1 && <TwoStep />}
						{activeIndex === 2 && <ThirdStep />}
						{activeIndex === 3 && <FourthStep />}
					</Modal.Body>
					<Modal.Footer between>
						<CarouselIndicators
							activeIndex={activeIndex}
							length={4}
						/>
						<div className={cn(styles.buttons)}>
							{activeIndex > 0 && (
								<Button onClick={handlePrev} color="link">
									이전
								</Button>
							)}
							{activeIndex < 3 && (
								<Button onClick={handleNext}>다음</Button>
							)}
							{activeIndex === 3 && (
								<Button onClick={handleSumbit}>제출하기</Button>
							)}
						</div>
					</Modal.Footer>
				</Modal>
			</div>
		</header>
	);
};

export default Header;
