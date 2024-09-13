import { useState } from "react";
import styles from "./taskInput.module.scss";
import { Todo } from "../../@types/todo.type";

interface taskInputProps {
	addTodo: (name: string) => void;
	currentTodo: Todo | null;
	editTodo: (name: string) => void;
	finishEditTodo: () => void;
}

export default function TaskInput(props: taskInputProps) {
	const { addTodo, currentTodo, editTodo, finishEditTodo } = props;
	const [name, setName] = useState<string>("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (currentTodo) {
			finishEditTodo();
			if (name) setName("");
		} else {
			addTodo(name);
			setName("");
		}
	};

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		if (currentTodo) {
			editTodo(value);
		} else {
			setName(value);
		}
	};

	return (
		<div>
			<h1 className={styles.title}>To do List TypeScript</h1>
			<form action="" className={styles.form} onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="caption goes here"
					value={currentTodo ? currentTodo.name : name}
					onChange={onChangeInput}
				/>
				<button type="submit">{currentTodo ? "✔" : "+"}</button>
			</form>
		</div>
	);
}
