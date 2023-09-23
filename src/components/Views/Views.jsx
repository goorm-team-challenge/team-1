import { useState } from 'react';
import cn from 'classnames';

import { Typography } from '@goorm-dev/gds-challenge';
import Card from '../Card/Card';

import styles from './Views.module.scss';

const Views = ({ users }) => {
	console.log(users);
	return (
		<Card>
			{users.map((user, index) => {
				return (
					<Typography key={user.first.email} token="paragraph-sm">
						참여자 {index + 1}. {user.first.name}
					</Typography>
				);
			})}
		</Card>
	);
};

export default Views;
