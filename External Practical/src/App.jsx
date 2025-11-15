import React, { useState } from "react";
import "./App.css";

export default function App() {
	const [form, setForm] = useState({ title: "", body: "" });
	const [submitted, setSubmitted] = useState(null);

	const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

	const handleSubmit = (e) => {
		e.preventDefault();
		const post = { ...form, title: form.title.trim(), body: form.body.trim(), id: Date.now() };
		setSubmitted(post);
		setForm({ title: "", body: "" });
		console.log("Submitted:", post);
	};

	return (
		<div className="app-container">
			<h1>Simple Post Form</h1>

			<form className="card" onSubmit={handleSubmit}>
				<div className="field">
					<label htmlFor="title">Title</label>
					<input
						id="title"
						name="title"
						value={form.title}
						onChange={handleChange}
						required
						placeholder="Enter title"
					/>
				</div>

				<div className="field">
					<label htmlFor="body">Body</label>
					<textarea
						id="body"
						name="body"
						value={form.body}
						onChange={handleChange}
						required
						placeholder="Enter body"
					/>
				</div>

				<div className="actions">
					<button className="btn" type="submit">Submit</button>
				</div>
			</form>

			{submitted && (
				<div className="post-preview">
					<div className="card">
						<h2>{submitted.title}</h2>
						<p>{submitted.body}</p>
					</div>
				</div>
			)}
		</div>
	);
}

