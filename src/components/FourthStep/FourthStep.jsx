import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Button, Typography, TextArea } from '@goorm-dev/gds-challenge';

function FourthStep() {
	const [text, setText] = useState('');
	const handleOnChange = (e) => {
		setText(e.target.value);
	};

	useEffect(() => {
		const savedText = localStorage.getItem('fourth'); // localStorage에서 값 읽기
		if (savedText) {
			setText(savedText);
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('fourth', JSON.stringify({ text })); // localStorage에 값 저장
	}, [text]);
	return (
		<div>
			<FourthWrapper>
				<FourthContainer>
					<FourthTitleBox>
						<FourthTitle>
							<Typography weight={700} token="h4" color="#2B2D36">
								구름톤 챌린지에 전하고 싶은 말을 적어주세요.
							</Typography>
						</FourthTitle>
						<FourthSubTitle>
							<Typography
								weight={400}
								token="paragraph-sm"
								color="#858899"
								block={false}
							>
								더 좋은 챌린지가 될 수 있도록 데이터를
								수집하려고 해요.
							</Typography>
						</FourthSubTitle>
					</FourthTitleBox>
					<FourthContentBox>
						<TextArea
							resize="vertical"
							rows={4}
							block
							placeholder="ex.
다음 번 챌린지에서는 더 어려운 문제가 출제되면 좋겠어요.
오프라인 과제가 다양했으면 좋겠어요.
"
							onChange={(e) => {
								handleOnChange(e);
							}}
							value={text}
						/>
					</FourthContentBox>
				</FourthContainer>
				<Button>dd</Button>
			</FourthWrapper>
		</div>
	);
}

export default FourthStep;

const FourthWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	height: 358px;
	padding: 0px 40px 32px 40px; // 수정: padding 속성 수정
	gap: 16px;
	background-color: fffff;
`;
const FourthContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 420px;
	height: 326px;
	gap: 32px;
`;

const FourthTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 420px;
	height: 86px;
	gap: 8px;
`;

const FourthTitle = styled.div`
	display: flex;
	flex-direction: column;
	width: 246px;
	height: 64px;
`;

const FourthSubTitle = styled.div`
	display: flex;
	flex-direction: column;
	width: 270px;
	height: 18px;
`;

const FourthContentBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 420px;
	height: 208px;
	gap: 16px;
`;
