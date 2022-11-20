import { LogicalElement } from './components/LogicalElement';
import { logicalElement1, logicalElement2, logicalElement3 } from './fixtures';

const App = () => {
	return (
		<div>
			<LogicalElement {...logicalElement1} />
			<LogicalElement {...logicalElement2} />
			<LogicalElement {...logicalElement3} />
		</div>
	);
};

export default App;
