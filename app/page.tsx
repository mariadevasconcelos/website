'use client';

/* * */

import { Image } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useEffect, useMemo, useState } from 'react';

import styles from './page.module.css';

/* * */

const DOC_PRFIX = 'portfolio-mv';

const PAGE_COUNT = 77;

/* * */

export default function Page() {
	//

	//
	// A. Setup variables

	const [currentPage, setCurrentPage] = useState(0);

	//
	// B. Transform data

	const leftPageUrl = useMemo(() => {
		// Special case for first page
		if (currentPage <= 0) return null;
		// For all other pages
		return `/${DOC_PRFIX}/${DOC_PRFIX}-${currentPage}.png`;
		//
	}, [currentPage]);

	const rightPageUrl = useMemo(() => {
		// Special case for first page
		if (currentPage === 0) return `/${DOC_PRFIX}/${DOC_PRFIX}-${currentPage}.png`;
		// Special case for last page
		if (currentPage === PAGE_COUNT) return null;
		// For all other pages
		return `/${DOC_PRFIX}/${DOC_PRFIX}-${currentPage + 1}.png`;
		//
	}, [currentPage]);

	//
	// C. Handle actions

	function handleReducePage() {
		// Special case for first page
		if (currentPage <= 0) return;
		// For all other pages
		else setCurrentPage(prev => (prev - 2));
		//
	}

	function handleIncreasePage() {
		// Special case for first page
		if (currentPage <= 0) setCurrentPage(1);
		// Special case for last page
		else if (currentPage >= PAGE_COUNT) return;
		// For all other pages
		else setCurrentPage(prev => (prev + 2));
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
		<div className={styles.container}>

			{leftPageUrl ? (
				<div className={styles.arrowWrapper} onClick={handleReducePage}>
					<IconChevronLeft size={30} />
				</div>
			) : (
				<div className={styles.arrowWrapper} />
			)}

			<div className={styles.pageWrapper}>
				{leftPageUrl ? <Image className={styles.pageLeft} src={leftPageUrl} /> : <div />}
				{rightPageUrl ? <Image className={styles.pageRight} src={rightPageUrl} /> : <div />}
			</div>

			{rightPageUrl ? (
				<div className={styles.arrowWrapper} onClick={handleIncreasePage}>
					<IconChevronRight size={30} />
				</div>
			) : (
				<div className={styles.arrowWrapper} />
			)}

		</div>
	);

	//
}
