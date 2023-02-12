/* API */
import dynamic from 'next/dynamic';

/* Config */
import config from '../config/cms';

/* Components */
const loading = () => <></>;
import PostPreview from '../components/Admin/PostPreview';

/**
 * Load the CMS Dynamically
 * 
 * It won't work for server-side rendering becaue it relies on `window`. 
 */
export default function CMS(): JSX.Element {
	const CMS = dynamic(
		async () => {
			const netlifly = await import('netlify-cms-app');
			const cms = netlifly.default;			
			cms.init({ config });
			cms.registerPreviewTemplate( 'post', PostPreview );
			return loading;
		},
		{ ssr: false, loading },
	);
	return <CMS />;
}
