import {Link,NavLink} from 'react-router-dom';
import {Search,UserRound,Heart,ShoppingBag,Menu,X,Instagram,ArrowUpRight} from 'lucide-react';
import {useState} from 'react';
import {useShop} from '../context/ShopContext';
const nav=[['Home','/'],['Shop All','/shop'],['Collections','/collections'],['Jewellery','/jewellery'],['Women’s Apparel','/apparel'],['About','/about']];
export function Layout({children}) {
 const [open,setOpen]=useState(false),[search,setSearch]=useState(false),[q,setQ]=useState('');
 const {cart,wishlist}=useShop();
 const count=cart.reduce((n,i)=>n+i.qty,0);
 return <div className="min-h-screen bg-ivory text-espresso">
  <div className="announcement">Complimentary shipping on orders over ₹7,500 <span>·</span> Thoughtfully made, always</div>
  <header className="site-header">
   <button className="mobile-menu icon-btn" aria-label="Open navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   <Link to="/" className="brand">ÉLANE<span>WOMEN’S FASHION</span></Link>
   <nav className="desktop-nav">{nav.map(([label,path])=><NavLink key={path} to={path} end={path==='/'}>{label}</NavLink>)}</nav>
   <div className="header-actions">
    <button className="icon-btn" aria-label="Search" onClick={()=>setSearch(!search)}><Search/></button>
    <Link className="icon-btn" aria-label="My account" to="/account"><UserRound/></Link>
    <Link className="icon-btn relative" aria-label="Wishlist" to="/wishlist"><Heart/>{wishlist.length>0&&<i className="count">{wishlist.length}</i>}</Link>
    <Link className="icon-btn relative" aria-label="Shopping bag" to="/cart"><ShoppingBag/>{count>0&&<i className="count">{count}</i>}</Link>
   </div>
  </header>
  {search&&<form className="search-drawer" onSubmit={e=>{e.preventDefault();location.href='/shop?search='+encodeURIComponent(q)}}><Search size={18}/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Search jewellery, dresses, essentials…"/><button className="text-link">Search <ArrowUpRight size={14}/></button></form>}
  {open&&<nav className="mobile-nav">{nav.map(([label,path])=><Link onClick={()=>setOpen(false)} key={path} to={path}>{label}</Link>)}<Link to="/contact">Contact</Link></nav>}
  <main>{children}</main>
  <footer className="footer"><div className="footer-top"><div><Link to="/" className="brand footer-brand">ÉLANE<span>WOMEN’S FASHION</span></Link><p>Considered pieces for the way you live, move and express yourself.</p><div className="social"><a href="https://instagram.com" aria-label="Instagram"><Instagram/></a><a href="https://pinterest.com" aria-label="Pinterest">P</a></div></div><div><h4>Explore</h4><Link to="/shop">Shop All</Link><Link to="/collections">Collections</Link><Link to="/jewellery">Jewellery</Link><Link to="/apparel">Women’s Apparel</Link></div><div><h4>Client care</h4><Link to="/contact">Contact Us</Link><Link to="/faq">FAQ & Policies</Link><Link to="/track-order">Track Order</Link><Link to="/account">My Account</Link></div><div><h4>The Élane letter</h4><p>Notes on new collections, considered styling and little things worth keeping.</p><Newsletter/></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Élane. All rights reserved.</span><span>India · International delivery available</span><span>Privacy · Terms · Accessibility</span></div></footer>
 </div>
}
function Newsletter(){const [email,setEmail]=useState(''),[done,setDone]=useState(false);return done?<p className="success-note">Thank you — you’re on the list.</p>:<form className="newsletter" onSubmit={e=>{e.preventDefault();if(email.includes('@'))setDone(true)}}><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email address"/><button aria-label="Subscribe"><ArrowUpRight/></button></form>}
export function Breadcrumb({items=[]}){return <div className="breadcrumb"><Link to="/">Home</Link>{items.map((it,i)=><span key={it.label}> / {it.to?<Link to={it.to}>{it.label}</Link>:it.label}</span>)}</div>}
