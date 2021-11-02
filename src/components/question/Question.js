import { Row, Col, Button, Typography, Divider, Modal } from 'antd';
import { CloseOutlined, UndoOutlined } from '@ant-design/icons';
import {
	useQuizQuestions,
	useIndex,
	useScore,
	useViewScore,
} from '../QuestionsContext';
import he from 'he';
import { useState } from 'react';

const Question = () => {
	let { quizQuestions, setQuizQuestions } = useQuizQuestions();
	let { currentIndex, setCurrentIndex } = useIndex();
	let { score, setScore } = useScore();
	let { viewScore, setViewScore } = useViewScore();
	const [showQuestions, setShowQuestionns] = useState(true);

	//make array of ans
	let ansOptions;
	let shuffled;

	if (quizQuestions) {
		ansOptions = [
			...quizQuestions[currentIndex].incorrect_answers,
			quizQuestions[currentIndex].correct_answer,
		];
	}

	const checkAnswer = ans => {
		if (
			(currentIndex > 0 || currentIndex === 0) &&
			currentIndex < quizQuestions.length - 1
		) {
			setCurrentIndex(currentIndex + 1);
			if (ans === quizQuestions[currentIndex].correct_answer) {
				setScore(score + 1);
			}
		}
		if (currentIndex === quizQuestions.length - 1) {
			setViewScore(true);
		}
	};

	function shuffle(array) {
		let length = array.length,
			randomIndex;
		// While there remain elements to shuffle...
		while (length !== 0) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * length);
			length--;
			// And swap it with the current element.
			[array[length], array[randomIndex]] = [
				array[randomIndex],
				array[length],
			];
		}
		return array;
	}
	if (quizQuestions) {
		shuffled = shuffle(ansOptions);
	}

	return (
		<Row className='question-container' justify='center'>
			{quizQuestions && (
				<Col
					lg={{ span: 24, offset: 0 }}
					md={{ span: 24, offset: 0 }}
					xs={{ span: 24, offset: 0 }}
					sm={{ span: 24, offset: 0 }}
					className='col'
				>
					<Typography.Title level={2} className='question-info'>
						Question {currentIndex + 1}/{quizQuestions.length}
					</Typography.Title>
					<Typography.Title level={3} className='question'>
						{he.decode(quizQuestions[currentIndex].question)}
					</Typography.Title>
					<Divider style={{ backgroundColor: '#ddd' }} />
					<div className='option-container'>
						{shuffled.map((ans, index) => (
							<Button
								key={index}
								type='primary'
								className='option'
								shape='round'
								block
								size='large'
								onClick={() => checkAnswer(ans)}
								ellipsis={true}
							>
								{he.decode(ans)}
							</Button>
						))}
					</div>
				</Col>
			)}
			<Modal
				visible={viewScore}
				closeIcon={<CloseOutlined style={{ color: '#ddd' }} />}
				footer={false}
				onCancel={() => {
					setViewScore(false);
					setShowQuestionns(false);
					window.location.reload(false);
				}}
				bodyStyle={{ backgroundColor: '#333' }}
				centered={true}
				width='600px'
			>
				<div className='modal-content'>
					<Typography.Title level={3}>
						You Have Scored{' '}
						<Typography.Text strong={true} className='score-rate'>
							{score}
						</Typography.Text>{' '}
						Out Of{' '}
						<Typography.Text strong={true} className='score-rate'>
							10
						</Typography.Text>{' '}
					</Typography.Title>
					<Button
						type='primary'
						icon={<UndoOutlined />}
						onClick={() => window.location.reload(false)}
					>
						Play Again
					</Button>
				</div>
			</Modal>
		</Row>
	);
};

export default Question;
