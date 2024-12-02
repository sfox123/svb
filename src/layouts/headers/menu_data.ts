interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];
}
// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "#",
		has_dropdown: false,
		sub_menus: [
			{ link: "/", title: "Home One" },
			{ link: "/home-2", title: "Home Two" },
		],
	}, 
	{
		id: 2,
		title: "Why Us",
		link: "#why",
		has_dropdown: false,
		sub_menus: [
			{ link: "/courses", title: "Course Style1" },
			{ link: "/courses-2", title: "Course Style2" },
			{ link: "/course-details", title: "Course Details" },
		],
	},

	{
		id: 3,
		title: "Courses",
		link: "#courses",
		has_dropdown: false,
		sub_menus: [
			{ link: "/grid-blog", title: "Grid Blog" },
			{ link: "/standard-blog", title: "Standard Blog" },
			{ link: "/blog-details", title: "Blog Details" },
			{ link: "/cart", title: "Cart" },
			{ link: "/checkout", title: "Checkout" },
			{ link: "/login", title: "Login" },
			{ link: "/register", title: "Register" },
			{ link: "/about", title: "About" },
			{ link: "/instructors", title: "Instructors" },
			{ link: "/erorr", title: "404 || Error" },
		],
	},
	{
		id: 4,
		title: "Reviews",
		link: "#reviews",
		has_dropdown: false,
		sub_menus: [
			{ link: "/grid-blog", title: "Grid Blog" },
			{ link: "/standard-blog", title: "Standard Blog" },
			{ link: "/blog-details", title: "Blog Details" },
		],
	},
];
export default menu_data;
