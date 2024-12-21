"use client";

import React from "react";

import { CodeBlock } from "./code-block";

export default function InfoCode() {
    const code = `from typing import List

class Developer:
    def __init__(self, name: str, hobbies: List[str], passions: List[str],
     relationship_status: str,why_code: str, dream_scenarios: List[str]) -> None:
        self.name: str = name
        self.hobbies: List[str] = hobbies
        self.passions: List[str] = passions
        self.relationship_status: str = relationship_status
        self.why_code: str = why_code
        self.dream_scenarios: List[str] = dream_scenarios

    def __str__(self) -> str:
        return (f"{self.name} is a passionate developer who loves {', '.join(self.passions)}. "
                f"Their hobbies include {', '.join(self.hobbies)}. \n"
                f"They code because: '{self.why_code}'. \n"
                f"Dream scenarios include: {', '.join(self.dream_scenarios)}. "
                f"Relationship status? {self.relationship_status}.")

salil: Developer = Developer(
    name="Salil Lakra",
    hobbies=[
        "Singing 🎤",
        "Dancing 💃",
        "Acting 🎭",
        "Cooking 🍳",
        "Coding 💻",
        "Hanging out with friends 👫"
    ],
    passions=[
        "Full-stack development",
        "Creating projects I'm proud of"
    ],
    relationship_status="Single 💔 (but vibing)",
    why_code="I'm eager to see my projects come to life and proudly say, 'I built this!'",
    dream_scenarios=[
        "Coding by a peaceful lake or river 🌊",
        "Cooking food near the water 🍲"
    ]
)

print(salil)
`;

    const output = `Salil Lakra is a passionate developer who loves Full-stack development, Creating projects I'm proud of. Their hobbies include Singing 🎤, Dancing 💃, Acting 🎭, Cooking 🍳, Coding 💻, Hanging out with friends 👫. 
They code because: 'I'm eager to see my projects come to life and proudly say, 'I built this!''. 
Dream scenarios include: Coding by a peaceful lake or river 🌊, Cooking food near the water 🍲. Relationship status? Single 💔 (but vibing).


** Process exited - Return Code: 0 **
Press Enter to exit terminal`;
    return (
        <div className="max-w-4xl my-10 px-3 sm:mx-auto w-full">
            <CodeBlock language="python" filename="salillakra.py" code={code} />

            {/* output */}
            <h2 className="text-xl mt-5 font-bold my-4">Output:</h2>
            <CodeBlock language={"text"} filename={" >>> python3 salillakra.py"} code={output} />
        </div>
    );
}
