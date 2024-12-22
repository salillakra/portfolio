"use server";
const mailjet = require("node-mailjet").apiConnect(
	process.env.API_KEY,
	process.env.API_SECRET,
);

const recieversEmail = process.env.EMAIL || "salillakra@protonmail.com";

export const sendEmail = async ({
	senderName,
	subject,
	textPart,
	htmlPart,
}) => {
	const request = mailjet.post("send", { version: "v3.1" }).request({
		Messages: [
			{
				From: {
					Email: "salillakra.study@gmail.com",
					Name: senderName,
				},
				To: [
					{
						Email: recieversEmail,
						Name: "Salil Lakra",
					},
				],
				Subject: subject,
				TextPart: textPart,
				HTMLPart: htmlPart,
			},
		],
	});

	try {
		const result = await request;
		console.log(result.body);
	} catch (err) {
		console.log(err.statusCode);
	}
};
