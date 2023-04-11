import React from "react";
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	Button,
	TextInput,
	View,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

function PersonalRecords() {
	const testing = "Here is a list of personal records by exercises!! 👍";

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};
}

return (
	<SafeAreaView style={backgroundStyle}>
		<div>
			<p>{{ testing }}</p>
		</div>
	</SafeAreaView>
);

export default PersonalRecords;
