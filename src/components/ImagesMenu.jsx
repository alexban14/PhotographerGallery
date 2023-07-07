import useFirestore from "../hooks/useFirestore";

const ImagesMenu = () => {
	const { imageDocs } = useFirestore({ collection: 'images' });
	console.log(imageDocs);

	function getDateFromSec(seconds) {
		const date = new Date();
		date.setSeconds(seconds);
		return date.getDate();
	}

	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4">
				{ imageDocs && imageDocs.map((doc, index) => {
					return (
						<div className="p-2 md:w-1/3" key={index}>
							<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
								<img className="lg:h-48 md:h-36 w-full object-cover object-center" src={doc.imageUrl} alt="blog" />
								<div className="p-2">
									<h1 className="title-font text-lg font-medium text-gray-900 mb-1">{ doc.title }</h1>
									<h2 className="title-font text-lg font-medium text-gray-900 mb-1">Categorie: { doc.category }</h2>
									<h2 className="title-font text-lg font-medium text-gray-900 mb-1">Creat la: { getDateFromSec(doc.createdAt.seconds) }</h2>
								</div>
								<button className="inline-flex items-center bg-red-500 border-0 py-1 px-2 mx-2 text-white rounded">Șterge</button>
							</div>
						</div>
					)
				})}
				</div>
			</div>
		</section>
	);
}

export default ImagesMenu;