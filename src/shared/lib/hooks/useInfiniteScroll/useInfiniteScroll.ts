import { MutableRefObject, useEffect } from 'react';

export interface useInfiniteScrollOptions {
	callback?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef?: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: useInfiniteScrollOptions) {
	useEffect(() => {
		const wrapperEl = wrapperRef?.current || null;
		const triggerEl = triggerRef.current;

		let observer: IntersectionObserver | null = null;
		if (callback) {
			const options = {
				root: wrapperEl,
				rootMargin: '0px',
				treshold: 1.0,
			};

			observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback();
				}
			}, options);
			observer.observe(triggerEl);
		}

		return () => {
			if (observer && triggerEl) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(triggerEl);
			}
		};
	}, [callback, triggerRef, wrapperRef]);
}
