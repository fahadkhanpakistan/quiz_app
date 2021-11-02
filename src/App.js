import { useLoading } from './components/QuestionsContext';
import { LoadingOutlined } from '@ant-design/icons';
import Question from './components/question/Question';

function App() {
	let loadingStatus = useLoading();
	// let { score, setScore } = useScore();

	return (
		<div className='app'>
			{loadingStatus ? (
				<div className='loading'>
					<LoadingOutlined className='loading-icon' />
				</div>
			) : (
				<div className='quiz-card'>
					<Question />
				</div>
			)}
		</div>
	);
}

export default App;
