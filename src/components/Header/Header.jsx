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

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const toggle = () => {
		setIsOpen((prev) => {
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
						{activeIndex === 1 && <div>2번 문항</div>}
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
							{activeIndex === 3 && <Button>제출하기</Button>}
						</div>
					</Modal.Footer>
				</Modal>
			</div>
		</header>
	);
};

export default Header;
