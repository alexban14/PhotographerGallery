import { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const HomeHeader = () => {
	const { imageDocs } = useFirestore({ collection: 'images', limitNum: 4, whereInfos: { key: 'orientation', value: 'landscape' } });
	const images = imageDocs.map((doc) => {
		console.log(doc)
		return (doc.imageUrl);
	});

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length -1 : currentIndex -1;
		setCurrentIndex(newIndex);
	}

	const nextSlide = () => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}

	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	
	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div className="mb-10">
			<div className="h-[568px] w-full m-auto relative group">
				{ imageDocs.length > 0 ?
					<>
						<div
							key={currentIndex}
							style={{ backgroundImage: `url(${images[currentIndex]})` }}
							className="w-full h-full bg-center bg-cover duration-500"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							{ !isHovered && 
								<div 
								className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center"
								>
									<h1 className="text-4xl text-white font-bold">
									Your Heading Text
									</h1>
								</div>
							}
						</div>
						<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
						<BsChevronCompactLeft onClick={prevSlide} />
						</div>
						<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
							<BsChevronCompactRight onClick={nextSlide} />
						</div>
					</>
					:
					<h1>Nu exista imagini de afisat</h1>
				}
			</div>
		</div>
	)
}

export default HomeHeader;