import React, { useState } from 'react';
import ReactCreditCards, { Focused } from 'react-credit-cards';
import Payment from 'payment';
import { useFormik } from 'formik';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../components/bootstrap/Modal';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import ReactCreditCardsContainer from '../../components/extras/ReactCreditCardsContainer';
import useDarkMode from '../../hooks/useDarkMode';
import Icon from '../../components/icon/Icon';
import DonutBasic from '../../components/charts/DonutBasic';

const validate = (values: {
	name: string;
	number: string;
	cvc: number | string;
	expiry: string;
}) => {
	const errors: {
		name: string;
		number: string;
		cvc: number | string;
		expiry: string;
	} = {
		name: '',
		number: '',
		cvc: '',
		expiry: '',
	};
	if (!values.name) {
		errors.name = 'Required';
	} else if (values.name.length < 7) {
		errors.name = 'Must be 5 characters or more';
	} else if (!values.name.includes(' ')) {
		errors.name = 'Must contain first and last name';
	}

	if (!values.number || values.number.includes('_')) {
		errors.number = 'Required';
	} else if (Payment.fns.validateCardNumber(values.number)) {
		errors.number = 'Invalid Card Number';
	}

	if (!values.cvc) {
		errors.cvc = 'Required';
	} else if (values.cvc.toString().length !== 3) {
		errors.cvc = 'Must be 3 characters';
	}

	if (!values.expiry || values.expiry.includes('_')) {
		errors.expiry = 'Required';
	} else if (parseInt(values.expiry.slice(-2), 10) <= 20) {
		errors.expiry = 'Must be valid date';
	}

	return errors;
};

const CommonMyStat = () => {
	const { darkModeStatus } = useDarkMode();
	const [focused, setFocused] = useState<Focused>('number');
	const handleInputFocus = ({ target }: { target: { name: Focused } }) => setFocused(target.name);

	return (
		<>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='Equalizer' iconColor='info'>
						<CardTitle>My Stats</CardTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<DonutBasic />
				</CardBody>
			</Card>
		</>
	);
};

export default CommonMyStat;
