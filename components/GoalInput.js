import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native";
import React from "react";

const GoalInput = ({ goalInputHandler, addGoalHandler, goalEntered, modalOpen, onCancel }) => {
	return (
		<Modal visible={modalOpen} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image style={styles.image} source={require("../assets/images/goal.png")} />
				<TextInput
					onChangeText={goalInputHandler}
					placeholder='Your Course Goal'
					style={styles.textInput}
					value={goalEntered}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.btn}>
						<Button title='Add Goal' onPress={addGoalHandler} color={"#b180f0"} />
					</View>
					<View style={styles.btn}>
						<Button title='X' onPress={onCancel} color={"#f31282"} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: 10,
		alignItems: "center",
		padding: 6,
		backgroundColor: "#311b6b",
	},
	image: {
		width: 100,
		height: 100,
		padding: 5,
	},
	textInput: {
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		borderWidth: 1,
		paddingTop: 8,
		paddingBottom: 8,
		paddingHorizontal: 10,
		width: "90%",
		borderRadius: 8,
		color: "#120438",
	},

	text: {
		margin: 10,
		borderWidth: 1,
		borderColor: "red",
		padding: 10,
	},

	buttonContainer: {
		flexDirection: "row",
		gap: 10,
		marginTop: 10,
	},

	btn: {
		width: "30%",
	},
});
