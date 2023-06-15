import { useState } from "react";

const UploadForm = () => {
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [file, setFile] = useState(null)

	const [errors, setErrors] = useState({
		title: null,
		category: null,
		file: null,
	});

	const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];

	const changeTitle = (e) => {
		const changedTitle = e.target.value;
		if (changeTitle && changedTitle.length > 4) {
			setTitle(changedTitle);
			setErrors( (prevErrors) => {
				return {
					...prevErrors,
					title: null
				}
			});
		} else {
			setTitle('');
			setErrors( (prevErrors) => {
				return {
					...prevErrors,
					title: 'Titlul este necesar și trebuie să fie cel puțin 5 caractere'
				}
			});
			console.log(errors.title);
		}
	}

	const changeCategory = (e) => {
		const changedCategory = e.target.value;
		if (changedCategory) {
			setCategory(changedCategory);
			setErrors( (prevErrors) => {
				return {
					...prevErrors,
					category: null
				}
			});
		} else {
			setCategory('');
			setErrors( (prevErrors) => {
				return {
					...prevErrors,
					category: 'Seletează o categorie'
				}
			});
		}
	}

	const changeFile = (e) => {
		const fileSelected = e.target.files[0];
		if (fileSelected && allowedFileTypes.includes(fileSelected.type)) {
			setFile(fileSelected);
			setErrors( (prevErrors) => {
				return {
					...prevErrors,
					file: null
				}
			});
		} else {
			setFile(null);
			setErrors( (prevErrors) => {
				return {
					...prevErrors,
					file: 'Selectează un fișier care să fie de tipul jpg, png sau jpeg'
				}
			});
		}
	}

	const submitUploadForm = () => {
		console.log('Title: ' + title);
		console.log('Category: ' + category);
		console.log('File: ' + file);
	}

	return (
		<form className="p-2 mt-6 mb- mx-auto">
			<div className="relative z-0 w-full mb-6 group">
				<input onChange={changeTitle} type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
				<label htmlFor="title" className="peer-focus:font-medium absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Titlul Imaginii</label>
				{ errors.title && 
					<span className="text-sm text-red-600">{ errors.title }</span>
				}
			</div>
			<div className="relative z-0 w-full mb-6 group">
				
				<select onChange={changeCategory} className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
					<option defaultValue="city">Oraș</option>
					<option value="people">Persoane</option>
					<option value="animals">Animale</option>
					<option value="views">Priveliști</option>
					<option value="nature">Natură</option>
				</select>
				<label htmlFor="image" className="peer-focus:font-medium absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Selectează categoria</label>
				{ errors.category && 
					<span className="text-sm text-red-600">{ errors.category }</span>
				}
			</div>
			<div className="relative z-0 w-full mb-6 group">
				<input onChange={changeFile} type="file"id="image" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
				<label htmlFor="image" className="peer-focus:font-medium absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Încarcă imaginea</label>
				{ errors.file && 
					<span className="text-sm text-red-600">{ errors.file }</span>
				}
			</div>
			<div className="relative z-0 w-full mb-6 group">
				{ errors.title || errors.category || errors.file && 
					<span className="text-sm text-red-600">Completează toate campurile corespunzător</span>
				}
			</div>
			<div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button onClick={submitUploadForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Trimite</button>
                </div>
            </div>
		</form>
	)
}

export default UploadForm;