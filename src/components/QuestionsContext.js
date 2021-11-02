import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Contexts

// for all questions
const QuizQuestions = React.createContext();
const useQuizQuestions = () => React.useContext(QuizQuestions);

//loading status
const Loading = React.createContext();
const useLoading = () => React.useContext(Loading);

//score status
const Score = React.createContext();
const useScore = () => React.useContext(Score);

//index status
const Index = React.createContext();
const useIndex = () => React.useContext(Index);

//View Score
const ViewScore = React.createContext();
const useViewScore = () => React.useContext(ViewScore);

//Component
const Questions = ({ children }) => {
	const [quizQuestions, setQuestions] = useState(null);
	const [loading, setLoading] = useState(true);
	const [score, setScore] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [viewScore, setViewScore] = useState(false);

	useEffect(() => {
		axios
			.get(
				'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'
			)
			.then(res => {
				setLoading(false);
				setQuestions(res.data.results);
			})
			.catch(err => console.log('SOME WENT WRONG!', err));
	}, []);

	return (
		<QuizQuestions.Provider value={{ quizQuestions, setQuestions }}>
			<Loading.Provider value={loading}>
				<Score.Provider value={{ score, setScore }}>
					<Index.Provider value={{ currentIndex, setCurrentIndex }}>
						<ViewScore.Provider value={{ viewScore, setViewScore }}>
							{children}
						</ViewScore.Provider>
					</Index.Provider>
				</Score.Provider>
			</Loading.Provider>
		</QuizQuestions.Provider>
	);
};

export default Questions;
export {
	useQuizQuestions,
	useLoading,
	useScore,
	useIndex,
	useViewScore,
};
