/**
 * Test Page
 */

// Dependencies
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Instructions from '../components/test/Instructions';
import TestQuestions from '../components/test/Test';
import ScrollToTop from '../components/reusable/ScrollToTop';
import { motion } from 'framer-motion';

function Test() {
	const [testInProgress, setTestInProgress] = useState(false);

	const handleSkipTest = () => {
		setTestInProgress(true);
	};

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={'test-page'}
		>
			<nav className='fixed top-0 left-0 py-4 px-8 z-50 bg-primary w-full text-textPrimary'>
				<div className='max-w-7xl mx-auto flex items-center justify-between w-full md:gap-8'>
					<Link
						to={'/'}
						className='flex w-fit items-center gap-1 hover:scale-[0.98] active:scale-[1.02] transition-all'
					>
						<div className='w-16 h-16'>
							<img
								src='/logo.png'
								alt='🧠'
								className='w-full h-auto object-contain'
								loading='lazy'
							/>
						</div>
						<p className='font-heading text-3xl font-bold'>
							Mind Check
						</p>
					</Link>
					{!testInProgress ? (
						<button
							onClick={handleSkipTest}
							className='underline underline-offset-2 transition-all hover:text-textSecondary'
						>
							Skip to test
						</button>
					) : null}
				</div>
			</nav>
			<div className='w-full min-h-screen mt-12'>
				{testInProgress ? (
					<>
						<TestQuestions />
						<ScrollToTop />
					</>
				) : (
					<Instructions setTestInProgress={setTestInProgress} />
				)}
			</div>
			<ScrollToTop />
		</motion.main>
	);
}

export default Test;
