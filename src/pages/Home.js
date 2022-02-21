import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){
	const [newSkill, setNewskill] = useState('');
	const [mySkills, setMySkills] = useState([]);
	const [gretting, setGretting] = useState('');

	function handleAddSkill() {
		setMySkills(oldState => [...oldState, newSkill]);
	}

	useEffect(() => {
		const currentHour = new Date().getHours();

		if (
			currentHour >= 5 && currentHour < 12) {
				setGretting('Good morning');
			}
		else if (
			currentHour >= 12 && currentHour < 18) {
				setGretting('Good afternoon');
			}
		else if (
			 currentHour >= 18 && currentHour < 24) {
				setGretting('Good night');
			}
		else {
			currentHour >= 24 && currentHour < 5} {
			 setGretting('Good dawn');
		 }
	}, [mySkills])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Welcome, @brraafa
			</Text>

			<Text style={styles.grettings}>
				{gretting}
			</Text>

			<TextInput 
				style={styles.input}
				placeholder="New skill"
				placeholderTextColor="#555555"
				onChange={setNewskill}
			/>

			<Button onPress={handleAddSkill}/>

			<Text style={[styles.title, { marginVertical: 50 }]}>
				My Skills
			</Text>

			<FlatList 
				data={mySkills}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<SkillCard skill={item}/>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121015',
		paddingHorizontal: 30,
		paddingVertical: 70
	},

	title: {
		color: '#FFFFFF',
		fontSize: 20,
		fontWeight: 'bold'
	},

	input: {
		backgroundColor: '#1F1E25',
		color: '#FFFFFF',
		fontSize: 18,
		padding: Platform.OS === 'ios' ? 15 : 10,
		marginTop: 30,
		borderRadius: 7
	},

	grettings: {
		color: '#FFFFFF',
		marginTop: 7
	}
});