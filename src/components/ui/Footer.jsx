import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="mt-20 py-3 rounded-[100px] mb-10 bg-gradient-to-r from-gray-900 to-gray-800 text-center relative overflow-hidden">
			<div className="max-w-6xl mx-auto px-4">
				<div className="relative z-10">
					{/* Copyright Text */}
					<div className="flex items-center justify-center gap-2">
						<p className="text-gray-400 font-medium">© 2024 Salil Lakra</p>
						<div>
							<FaHeart className="text-red-500 animate-bounce" />
						</div>
						<p className="text-gray-400">Built with love</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
