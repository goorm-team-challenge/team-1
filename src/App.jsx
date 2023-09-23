import { EmptyView, Header } from '@/components';
import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Views from './components/Views/Views';

function App() {
	const [key, setKey] = useState(0);
	const tempUsers = [
		{
			first: {
				name: '홍길동',
				tel: '010-1234-5678',
				email: 'hong@example.com',
				allAgree: true,
				privateInfo: false,
				marketing: false,
				ad: false,
				adEmail: false,
				adSMS: false,
			},
			second: {
				isSWMajor: false,
				isExperienced: true,
				exService: null,
				exReason: '개발 경험이 많아서',
			},
			third: {
				selected: '1',
			},
			fourth: {
				text: '임시 텍스트 데이터',
			},
		},
		// ... 다른 유저 데이터도 추가할 수 있습니다.
	];

	// users 배열을 문자열로 변환
	const usersString = JSON.stringify(tempUsers);

	// 로컬 스토리지에 저장
	// localStorage.setItem('users', usersString);

	const [users, setUsers] = useState(
		JSON.parse(localStorage.getItem('users')) || [],
	);

	return (
		<div className={styles.App} key={key}>
			<Header setKey={setKey} setUsers={setUsers} />
			<main className={styles.main}>
				{users.length === 0 && <EmptyView />}
				{users.length > 0 && <Views users={users} />}
			</main>
		</div>
	);
}

export default App;
