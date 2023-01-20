/* API */
import dynamic from 'next/dynamic';

/* Config */
import config from '../config/cms';

/**
 * Load the CMS Dynamically
 * 
 * It won't work for server-side rendering becaue it relies on `window`. 
 */
export default function CMS() {
	const CMS = dynamic(
		async () => {
			const netlifly = await import('netlify-cms-app');
			const cms = netlifly.default;
			cms.init({ config });
			return () => <></>
		},
		{ ssr: false, loading: () => <></> },
	);
	return <CMS />;
}
