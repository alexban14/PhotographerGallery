import useFirestore from "../hooks/useFirestore"
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const ImageGrid = ({ setSelectedImg }) => {
	const { imageDocs } = useFirestore({ collection: 'images' });

	return (
		<div className="img-grid">
			{ imageDocs && imageDocs.map((doc, index) => {
				return (
					<motion.div className="img-wrap" key={index}
						layout
						whileHover={{ opacity: 1 }}
						onClick={() => setSelectedImg( () => {
							return {
								title: doc.title,
								category: doc.category,
								imageUrl: doc.imageUrl,
								createdAt: doc.createdAt
							}
						})}
					>
						<motion.img src={doc.imageUrl} alt={doc.title}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
						/>
					</motion.div>
				)
			})}
		</div>
	)
}

export default ImageGrid