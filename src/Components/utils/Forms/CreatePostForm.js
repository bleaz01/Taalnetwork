import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../lib/context';
import { handleUploade } from '../function';
import base64 from 'base-64';
import axios from 'axios';
import { uploadPicture } from '../../../lib/redux/actions/user';

const CreatePostForm = () => {
	const [ file, setFile ] = useState(null);
	const { register, handleSubmit } = useForm();
	const { user } = useContext(UserContext);

	const [ fileInputState, setFileInputState ] = useState('');
	const [ focusTags, setFocusTags ] = useState([]);

	const [ previewSource, setPreviewSource ] = useState('');
	const [ selectedFile, setSelectedFile ] = useState();
	const [ successMsg, setSuccessMsg ] = useState('');
	const [ errMsg, setErrMsg ] = useState('');
	const [ video, setVideo ] = useState('');

	const handleChange = (e) => {
		setPreviewSource(URL.createObjectURL(e.target.files[0]));
	};

	const handleVideo = async (link, msg) => {
		let findLink = link.split(' ');
		for (let i = 0; i < findLink.length; i++) {
			if (findLink[i].includes('https://www.youtube') || findLink[i].includes('https://yout')) {
				let embed = findLink[i].replace('watch?v=', 'embed/');
				// setVideo(embed.split("&")[0]);
				// findLink.splice(i, 1);

				const post = {
					message: msg,
					video: embed.split('&')[0],
					author: user._id,
					posterImg: user.picture,
					tag: focusTags
				};
				console.log(post);
				try {
					await axios.post(`${process.env.REACT_APP_API_URL}api/post`, { post });
					window.location.reload();

					// setFileInputState('');
					// setPreviewSource('');
					// setSuccessMsg('Image uploaded successfully');
				} catch (err) {
					console.error(err);
					setErrMsg('Something went wrong!');
				}
			}
		}
	};
	const uploadImage = (base64EncodedImage, msg) => {
		const post = {
			message: msg,
			file: base64EncodedImage,
			author: user._id,
			posterImg: user.picture,
			tag: focusTags
		};
		console.log(post, 'post');
		axios
			.post(`${process.env.REACT_APP_API_URL}api/post`, {
				post
			})
			.then((res) => {
				setSuccessMsg('Image uploaded successfully');
				window.location.reload();
			})
			.catch((err) => {
				setErrMsg('Something went wrong!');
			});
	};

	const handleFocusTags = (item) => {
    console.log(focusTags,'tag')

		if (!focusTags.includes(item)) setFocusTags([ ...focusTags, item ]);
		else setFocusTags(focusTags.filter((x) => x !== item));
	};

	const onSubmit = (data) => {
		console.log('send');
		if (data.video) {
			handleVideo(data.video, data.message);
			return console.log('vidéo poster');
		}
		const post = {
			message: data.message,
			author: user._id,
			posterImg: user.picture,
			tag: focusTags
		};
		console.log(data, 'yoo');

		if (previewSource[0]) {
			uploadImage(previewSource, data.message);
		} else {
			try {
				axios.post(`${process.env.REACT_APP_API_URL}api/post`, {
					post
				});
				setFileInputState('');
				setPreviewSource('');
			} catch (err) {
				console.error(err);
				setErrMsg('Something went wrong!');
			}
		}
		window.location.reload();
	};
	return (
		<div className="flex justify-center">
			<section class="w-full m-10 h-1/2 p-6 bg-baseColor rounded-md shadow-md dark:bg-gray-800 mt-10">
				<h1 class="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
						<div>
							<textarea
								{...register('message')}
								id="textarea"
								type="textarea"
								class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
								placeholder="Qu'elle est ton poin vue"
							/>
							<input
								{...register('video')}
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
								placeholder="Lien vidéo"
							/>
						</div>

						<div className="px-5 py-3">
							<h3 className="font-bold text-xs">Tags</h3>
							<div className="my-3 flex flex-wrap -m-1">
								<span
									onClick={() => handleFocusTags('sport')}
									className={
										!focusTags.includes('sport') ? (
											'm-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										) : (
											'm-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										)
									}
								>
									#Sport
								</span>
								<span
									onClick={() => handleFocusTags('musique')}
                  className={
                    !focusTags.includes('musique')
                    ? "m-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer"
                    : "m-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer"
                  }								>
									#Musique
								</span>
								<span
									onClick={() => handleFocusTags('serie')}
									className={
										!focusTags.includes('serie') ? (
											'm-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										) : (
											'm-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										)
									}
								>
									#Serie
								</span>
								<span
									onClick={() => handleFocusTags('jeux')}
									className={
										!focusTags.includes('jeux') ? (
											'm-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										) : (
											'm-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										)
									}
								>
									#Jeux
								</span>
								<span
									onClick={() => handleFocusTags('cuisine')}
									className={
										!focusTags.includes('cuisine') ? (
											'm-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										) : (
											'm-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										)
									}
								>
									#Cuisine
								</span>
								<span
									onClick={() => handleFocusTags('cinéma')}
									className={
										!focusTags.includes('cinéma') ? (
											'm-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										) : (
											'm-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										)
									}
								>
									#Cinéma
								</span>
								<span
									onClick={() => handleFocusTags('mode')}
									className={
										!focusTags.includes('mode') ? (
											'm-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										) : (
											'm-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										)
									}
								>
									#Mode
								</span>
								<span
									onClick={() => handleFocusTags('art')}
									className={
										!focusTags.includes('art') ? (
											'm-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										) : (
											'm-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										)
									}
								>
									#Art
								</span>
								<span
									onClick={() => handleFocusTags('livestyle')}
									className={
										!focusTags.includes('livestyle') ? (
											'm-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										) : (
											'm-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										)
									}
								>
									#LiveStyle
								</span>
								<span
									onClick={() => handleFocusTags('politique')}
									className={
										!focusTags.includes('politique') ? (
											'm-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										) : (
											'm-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										)
									}
								>
									#Politique
								</span>
								<span
									onClick={() => handleFocusTags('voyage')}
									className={
										!focusTags.includes('voyage') ? (
											'm-1 bg-greyColor  rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										) : (
											'm-1 bg-greenColor text-whiteColor rounded-full px-2 font-bold text-sm leading-loose cursor-pointer'
										)
									}
								>
									#Voyage
								</span>
							</div>
						</div>

						<div>
							<label class="block text-sm font-medium text-whiteColor" />
							<div class="space-y-1 text-center">
								<div class="flex items-center justify-center w-full">
									<label class="flex flex-col rounded-lg w-full h-full p-10 group text-center">
										<div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
											<img
												class="has-mask h-full w-full object-center"
												src={
													previewSource ? (
														previewSource
													) : (
														'https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg'
													)
												}
												alt="freepik image"
											/>
										</div>
										<input name="file" type="file" class="hidden" onChange={handleChange} />
									</label>
								</div>
							</div>
						</div>
					</div>

					<div class="flex w-full justify-end mt-6">
						<button
							type="submit"
							class="border border-whiteColor text-whiteColor rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
						>
							Send
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default CreatePostForm;
