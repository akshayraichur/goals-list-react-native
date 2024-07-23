import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import GoalItemsList from "./components/GoalItemsList";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
	const [goalEntered, setGoalEntered] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);

	const goalInputHandler = (enteredText) => {
		setGoalEntered(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ text: goalEntered, key: Math.random() * 10000 },
		]);
		setGoalEntered("");
		setModalOpen(false);
	};

	const onGoalDelete = (id) => {
		console.log(id);
		setCourseGoals((p) => p.filter((item) => id !== item.key));
	};

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<Button title='Add New Goal' color='#5e0acc' onPress={() => setModalOpen((p) => !p)} />
				<GoalInput
					goalInputHandler={goalInputHandler}
					addGoalHandler={addGoalHandler}
					goalEntered={goalEntered}
					modalOpen={modalOpen}
					onCancel={() => setModalOpen(false)}
				/>
				<GoalItemsList courseGoals={courseGoals} onGoalDelete={onGoalDelete} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 60,
		flex: 1,
	},
});
