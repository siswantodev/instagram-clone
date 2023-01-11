import {
	BookmarkIcon,
	ChatBubbleOvalLeftIcon,
	FaceSmileIcon,
	HeartIcon,
} from '@heroicons/react/24/outline';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';

export default function Post({ id, username, userImg, img, caption }) {
	const { data: session } = useSession();

	return (
		<div className='bg-white my-7 border rounded-md'>
			{/* Post Header */}
			<div className='flex items-center p-5'>
				<img
					className='h-12 rounded-full object-cover border p-1 mr-3'
					src={userImg}
					alt={username}
				/>
				<p className='font-bold flex-1'>{username}</p>
				<EllipsisHorizontalIcon className='h-5' />
			</div>

			{/* Post Image */}
			<img className='object-cover w-full' src={img} alt={username} />

			{/* Post Buttons */}
			{session && (
				<div className='flex justify-between px-4 pt-4'>
					<div className='flex space-x-4'>
						<HeartIcon className='btn' />
						<ChatBubbleOvalLeftIcon className='btn' />
					</div>

					<BookmarkIcon className='btn' />
				</div>
			)}

			{/* Post Comments */}
			<p className='p-5 truncate'>
				<span className='font-bold mr-2'>{username}</span>
				{caption}
			</p>

			{/* Post Input Box */}
			{session && (
				<form action='' className='flex items-center p-4'>
					<FaceSmileIcon className='h-7' />
					<input
						className='border-none flex-1 focus:ring-0'
						type='text'
						placeholder='Enter your comment...'
					/>
					<button className='text-blue-400 font-bold'>Post</button>
				</form>
			)}
		</div>
	);
}
