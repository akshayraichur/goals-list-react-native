import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

const GoalItemsList = ({ courseGoals, onGoalDelete }) => {
	return (
		<View style={styles.goalsContainer}>
			<FlatList
				alwaysBounceVertical={false}
				data={courseGoals}
				renderItem={(item) => (
					<GoalItem text={item.item.text} onDelete={onGoalDelete} id={item.item.key} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	goalsContainer: {
		marginTop: 10,
		flex: 4,
	},
});

export default GoalItemsList;
