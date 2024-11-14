'use client';

/* * */

import { Image } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

import styles from './page.module.css';

/* * */

const DOC_PRFIX = 'portfolio-mv';

const PAGE_COUNT = 77;

/* * */

export default function Page() {
	//

	//
	// A. Setup variables

	const [currentLeftPage, setCurrentLeftPage] = useState<number>(-1);
	const [isPortraitMode, setIsPortraitMode] = useState(true);

	//
	// B. Transform data

	useEffect(() => {
		const handleResize = () => {
			setIsPortraitMode(window.innerWidth < window.innerHeight);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	});

	useEffect(() => {
		if (isPortraitMode) setCurrentLeftPage(prev => prev + 1);
		else setCurrentLeftPage(prev => prev - 1);
	}, [isPortraitMode]);

	//
	// C. Handle actions

	function handleReducePage() {
		//
		if (isPortraitMode) {
			//
			if (currentLeftPage <= 0) {
				setCurrentLeftPage(0);
				return;
			}
			setCurrentLeftPage(prev => prev - 1);
			return;
			//
		}
		else {
			if (currentLeftPage <= 0) {
				setCurrentLeftPage(-1);
				return;
			}
			setCurrentLeftPage(prev => prev - 2);
			return;
		}
		//
	}

	function handleIncreasePage() {
		//
		if (isPortraitMode) {
			//
			if (currentLeftPage >= PAGE_COUNT) {
				setCurrentLeftPage(PAGE_COUNT);
				return;
			}
			setCurrentLeftPage(prev => prev + 1);
			return;
			//
		}
		else {
			if (currentLeftPage >= PAGE_COUNT) {
				setCurrentLeftPage(PAGE_COUNT);
				return;
			}
			setCurrentLeftPage(prev => prev + 2);
			return;
		}
		//
	}

	useEffect(() => {
		const handleKeyDown = (event: { key: string }) => {
			if (event.key === 'ArrowLeft') handleReducePage();
			else if (event.key === 'ArrowRight') handleIncreasePage();
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	});

	//
	// D. Render components

	return (
		<div className={`${styles.container} ${isPortraitMode && styles.isPortraitMode}`}>

			<div className={`${styles.arrowWrapper} ${styles.left}`} onClick={handleReducePage}>
				{currentLeftPage >= 0 && <IconChevronLeft size={30} />}
			</div>

			{currentLeftPage >= 0 ? <Image className={styles.page} src={`/${DOC_PRFIX}/${DOC_PRFIX}-${currentLeftPage}.png`} /> : <div />}
			{!isPortraitMode && (
				currentLeftPage < PAGE_COUNT ? <Image className={styles.page} src={`/${DOC_PRFIX}/${DOC_PRFIX}-${currentLeftPage + 1}.png`} /> : <div />
			)}

			<div className={`${styles.arrowWrapper} ${styles.right}`} onClick={handleIncreasePage}>
				<IconChevronRight size={30} />
			</div>

		</div>
	);

	//
}
