import { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import HomeHeader from "./HomeHeader";

const Gallery = () => {
	const [selectedImg, setSelectedImg] = useState(null);

	return (
		<div className="mx-auto max-w-[960px]">
			<HomeHeader />
			<div>
				<ImageGrid selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
				{ selectedImg &&  <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
			</div>
		</div>
	)
}

export default Gallery;