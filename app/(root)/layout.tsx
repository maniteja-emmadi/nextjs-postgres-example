import Header from "@/components/shared/Header";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="root">
			<Header />
			<div className="root-container">{children}</div>

			<Toaster />
		</div>
	);
};
export default Layout;
