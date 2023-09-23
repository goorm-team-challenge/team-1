import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Button, Typography } from '@goorm-dev/gds-challenge';

const data = [
	{ id: 1, content: '1. 우리의 목표는 순위권 안에 들어가기' },
	{ id: 2, content: '2. 최소한의 구현 기능 구현하기' },
	{ id: 3, content: '3. 협력을 통한 협업 능력 기르기' },
	{ id: 4, content: '4. 협력을 통한 협업 능력 기르기' },
];

function ThirdStep() {
	const [isExpect, setIsExpect] = useState(false);
	const [isThirdId, setThirdId] = useState(-1);
	const handleIsExpect = (id) => {
		setThirdId(id);
	};
	return (
		<div>
			<ThirdWrapper>
				<ThirdContainer>
					<ThirdTitleBox>
						<ThirdTitle>
							<Typography weight={700} token="h4" color="#2B2D36">
								오프라인 팀 챌린지에 <br /> 가장 기대하는 점은
								무엇인가요?
							</Typography>
						</ThirdTitle>
						<ThirdSubTitle>
							<Typography
								weight={400}
								token="paragraph-sm"
								color="#858899"
								block={false}
							>
								더 좋은 챌린지가 될 수 있도록 데이터를
								수집하려고 해요.
							</Typography>
						</ThirdSubTitle>
					</ThirdTitleBox>
					<ThirdContentBox>
						{data.map((item) => (
							<Button
								key={item.id}
								iconSide="left"
								size="lg"
								color="basic"
								content="start"
								block
								active={item.id === isThirdId}
								onClick={() => handleIsExpect(item.id)}
							>
								{item.content}
							</Button>
						))}
					</ThirdContentBox>
				</ThirdContainer>
			</ThirdWrapper>
		</div>
	);
}

export default ThirdStep;

const ThirdWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	height: 358px;
	padding: 0px 40px 32px 40px; // 수정: padding 속성 수정
	gap: 16px;
	background-color: fffff;
`;
const ThirdContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 420px;
	height: 326px;
	gap: 32px;
`;

const ThirdTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 420px;
	height: 86px;
	gap: 8px;
`;

const ThirdTitle = styled.div`
	display: flex;
	flex-direction: column;
	width: 246px;
	height: 64px;
`;

const ThirdSubTitle = styled.div`
	display: flex;
	flex-direction: column;
	width: 270px;
	height: 18px;
`;

const ThirdContentBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 420px;
	height: 208px;
	gap: 16px;
`;
