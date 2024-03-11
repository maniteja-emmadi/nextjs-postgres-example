import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";

const Header = () => {
	return (
		<header className="header justify-between">
			<Link href={"/"} className="flex items-center gap-2 md:py-2">
				Home
			</Link>
			<nav className="flex gap-2">
				<>
					<Sheet>
						<SheetTrigger>
							<Image
								src={"/assets/icons/menu.svg"}
								alt="menu"
								width={32}
								height={32}
								className="cursor-pointer"
							/>
						</SheetTrigger>
						<SheetContent className="sheet-content sm:w-64">
							<>
								<ul className="header-nav_elements">
									<li className={` p-18 flex whitespace-nowrap text-dark-700`}>
										<Link
											href={"/user/add"}
											className="sidebar-link cursor-pointer"
										>
											Add User
										</Link>
									</li>
									<li className={` p-18 flex whitespace-nowrap text-dark-700`}>
										<Link
											href={"/book/add"}
											className="sidebar-link cursor-pointer"
										>
											Add Book
										</Link>
									</li>
								</ul>
							</>
						</SheetContent>
					</Sheet>
				</>
			</nav>
		</header>
	);
};
export default Header;
