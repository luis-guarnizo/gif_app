import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export default function GifExpertApp() {
	const [categories, setCategories] = useState([
		"One Punch",
	]);

    const onAddCategory = (newCategory) => {
        // setCategories([...categories, "HunterXHunter"]);
		console.log(newCategory);
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
        // setCategories((cats) => [...cats, "HunterXHunter"]);
    }
	console.log(categories);
	return (
		<>
			<h1>Gif Expert App</h1>
			<AddCategory 
				onNewCategory = {(event) => onAddCategory(event)}
			/>

			{
				categories.map((category) => (
					<GifGrid 
						key={category} 
						category={ category } />
				))
			}
		</>
	);
}
// wzXbdNo3sco4b4EhYEhK83OxLZeod1gi
