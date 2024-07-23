import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ text, onDelete, id }) => {
	return (
		<View style={styles.listText}>
			<Pressable
				android_ripple={{ color: "#210644" }}
				onPress={() => onDelete(id)}
				style={({ pressed }) => pressed && styles.pressed}>
				<Text style={styles.listTextInput}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	listText: {
		padding: 10,
		borderColor: "#cccccc",
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 5,
		backgroundColor: "#2f2f2f",
	},
	pressed: {
		opacity: 0.5,
	},
	listTextInput: {
		color: "#fff",
	},
});
