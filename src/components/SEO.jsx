import {Helmet} from 'react-helmet-async';
export default function SEO({title,description='Discover considered jewellery and modern womenswear at Élane.',path='/'}) {
 const site='https://example.com';
 return <Helmet><title>{title} | Élane</title><meta name="description" content={description}/><link rel="canonical" href={`${site}${path}`}/><meta property="og:title" content={`${title} | Élane`}/><meta property="og:description" content={description}/><meta property="og:type" content="website"/><meta name="robots" content="index,follow"/></Helmet>;
}