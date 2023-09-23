import styled from 'styled-components';
import { useEffect, useState } from 'react';

import {
	Form,
	Button,
	Input,
	Typography,
	Label,
	Modal,
	TextArea,
} from '@goorm-dev/gds-challenge';

const QuestionDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const TwoStep = () => {
	const [isSWMajor, setIsSWMajor] = useState(-1);
	const [isExperienced, setIsExperienced] = useState(-1);
	const [edu, setEdu] = useState(false);
	const [level, setLevel] = useState(false);
	const [devth, setDevth] = useState(false);
	const [ide, setIde] = useState(false);
	const [exp, setExp] = useState(false);
	const [serviceReason, setServiceReason] = useState('');

	let store = localStorage.getItem('second');
	store = JSON.parse(store);

	const handleMajorClick = () => {
		setIsSWMajor(1);
		localStorage.setItem('second', JSON.stringify({ isSWMajor: 1 }));
	};

	const handleNotMajorClick = () => {
		setIsSWMajor(0);
		localStorage.setItem('second', JSON.stringify({ isSWMajor: 0 }));
	};
	const handleExClick = () => {
		setIsExperienced(1);
		localStorage.setItem('second', JSON.stringify({ isExperienced: 1 }));
	};

	const handleExNotClick = () => {
		setIsExperienced(0);
		localStorage.setItem('second', JSON.stringify({ isExperienced: 0 }));
	};

	const handleChangeText = (e) => {
		setServiceReason(e.target.value);
		localStorage.setItem(
			'second',
			JSON.stringify({ exReason: e.target.value }),
		);
	};
	useEffect(() => {
		console.log(isSWMajor, isExperienced);
	}, [isSWMajor, isExperienced]);

	return (
		<QuestionDiv>
			<Form.Group gap="lg">
				<Typography token="h4">
					구름 서비스 이용 경험을 알려주세요
				</Typography>
				<div>
					<Typography block token="subtitle-1">
						1. SW 관련 학과를 전공하셨나요?
					</Typography>
					<div>
						<Button
							className={isSWMajor == 1 && 'active'}
							color="basic"
							icon={null}
							iconSide="left"
							onClick={handleMajorClick}
						>
							전공
						</Button>
						<Button
							className={isSWMajor == 0 && 'active'}
							color="basic"
							icon={null}
							iconSide="left"
							onClick={handleNotMajorClick}
						>
							비전공
						</Button>
					</div>
				</div>
				<div>
					<Typography block token="subtitle-1">
						2. 구름 서비스를 사용해보신 적이 있나요
					</Typography>
					<div>
						<Button
							className={isExperienced == 1 && 'active'}
							color="basic"
							icon={null}
							iconSide="left"
							onClick={handleExClick}
						>
							예
						</Button>
						<Button
							className={isExperienced == 0 && 'active'}
							color="basic"
							icon={null}
							iconSide="left"
							onClick={handleExNotClick}
						>
							아니오
						</Button>
					</div>
				</div>
				{isExperienced !== 0 && (
					<div>
						<div>
							<Typography block token="subtitle-1">
								2-1. 사용 경험이 있는 서비스를 선택해주세요.
								(복수 선택 가능)
							</Typography>
							<div style={{ display: 'flex' }}>
								<Input
									type="checkbox"
									onChange={(current) => {
										setEdu(!current);
										localStorage.setItem(
											'second',
											JSON.stringify({ edu: !current }),
										);
									}}
								/>
								<Label>구름EDU</Label>
								<Input
									type="checkbox"
									onChange={(current) => {
										setLevel(!current);
										localStorage.setItem(
											'second',
											JSON.stringify({ level: !current }),
										);
									}}
								/>
								<Label>구름LEVEL</Label>
								<Input
									type="checkbox"
									onChange={(current) => {
										setDevth(!current);
										localStorage.setItem(
											'second',
											JSON.stringify({ devth: !current }),
										);
									}}
								/>
								<Label>구름DEVTH</Label>
							</div>
							<div style={{ display: 'flex' }}>
								<Input
									type="checkbox"
									onChange={(current) => {
										setIde(!current);
										localStorage.setItem(
											'second',
											JSON.stringify({ ide: !current }),
										);
									}}
								/>
								<Label>구름IDE</Label>
								<Input
									type="checkbox"
									onChange={(current) => {
										setExp(!current);
										localStorage.setItem(
											'second',
											JSON.stringify({ exp: !current }),
										);
									}}
								/>
								<Label>구름EXP</Label>
							</div>
						</div>
						<Typography block token="subtitle-1">
							2-2. 해당 서비스를 사용하게 된 이유는 무엇인가요?
						</Typography>
						<Form.Group>
							<TextArea
								block
								onChange={() => {
									handleChangeText(e);
								}}
							></TextArea>
						</Form.Group>
					</div>
				)}
			</Form.Group>
		</QuestionDiv>
	);
};

export default TwoStep;
