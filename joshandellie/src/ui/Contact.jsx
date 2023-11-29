import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_ns8qgbt",
				"template_38zmczo",

				{
					from_name: form.name,
					to_name: "Josh",
					from_email: form.email,
					to_email: "Josh.T.Garvey@gmail.com",
					message: form.message,
				},
				"_7JwO9aCUs9RLdDia"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert("Ahh, something went wrong. Please try again.");
				}
			);
	};

	return (
		<div className=" ">
			<form ref={formRef} onSubmit={handleSubmit} className="bg-neutral   flex flex-col gap-2 pb-2 px-2 py-2 border-black border-2 ">
				<label className="flex flex-col ">
					<span className="text-white  text-xl mb-0 bg-gray-800   px-2 py-2">Your Name:</span>
					<input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What do you like to be called?" className="text-xl mb-2 px-2 border-black border py-2" />
				</label>
				<label className="flex flex-col">
					<span className="text-white text-xl mb-0 h-fit bg-gray-800 px-2 py-2 ">Your email</span>
					<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email?" className="text-xl px-2 py-2 mb-2 border-black border" />
				</label>
				<label className="flex flex-col">
					<span className="text-white text-xl mb-0 h-fit bg-gray-800 px-2 py-2">Your Message</span>
					<textarea rows={5} name="message" value={form.message} onChange={handleChange} placeholder="Good Work!" className="text-xl px-2 py-2 border-black border" />
				</label>
				<div className="flex justify-end px-4">
					<button type="submit" className="bg-white   rounded-xl outline-none w-fit text-green-700 font-bold shadow-xl shadow-primary text-xl px-4 py-4 h-fit  ">
						{loading ? "Sending..." : "Send"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
